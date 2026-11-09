import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showNotification } from '@mantine/notifications'
import { nprogress } from '@mantine/nprogress'
import { grantApi } from '@/core/api/sdk'
import {
  GrantControllerUpdateGrantApplicationStatusStatusEnum,
  type GrantApplicationInfo,
} from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useUpdateGrantApplicationStatusMutation() {
  const queryClient = useQueryClient()
  const { grantApplications, setGrantApplications } = useAppContext()

  return useMutation({
    mutationFn: async (payload: {
      grantApplicationId: number
      status: GrantControllerUpdateGrantApplicationStatusStatusEnum
    }) => {
      nprogress.start()

      const { data } = await grantApi.grantControllerUpdateGrantApplicationStatus(
        payload.status,
        payload.grantApplicationId,
      )

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
        title: 'Status updated',
        message: 'Grant application status was updated successfully.',
        autoClose: 3000,
      })
    },
  })
}
