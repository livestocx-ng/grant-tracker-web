import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'

import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GuestRoute } from './components/auth/GuestRoute'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { AppContextProvider } from './core/context'
import { theme } from './core/themes'
import { AuthorizedShell } from './layouts/AuthorizedShell'
import { AllGrantsPage } from './pages/AllGrantsPage'
import { LoginPage } from './pages/LoginPage'
import { MyGrantsPage } from './pages/MyGrantsPage'
import { ProfilePage } from './pages/ProfilePage'

const queryClient = new QueryClient()

function AppRoutes() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AuthorizedShell />}>
          <Route index element={<Navigate to="my-grants" replace />} />
          <Route path="my-grants" element={<MyGrantsPage />} />
          <Route path="grants" element={<AllGrantsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Notifications position="top-right" />
        <NavigationProgress />
        <BrowserRouter>
          <AppContextProvider>
            <AppRoutes />
          </AppContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App
