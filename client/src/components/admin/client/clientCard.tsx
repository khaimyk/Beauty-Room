// file: ClientCard.tsx
import { Card, CardBody, CardFooter, CardHeader, Button } from "@heroui/react"
import { CiCircleRemove } from "react-icons/ci"
import { useTranslation } from "react-i18next"

interface ClientCardProps {
  client: {
    id: string
    name: string
    nickName: string
    phoneNumber: string
  }
  onDelete?: (id: string) => void
  isDeleting?: boolean
}

export const ClientCard = ({
  client,
  onDelete,
  isDeleting = false,
}: ClientCardProps) => {
  const { t } = useTranslation()
  return (
    <Card className="w-full max-w-sm p-2  mb-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border ">
      <CardHeader className="flex flex-col gap-2">
        <h4 className="text-md font-semibold text-gray-900 dark:text-white">
          {client.name}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {client.nickName}
        </p>
      </CardHeader>

      <CardBody>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("client.phoneNumber")}
          <span className="font-semibold text-gray-900 dark:text-white">
            {client.phoneNumber}
          </span>
        </p>
      </CardBody>

      {onDelete && (
        <CardFooter className="flex justify-end">
          <Button
            color="danger"
            variant="flat"
            endContent={<CiCircleRemove />}
            onPress={() => onDelete(client.id)}
            isLoading={isDeleting}
            size="sm"
          >
            {t("client.removeClient")}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
