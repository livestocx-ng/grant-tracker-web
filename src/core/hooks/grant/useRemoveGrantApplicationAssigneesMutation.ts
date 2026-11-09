import { useMutation, useQueryClient } from '@tanstack/react-query'
import { showNotification } from '@mantine/notifications'
import { nprogress } from '@mantine/nprogress'
import { grantApi } from '@/core/api/sdk'

export default function useRemoveGrantApplicationAssigneesMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: {
      grantApplicationId: number
      assigneeIds: string[]
    }) => {
      nprogress.start()

      const { data } =
        await grantApi.grantControllerRemoveGrantApplicationAssignees(
          payload.assigneeIds.join(','),
          payload.grantApplicationId,
        )

      return data
    },
    onError: () => {
      nprogress.reset()
    },
    onSuccess() {
      nprogress.reset()

      void queryClient.invalidateQueries({
        queryKey: ['fetch-grant-applications'],
      })
      void queryClient.invalidateQueries({
        queryKey: ['fetch-assigned-grant-applications'],
      })
      void queryClient.invalidateQueries({
        queryKey: ['fetch-unassigned-grant-application-assignees'],
      })

      showNotification({
        color: 'green',
        title: 'Assignee removed',
        message: 'Assignee was removed from the grant application.',
        autoClose: 3000,
      })
    },
  })
}
