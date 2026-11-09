import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppContext } from '@/core/context'

export function ProtectedRoute() {
  const { authToken } = useAppContext()
  const location = useLocation()

  if (!authToken) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}
