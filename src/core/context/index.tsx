import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import { type MantineTheme, useMantineTheme } from '@mantine/core'
import type { GrantApplicationInfo } from '../sdk/grant-tracker'
import type { AccountInfo } from '../../types/account'

interface AppContextProps {
  theme: MantineTheme | null
  authToken: string
  accountInfo: AccountInfo | null
  grantApplications: GrantApplicationInfo[]
  setAuthToken: (authToken: string) => void
  setAccountInfo: (accountInfo: AccountInfo | null) => void
  setGrantApplications: (grantApplications: GrantApplicationInfo[]) => void
}

export const AppContext = createContext<AppContextProps>({
  theme: null,
  authToken: '',
  accountInfo: null,
  grantApplications: [],
  setAuthToken: () => {},
  setAccountInfo: () => {},
  setGrantApplications: () => {},
})

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const theme = useMantineTheme()

  const [authToken, setAuthToken] = useLocalStorage<string>({
    key: 'authToken',
    defaultValue: '',
    getInitialValueInEffect: false,
  })

  const [accountInfo, setAccountInfo] = useLocalStorage<AccountInfo | null>({
    defaultValue: null,
    key: 'accountInfo',
    getInitialValueInEffect: false,
    deserialize(value) {
      return JSON.parse(value ?? 'null')
    },
  })

  const [grantApplications, setGrantApplications] = useLocalStorage<
    GrantApplicationInfo[]
  >({
    key: 'grantApplications',
    defaultValue: [],
    getInitialValueInEffect: false,
    deserialize(value) {
      return JSON.parse(value ?? '[]')
    },
  })

  return (
    <AppContext.Provider
      value={{
        theme,
        authToken,
        accountInfo,
        grantApplications,
        setAuthToken,
        setAccountInfo,
        setGrantApplications,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
