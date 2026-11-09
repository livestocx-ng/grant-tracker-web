import { useQuery } from '@tanstack/react-query'
import { grantApi } from '@/core/api/sdk'
import type { GrantApplicationInfo } from '@/core/sdk/grant-tracker'
import { useAppContext } from '@/core/context'

export default function useFetchGrantApplicationsQuery(payload: {
  currentPage: number
  pageSize?: number
}) {
  const { authToken, setGrantApplications } = useAppContext()
  const pageSize = payload.pageSize ?? 20

  return useQuery({
    queryKey: ['fetch-grant-applications', payload.currentPage, pageSize],
    queryFn: async () => {
      if (!authToken) {
        return []
      }

      const { data } = await grantApi.grantControllerFetchGrantApplications(
        payload.currentPage,
        pageSize,
      )

      const applications = (
        Array.isArray(data) ? data : [data]
      ) as GrantApplicationInfo[]

      setGrantApplications(applications)

      return applications
    },
    enabled: !!authToken,
  })
}
