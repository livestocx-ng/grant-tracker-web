import {
  AuthApi,
  Configuration as AuthConfiguration,
} from '../sdk/auth'
import {
  GrantApi,
  Configuration as GrantConfiguration,
} from '../sdk/grant-tracker'
import {
  MeApi,
  Configuration as AccountConfiguration,
} from '../sdk/account'
import { appAxiosInstance } from './axios-instance'

export const ServerPath =
  import.meta.env.VITE_CORE_SERVICE_HOST ??
  'https://infra-granttracker.livestocx.xyz'

const authConfig = new AuthConfiguration({ basePath: ServerPath })
const grantConfig = new GrantConfiguration({ basePath: ServerPath })
const accountConfig = new AccountConfiguration({ basePath: ServerPath })

export const authApi = new AuthApi(authConfig, undefined, appAxiosInstance)
export const meApi = new MeApi(accountConfig, undefined, appAxiosInstance)
export const grantApi = new GrantApi(grantConfig, undefined, appAxiosInstance)
