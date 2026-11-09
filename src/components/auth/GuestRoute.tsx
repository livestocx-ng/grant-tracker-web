import { Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from '@/core/context'

export function GuestRoute() {
  const { authToken } = useAppContext()

  if (authToken) {
    return <Navigate to="/dashboard/my-grants" replace />
  }

  return <Outlet />
}
