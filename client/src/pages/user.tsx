import { selectCurrent } from "../features/useSlice"
import { Button, Card, Image, useDisclosure, Link } from "@heroui/react"
import { CiEdit } from "react-icons/ci"
import { BASE_URL } from "../constants"
import { EditProfile } from "../components/admin/user/edit"
import { useAppSelector } from "../app/hooks"
import { FaRegUserCircle } from "react-icons/fa"
import { Paths } from "../utils/paths"
import { Profile } from "../components/profile"
import { AccessDenied } from "../components/error-message/accessDenied"
import { useTranslation } from "react-i18next"

export const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const current = useAppSelector(selectCurrent)
  const { t } = useTranslation()

  if (!current) {
    return <AccessDenied />
  }
  const { name, email, image, description, branchId } = current

  const getPathWithBranch = (path: string) => {
    if (current.role === "SUPERADMIN" || !branchId) return path
    return `${path}?branchId=${branchId}`
  }
  return (
    <div className="container px-4 mx-auto my-6 max-w-7xl">
      <div className="flex flex-col gap-6 w-full">
        {/* Profile Card */}
        <Card className="w-full p-6 space-y-6  ">
          <div className="flex flex-col items-center space-y-4">
            {image ? (
              <Image
                src={`${BASE_URL}${image}`}
                isZoomed
                alt={name}
                width={200}
                height={200}
                loading="lazy"
                className=" object-top object-cover border-4 border-white rounded-full shadow-lg"
              />
            ) : (
              <FaRegUserCircle className="text-gray-400" size={200} />
            )}

            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {email}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>

            <div className="flex flex-col w-full gap-3 md:flex-row md:gap-4">
              <Button
                onPress={onOpen}
                endContent={<CiEdit />}
                color="primary"
                fullWidth
                className="font-medium"
              >
                {t("profile.editProfile")}
              </Button>

              {current?.role !== "CLIENT" && (
                <Button
                  as={Link}
                  href={getPathWithBranch(Paths.AdminUser)}
                  color="secondary"
                  variant="solid"
                  fullWidth
                  className="font-medium"
                >
                  {t("profile.adminPanel")}
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Profile Details */}

        <Profile current={current} />
      </div>

      {/* Edit Profile Modal */}
      <EditProfile isOpen={isOpen} onClose={onClose} user={current} />
    </div>
  )
}
