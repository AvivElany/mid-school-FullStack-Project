export interface ICard {
  _id: string
  title: string
  subtitle: string
  content: string
  isDeleted: boolean
  image: IImage
  address: IAddress
  bizNumber: number
  likes: string[]
  user_id: string
  createdAt: string
  __v: number
}
export interface INews {
  _id: string
  title: string,
  subtitle: string,
  content: string,
  date: string,
  web: string,
  image: IImage,
  isDeleted: boolean, 
  createdAt: string
  __v: number
}

// -----------------------------------------------------------------------

interface IImage {
  url: string
  alt: string
  _id: string
}

interface IAddress {
  state: string
  country: string
  city: string
  street: string
  houseNumber: number
  zip: number
  _id: string
}