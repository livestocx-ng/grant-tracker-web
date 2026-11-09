import { useQuery } from '@tanstack/react-query'
import { grantApi } from '@/core/api/sdk'
import type { GrantApplicationInfo } from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useFetchAssignedGrantApplicationsQuery(payload: {
  currentPage: number
  pageSize?: number
}) {
  const { authToken } = useAppContext()
  const pageSize = payload.pageSize ?? 20

  return useQuery({
    queryKey: [
      'fetch-assigned-grant-applications',
      payload.currentPage,
      pageSize,
    ],
    queryFn: async () => {
      if (!authToken) {
        return []
      }

      const { data } =
        await grantApi.grantControllerFetchAssignedGrantApplications(
          payload.currentPage,
          pageSize,
        )

      return (Array.isArray(data) ? data : [data]) as GrantApplicationInfo[]
    },
    enabled: !!authToken,
  })
}
