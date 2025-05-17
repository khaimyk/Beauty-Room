import { useContext, useEffect, useState } from "react"
import {
  Card,
  CardBody,
  Avatar,
  Modal,
  ModalBody,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalContent,
  Button,
} from "@heroui/react"
import { useGetAllReviewsQuery } from "../../app/services/reviewApi"
import { useLocation, useParams } from "react-router"
import { BASE_URL } from "../../constants"
import { ThemeContext } from "../theme-provider"
import { ClientSearch } from "./ReviewAuth"
import { Reviews } from "./reviews"
import { Rating } from "./rating"
import { useGetBranchByIdQuery } from "../../app/services/branchApi"
import { CiLocationOn } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import { useLazySearchClientsQuery } from "../../app/services/clientApi"
import { useAppSelector } from "../../app/hooks"
import { selectCurrent } from "../../features/useSlice"
import { InfoItem } from "../branch"
import { useTranslation } from "react-i18next"

type ReviewsPageProps = {
  type: "user" | "branch"
}

export const ReviewsPage = ({ type }: ReviewsPageProps) => {
  const location = useLocation()
  const current = useAppSelector(selectCurrent)
  const { branchId } = useParams<{ branchId: any }>()
  const { userId, name, image } = location.state ?? {}
  const { data: branch } = useGetBranchByIdQuery(branchId || "")
  const [triggerSearch, { isLoading: isSearching }] =
    useLazySearchClientsQuery()
  const [clientData, setClientData] = useState<any>(null)
  const { t } = useTranslation()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { theme } = useContext(ThemeContext)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const { data, isLoading } = useGetAllReviewsQuery()
  const userReviews = data?.filter(review => review.userId === userId)
  const branchReviews = data?.filter(review => review.branchId === branchId)
  const reviews = type === "user" ? userReviews : branchReviews
  const reviewCount = reviews?.length || 0

  useEffect(() => {
    const fetchClientData = async () => {
      if (current?.id) {
        try {
          const result = await triggerSearch({ userId: current.id }).unwrap()
          if (result.length > 0) {
            setClientData(result[0])
          }
        } catch (err) {
          console.error("Помилка при пошуку клієнта", err)
        }
      }
    }
    fetchClientData()
  }, [current, triggerSearch])

  const handleReviewClick = () => {
    if (clientData) {
      // Якщо клієнт аутентифікований, відкриваємо форму відгуку з його даними
      setShowReviewForm(true)
    } else {
      // Якщо не аутентифікований, відкриваємо модалку авторизації
      onOpen()
    }
  }

  if (type === "user" && !userId) {
    return <p className="text-center p-4">{t("reviews.userNotFound")}</p>
  }

  if (type === "branch" && !branch) {
    return <p className="text-center p-4">{t("reviews.branchNotFound")}</p>
  }
  if (isLoading) {
    return <p className="text-center p-4">{t("reviews.loading")}</p>
  }
  if (isSearching) {
    return <p className="text-center p-4">{t("reviews.loading")}</p>
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {type === "user" ? (
        <>
          <Avatar
            src={image ? `${BASE_URL}${image}` : ""}
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B] mr-2 w-28 h-28 ",
              icon: "text-black/80",
              img: "object-top object-cover",
            }}
          />
          <h2 className="text-2xl font-semibold mt-2">{name}</h2>
          <Rating reviews={userReviews} showCount />
        </>
      ) : (
        <>
          <Avatar
            src={branch?.image ? `${BASE_URL}${branch.image}` : ""}
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B] mr-2 w-28 h-28 ",
              icon: "text-black/80",
              img: "object-top object-cover",
            }}
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">{branch?.name}</h2>
            <Rating reviews={branch?.reviews} showCount />
            <div className="flex items-center gap-2 mt-2">
              <InfoItem
                icon={<CiLocationOn className="text-xl" />}
                title="Адреса"
                content={`${branch?.city}, ${branch?.address}`}
              />
            </div>
          </div>
        </>
      )}

      <Card className="w-full max-w-2xl mt-6 shadow-lg rounded-xl border border-gray-700 dark:border-gray-200">
        <CardBody className="p-4">
          <h3 className="text-lg font-semibold text-center">
            {t("reviews.title")}
          </h3>
          <div
            className="bg-gray-100 p-4 rounded-xl mt-4 mb-4 flex flex-col items-center dark:bg-gray-800 justify-center cursor-pointer hover:bg-gray-200 transition"
            onClick={handleReviewClick}
          >
            <p className="text-gray-600">{t("reviews.leaveReview")}</p>
            <div className="flex space-x-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={24} className="text-gray-400" />
              ))}
            </div>
          </div>

          {/* Модалка для нових клієнтів */}
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            className={`${theme} text-foreground`}
            placement="center"
          >
            <ModalContent>
              {onClose => (
                <>
                  <ModalHeader>{t("reviews.authTitle")}</ModalHeader>
                  <ModalBody>
                    <ClientSearch
                      userId={type === "user" ? userId : undefined}
                      branchId={type === "branch" ? branchId : undefined}
                      onClose={onClose}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onPress={onClose}>
                      {t("reviews.close")}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          {/* Модалка для аутентифікованих клієнтів */}
          <Modal
            isOpen={showReviewForm}
            onOpenChange={() => setShowReviewForm(false)}
            backdrop="blur"
            className={`${theme} text-foreground`}
          >
            <ModalContent>
              {onClose => (
                <>
                  <ModalHeader>{t("reviews.reviewTitle")}</ModalHeader>
                  <ModalBody>
                    <ClientSearch
                      userId={type === "user" ? userId : undefined}
                      branchId={type === "branch" ? branchId : undefined}
                      onClose={onClose}
                      defaultValues={clientData} // Підставляємо дані клієнта
                      isAuthenticated={true} // Позначаємо, що клієнт аутентифікований
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onPress={onClose}>
                      {t("reviews.cancel")}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          {isLoading ? (
            <p className="text-center text-gray-500 py-4">
              {t("reviews.loading")}
            </p>
          ) : reviewCount > 0 ? (
            <div className="space-y-4">
              {(reviews ?? []).map(review => (
                <Reviews
                  key={review.id}
                  id={review.id}
                  comment={review.comment ?? ""}
                  rating={review.rating}
                  client={review.client?.name}
                  createdAt={review.createdAt}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {t("reviews.noReviews")}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
