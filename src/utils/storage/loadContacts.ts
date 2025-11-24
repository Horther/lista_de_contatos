import Contact from '../../models/Contact'
import { sanitizeContacts } from './cleanContacts'

export function loadContacts(): Contact[] {
  const raw = localStorage.getItem('contatos')

  if (!raw) return []

  try {
    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) throw new Error('Invalid format')

    return sanitizeContacts(parsed)
  } catch {
    //clean the corruption
    localStorage.removeItem('contatos')
    return []
  }
}
