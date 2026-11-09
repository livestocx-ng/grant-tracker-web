import { useQuery } from '@tanstack/react-query'
import { grantApi } from '@/core/api/sdk'
import type { AccountInfo } from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useFetchUnassignedGrantApplicationAssigneesQuery(payload: {
  grantApplicationId?: number
  enabled?: boolean
}) {
  const { authToken } = useAppContext()
  const enabled =
    Boolean(authToken) &&
    Boolean(payload.grantApplicationId) &&
    (payload.enabled ?? true)

  return useQuery({
    queryKey: [
      'fetch-unassigned-grant-application-assignees',
      payload.grantApplicationId,
    ],
    queryFn: async () => {
      const { data } = await grantApi.grantControllerFetchUnassignedAssignees(
        payload.grantApplicationId!,
      )

      return (Array.isArray(data) ? data : [data]) as AccountInfo[]
    },
    enabled,
  })
}
