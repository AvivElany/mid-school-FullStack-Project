export interface IUserSigninJwtPayload {
  _id:string
  isTeacher:boolean
  isPrincipal: boolean
  isDeleted: boolean
  iat:number
}

export interface IUserDetails {
  [x: string]: any
  _id: string
  isMale: boolean
  job: string
  classroom: string
  name: IName
  phone: string
  email: string
  password: string
  image: IImage
  address: IAddress
  isPrincipal: boolean
  isTeacher: boolean
  isDeleted: boolean
  grades: IGrades
  createdAt: string
}

export interface IUserSignup {
  name: IName
  phone: string
  email: string
  password: string
  image?: IImage
  address: IAddress
  isTeacher: boolean
  isMale: boolean
}

// -----------------------------------------------------------------------

interface IName {
  first: string
  middle?: string
  last: string
}

interface IImage {
  url: string
  alt: string
}

interface IAddress {
  state?: string
  country: string
  city: string
  street: string
  houseNumber: number
  zip: number
}

interface IGrades {
math: number
english: number
sciences: number
history: number
literature: number
programming: number
art: number
}
