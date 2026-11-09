import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showNotification } from '@mantine/notifications'
import { nprogress } from '@mantine/nprogress'
import { grantApi } from '@/core/api/sdk'
import type {
  AddGrantApplicationDto,
  GrantApplicationInfo,
} from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useAddGrantApplicationMutation() {
  const queryClient = useQueryClient()
  const { grantApplications, setGrantApplications } = useAppContext()

  return useMutation({
    mutationFn: async (payload: AddGrantApplicationDto) => {
      nprogress.start()

      const { data } = await grantApi.grantControllerAddGrantApplication(payload)

      return data
    },
    onError: () => {
      nprogress.reset()
    },
    onSuccess(data: GrantApplicationInfo) {
      nprogress.reset()

      setGrantApplications([data, ...grantApplications])

      void queryClient.invalidateQueries({
        queryKey: ['fetch-grant-applications'],
      })
      void queryClient.invalidateQueries({
        queryKey: ['fetch-assigned-grant-applications'],
      })

      showNotification({
        color: 'green',
        title: 'Grant created',
        message: 'Grant application was created successfully.',
        autoClose: 3000,
      })
    },
  })
}
