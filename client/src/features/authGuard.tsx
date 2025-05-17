import { useCurrentQuery } from "../app/services/userApi"
import { Spinner } from "@heroui/react"

export const AuthGuard = ({
  children,
  optional = false,
}: {
  children: JSX.Element
  optional?: boolean
}) => {
  const { isLoading, isError } = useCurrentQuery()

  if (isLoading) {
    return <Spinner />
  }

  // If auth is optional or user is authenticated, show children
  if (optional || !isError) {
    return children
  }

  // For protected routes when not authenticated
  // You might want to redirect to login here or show an access denied message
  return children // or redirect to login
}
