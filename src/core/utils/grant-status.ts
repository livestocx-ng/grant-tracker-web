export function statusBadgeColor(status?: string) {
  switch (status) {
    case 'processing':
      return 'blue'
    case 'review':
      return 'yellow'
    case 'submitted':
      return 'teal'
    case 'completed':
      return 'green'
    case 'closed':
      return 'gray'
    case 'cancelled':
      return 'orange'
    case 'rejected':
      return 'red'
    default:
      return 'gray'
  }
}

export function formatStatusLabel(status?: string) {
  if (!status) {
    return '—'
  }

  return status.charAt(0).toUpperCase() + status.slice(1)
}

export const GRANT_STATUS_OPTIONS = [
  { value: 'processing', label: 'Processing' },
  { value: 'review', label: 'Review' },
  { value: 'submitted', label: 'Submitted' },
  { value: 'completed', label: 'Completed' },
  { value: 'closed', label: 'Closed' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'rejected', label: 'Rejected' },
] as const
