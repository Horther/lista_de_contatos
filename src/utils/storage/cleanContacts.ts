import Contact from '../../models/Contact'

export function sanitizeContacts(data: any[]): Contact[] {
  return data.filter((c) => {
    return (
      typeof c.id === 'number' &&
      typeof c.name === 'string' &&
      typeof c.email === 'string' &&
      typeof c.pNumber === 'number' &&
      typeof c.favorite === 'boolean' &&
      typeof c.category === 'string'
    )
  })
}
