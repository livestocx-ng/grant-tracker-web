import { useQuery } from '@tanstack/react-query'
import { grantApi } from '@/core/api/sdk'
import type { AccountInfo } from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useFetchAllAssigneesQuery(payload?: {
  enabled?: boolean
}) {
  const { authToken } = useAppContext()
  const enabled = Boolean(authToken) && (payload?.enabled ?? true)

  return useQuery({
    queryKey: ['fetch-all-assignees'],
    queryFn: async () => {
      const { data } = await grantApi.grantControllerFetchAllAssignees()
      return (Array.isArray(data) ? data : [data]) as AccountInfo[]
    },
    enabled,
  })
}
