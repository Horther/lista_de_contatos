import * as enums from '../utils/enums/Contacts'

class TypeContact {
  name: string
  email: string
  category: enums.Category
  pNumber: number
  favorite: boolean
  id: number

  constructor(
    name: string,
    email: string,
    category: enums.Category,
    pNumber: number,
    favorite: boolean,
    id: number
  ) {
    this.name = name
    this.email = email
    this.category = category
    this.pNumber = pNumber
    this.favorite = favorite
    this.id = id
  }
}

export default TypeContact
