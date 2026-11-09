import { GrantApplicationsList } from '@/components/grants/GrantApplicationsList'
import { useAppContext } from '@/core/context'
import useFetchAssignedGrantApplicationsQuery from '@/core/hooks/grant/useFetchAssignedGrantApplicationsQuery'

export function MyGrantsPage() {
  const { accountInfo } = useAppContext()

  const {
    data: grantApplications = [],
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useFetchAssignedGrantApplicationsQuery({
    currentPage: 1,
  })

  return (
    <GrantApplicationsList
      title="My Grants"
      description={`Grants applications assigned to${
        accountInfo?.firstName ? ` ${accountInfo.firstName}` : ' you'
      }.`}
      grantApplications={grantApplications}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      onRefresh={() => {
        void refetch()
      }}
      emptyMessage="No grants assigned to you yet."
      errorMessage="Could not load your grant applications."
      showAddGrant
    />
  )
}
