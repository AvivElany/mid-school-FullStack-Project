import { jwtDecode } from 'jwt-decode'
import { IUserSigninJwtPayload, IUserSignup, IUserDetails } from '../interfaces/UserInterfaces'
import { apiBase } from '../config'

/* ----------------------------------------------------------------------------------------------------- */

// handle the actual sign-in mechanism

export const doSignIn = async (email:string,password:string): Promise<{error:string|null,result?:IUserDetails|undefined}> => {
  try {
    // send the email & password to the server,
    // if all goes well we should receive a token (string)
    const response = await fetch(`${apiBase}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email,password})
    })

    // let's get the response text (error message -or- token)
    // const data = await response.text()
    const data = await response.json()

    // the server returned status code not in the 200-299 range, so quit and return an error message
    if (!response.ok) return { error: data }

    // no error, let's save the token in local storage
    await saveToken(data)
    await console.log(data);
    

    // let's try to fetch user details from the server
    let {error, result} = await fetchUserDetails();
    // there's an error, return it
    if (error) return { error }
    // no error- return result
    return { error:null, result }
  } catch(err) {
    // there's an error, return it
    const errMessage = (err as Error).message
    return { error: errMessage }
  }
}

/* ----------------------------------------------------------------------------------------------------- */

// handle the actual sign-up mechanism

export const doSignUp = async (userData:IUserSignup): Promise<{error:string|undefined}> => {
  try {
    // send the email & password to the server,
    // if all goes well we should receive a token (string)
    const token = await getToken()
    console.log("The token now is: ", token);
    
    if (!token) return { error: 'No token found', result: undefined }
    const response = await fetch(`${apiBase}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
       },
      body: JSON.stringify(userData)
    })

    // let's get the response text (error message -or- token)
    const data = await response.json()

    // the server returned status code not in the 200-299 range, so quit and return an error message
    if (!response.ok) return { error: data }

    // if no errors
    return { error:undefined }

  } catch(err) {
    // there's an error, return it
    const errMessage = (err as Error).message
    return { error: errMessage }
  }
}

/* ----------------------------------------------------------------------------------------------------- */

// save the token to local storage

export const saveToken = (token: string): void => {
  console.log("token to save is: ", token);
  
    localStorage.setItem('userToken', token);
}



/* ----------------------------------------------------------------------------------------------------- */

// remove the token to local storage

export const removeToken = async ():Promise<void> => {
  localStorage.removeItem('userToken')
}

/* ----------------------------------------------------------------------------------------------------- */

// get the token from local storage

export const getToken = async (): Promise<string | null> => {
  const token = localStorage.getItem('userToken')
  
  if (token) { 
    return token
  } else { 
    return null
  }
}

/* ----------------------------------------------------------------------------------------------------- */

// decode the token string

const decodeToken = async (token:string):Promise<IUserSigninJwtPayload> => {
  return jwtDecode<IUserSigninJwtPayload>(token)
}

/* ----------------------------------------------------------------------------------------------------- */

// fetch the extended user details from the server

export const fetchUserDetails = async (): Promise<{ error: string | null, result?: IUserDetails }> => {
  const token = await getToken();
  if (!token) return { error: `Can't read token from local storage` };

  try {
    const decodedToken = await decodeToken(token);
    if (!decodedToken || !decodedToken._id) {
      return { error: `Token decoding failed or missing '_id'` };
    }
    const { _id } = decodedToken;

    const response = await fetch(`${apiBase}/users/${_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    });

    if (!response.ok) {
      const errorMessage = response.statusText || 'Unknown error';
      return { error: `Error fetching the user's details (${errorMessage})` };
    }

    const userDetails: IUserDetails = await response.json();
    return { error: null, result: userDetails };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: `Error fetching the user's details (${errMessage})` };
  }
};

/* ----------------------------------------------------------------------------------------------------- */