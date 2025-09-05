import { parseISO } from 'date-fns'

export const safeParseDate = (timestamp: Date | string): Date => {
  if (timestamp instanceof Date) {
    return timestamp
  }
  try {
    return parseISO(timestamp)
  } catch {
    return new Date()
  }
}
