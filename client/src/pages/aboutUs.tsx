import {
  useGetBranchByIdQuery,
  useLazyGetBranchByIdQuery,
} from "../app/services/branchApi"
import {
  Image,
  Button,
  Card,
  CardBody,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react"
import { CiEdit, CiLocationOn } from "react-icons/ci"
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa"
import { IoShareSocialSharp } from "react-icons/io5"
import { useNavigate, useParams } from "react-router"
import { InfoItem } from "../components/branch"
import { LoadingSkeleton } from "../components/loading"
import { ReviewsPage } from "../components/reviews/page"
import { Rating } from "../components/reviews/rating"
import { Paths } from "../utils/paths"
import { getEmbeddedMapUrl } from "../utils/getEmbeddedMaps"
import { FaXTwitter } from "react-icons/fa6"
import { useContext, useState } from "react"
import { BASE_URL } from "../constants"
import { useTranslation } from "react-i18next"
import { EditBranch } from "../components/admin/branch/edit"
import { useAppSelector } from "../app/hooks"
import { selectCurrent } from "../features/useSlice"
import { ThemeContext } from "../components/theme-provider"

export const AboutUs = () => {
  const { branchId } = useParams<{ branchId: string }>()
  const navigate = useNavigate()
  const current = useAppSelector(selectCurrent)
  const {
    data: branch,
    isLoading,
    error,
  } = useGetBranchByIdQuery(branchId || "")
  const [mapLoadError, setMapLoadError] = useState(false)
  const { t } = useTranslation()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [triggerByIdBranch] = useLazyGetBranchByIdQuery()
  const { theme } = useContext(ThemeContext)

  const embeddedMapUrl =
    branch && branch.city && branch.address
      ? getEmbeddedMapUrl(branch.city, branch.address)
      : null

  const socialIcons: Record<string, JSX.Element> = {
    instagram: <FaInstagram size={22} color="#E1306C" />,
    facebook: <FaFacebookF size={22} color="#1877F2" />,
    telegram: <FaTelegramPlane size={22} color="#0088CC" />,
    x: <FaXTwitter size={22} color="#1DA1F2" />,
    tiktok: <FaTiktok size={22} color="#EE1D51" />,
    youtube: <FaYoutube size={22} color="#FF0000" />,
    website: <FaGlobe size={22} color="#FF0000" />,
  }

  const renderSocialMedia = () => {
    if (!branch?.socialMedia) {
      return <div className="text-gray-500">{t("branch.noSocials")}</div>
    }

    try {
      const parsedSocials: Array<{ name: string; link: string }> = JSON.parse(
        branch.socialMedia,
      )

      if (!parsedSocials.length) {
        return <div className="text-gray-500">{t("branch.noSocials")}</div>
      }

      return (
        <div className="flex flex-wrap gap-3">
          {parsedSocials.map((item, idx) => {
            const key = item.name.toLowerCase()
            const icon = socialIcons[key] || <FaGlobe />

            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title={item.name}
              >
                {icon}
              </a>
            )
          })}
        </div>
      )
    } catch (err) {
      return <div className="text-gray-500">{t("branch.noSocials")}</div>
    }
  }

  if (isLoading) return <LoadingSkeleton />
  if (error || !branch) {
    return (
      <div className="p-8 text-center text-red-500">
        {t("branch.loadingError")}
      </div>
    )
  }
  const handleGoHome = (id: string) => {
    navigate(`${Paths.branch}/${id}`)
  }
  const handleClose = async () => {
    try {
      if (branchId) {
        await triggerByIdBranch(branchId)
        onClose()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Основна інформація */}
      <Card className="shadow-sm">
        <CardBody className="space-y-6 p-6 items-center">
          <Image
            src={branch.image ? `${BASE_URL}${branch.image}` : ""}
            alt={branch.name}
            className="lg:w-72 lg:h-72 md:w-64 md:h-64 sm:w-52 sm:h-52 w-40 h-40  object-top object-cover rounded-full shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {branch.name}
          </h1>
          <Rating reviews={branch.reviews} showCount />

          {/* Кнопка редагування */}
          {(current?.role === "SUPERADMIN" ||
            (current?.role === "ADMIN" && branch.adminId === current.id)) && (
            <Button
              color="primary"
              onPress={onOpen}
              endContent={<CiEdit />}
              className=" w-full sm:w-auto hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            >
              Редагувати
            </Button>
          )}
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className={`${theme} text-foreground`}
            backdrop="blur"
            scrollBehavior="inside"
            size="lg"
            placement="center"
          >
            <ModalContent className="max-w-md md:max-w-lg max-h-[90vh]">
              {onClose => (
                <>
                  <ModalHeader className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-3">
                    Редагувати
                  </ModalHeader>
                  <ModalBody className="py-4">
                    <EditBranch
                      onClose={handleClose}
                      branch={branch}
                      users={current ? [current] : []}
                    />
                  </ModalBody>
                  <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <Button
                      variant="light"
                      onPress={onClose}
                      className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Закрити
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          {/* Контактна інформація */}
          <div className="space-y-4 flex flex-col gap-2 lg:gap-4">
            <InfoItem
              icon={<FaPhoneAlt className="text-lg" />}
              title={t("branch.phone")}
              content={branch.phoneNumber}
            />

            <InfoItem
              icon={<IoShareSocialSharp className="text-xl" />}
              title={t("branch.socials")}
              content={renderSocialMedia()}
            />
            <p className="text-gray-600 dark:text-gray-400">
              {branch.description}
            </p>
          </div>
        </CardBody>
      </Card>

      {/* Карта */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {t("branch.location")}
        </h3>
        <InfoItem
          icon={<CiLocationOn className="text-xl" />}
          title={t("branch.address")}
          content={`${branch.city}, ${branch.address}`}
        />

        {embeddedMapUrl && !mapLoadError ? (
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src={embeddedMapUrl}
              className="w-full h-80"
              loading="lazy"
              allowFullScreen
              title="Google Maps"
              referrerPolicy="no-referrer-when-downgrade"
              onError={() => setMapLoadError(true)}
            />
          </div>
        ) : (
          <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-center p-4">
              <p className="text-red-500">{t("branch.mapError")}</p>
              <p className="text-sm mt-2 dark:text-gray-300">
                {t("branch.address")}: {branch.city}, {branch.address}
              </p>
              <Button
                className="mt-3"
                onPress={() =>
                  window.open(
                    `https://www.google.com/maps?q=${encodeURIComponent(`${branch.city}, ${branch.address}`)}`,
                  )
                }
              >
                {t("branch.openMap")}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Відгуки */}
      <Card className="shadow-sm ">
        <CardBody className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {t("branch.reviews")}
          </h2>
          <div className="space-y-4">
            <ReviewsPage type="branch" />
          </div>
        </CardBody>
      </Card>

      <Button
        color="primary"
        className="w-full font-semibold hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors"
        onPress={() => branchId && handleGoHome(branchId)}
      >
        {t("branch.bookVisit")}
      </Button>
    </div>
  )
}
