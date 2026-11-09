import axios, { type AxiosError } from 'axios'
import { showNotification } from '@mantine/notifications'
import { nprogress } from '@mantine/nprogress'

export const appAxiosInstance = axios.create()

appAxiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const data = error.response?.data as
      | { message?: string; error?: string }
      | undefined

    if (error.response) {
      nprogress.reset()

      if (!data?.message?.includes('Unauthorized')) {
        showNotification({
          message: data?.message ?? 'Request failed',
          title: data?.error,
          color: 'red',
        })
      }
    } else if (!error.request) {
      showNotification({
        color: 'red',
        message: 'An error occurred while processing your request',
      })
    }

    return Promise.reject(error)
  },
)

appAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = JSON.parse(token)
    }

    return config
  },
  (error) => Promise.reject(error),
)
