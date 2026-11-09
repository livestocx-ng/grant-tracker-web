import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showNotification } from '@mantine/notifications'
import { nprogress } from '@mantine/nprogress'
import { grantApi } from '@/core/api/sdk'
import { useAppContext } from '@/core/context'

export default function useDeleteGrantApplicationMutation() {
  const queryClient = useQueryClient()
  const { grantApplications, setGrantApplications } = useAppContext()

  return useMutation({
    mutationFn: async (payload: {
      grantApplicationId: number
      grantApplicationKey: string
    }) => {
      nprogress.start()

      await grantApi.grantControllerRemoveGrantApplication(
        payload.grantApplicationId,
      )

      return payload.grantApplicationKey
    },
    onError: () => {
      nprogress.reset()
    },
    onSuccess(grantApplicationKey: string) {
      nprogress.reset()

      setGrantApplications(
        grantApplications.filter((grant) => grant.id !== grantApplicationKey),
      )

      void queryClient.invalidateQueries({
        queryKey: ['fetch-grant-applications'],
      })
      void queryClient.invalidateQueries({
        queryKey: ['fetch-assigned-grant-applications'],
      })

      showNotification({
        color: 'green',
        title: 'Grant deleted',
        message: 'Grant application was deleted successfully.',
        autoClose: 3000,
      })
    },
  })
}
