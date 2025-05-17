import { User as NextUiUser } from "@heroui/react"
import { BASE_URL } from "../../../constants"

type Props = {
  name: string
  image: string
  description?: string
  className?: string
}

export const User: React.FC<Props> = ({
  name = "",
  description = "",
  image = "",
  className = "",
}) => {
  return (
    <NextUiUser
      name={name}
      className={className}
      description={description}
      avatarProps={{
        src: `${BASE_URL}${image}`,
      }}
    />
  )
}
