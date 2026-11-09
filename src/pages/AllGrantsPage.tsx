import { GrantApplicationsList } from '@/components/grants/GrantApplicationsList'
import { useAppContext } from '@/core/context'
import useFetchGrantApplicationsQuery from '@/core/hooks/grant/useFetchGrantApplicationsQuery'

export function AllGrantsPage() {
  const { grantApplications } = useAppContext()

  const { isLoading, isFetching, isError, refetch } =
    useFetchGrantApplicationsQuery({
      currentPage: 1,
    })

  return (
    <GrantApplicationsList
      title="All Grants"
      description="Browse every grant application tracked across Afritint."
      grantApplications={grantApplications}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      onRefresh={() => {
        void refetch()
      }}
      emptyMessage="No grant applications found yet."
      errorMessage="Could not load grant applications."
    />
  )
}
