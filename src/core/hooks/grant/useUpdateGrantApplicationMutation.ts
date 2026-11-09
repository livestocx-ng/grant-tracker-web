import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showNotification } from '@mantine/notifications'
import { nprogress } from '@mantine/nprogress'
import { grantApi } from '@/core/api/sdk'
import type {
  GrantApplicationInfo,
  UpdateGrantApplicationDto,
} from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useUpdateGrantApplicationMutation() {
  const queryClient = useQueryClient()
  const { grantApplications, setGrantApplications } = useAppContext()

  return useMutation({
    mutationFn: async (payload: {
      grantApplicationId: number
      values: UpdateGrantApplicationDto
    }) => {
      nprogress.start()

      const { data } = await grantApi.grantControllerUpdateGrantApplication(
        payload.grantApplicationId,
        payload.values,
      )

      console.log('[UPDATED-GRANT-APPLICATION] :: ', data)

      return data
    },
    onError: () => {
      nprogress.reset()
    },
    onSuccess(data: GrantApplicationInfo) {
      nprogress.reset()

      setGrantApplications(
        grantApplications.map((grant) =>
          grant.id === data.id ? { ...grant, ...data } : grant,
        ),
      )

      void queryClient.invalidateQueries({
        queryKey: ['fetch-grant-applications'],
      })
      void queryClient.invalidateQueries({
        queryKey: ['fetch-assigned-grant-applications'],
      })

      showNotification({
        color: 'green',
        title: 'Grant updated',
        message: 'Grant application was updated successfully.',
        autoClose: 3000,
      })
    },
  })
}
