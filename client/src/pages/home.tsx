import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  RadioGroup,
  Spinner,
  useDisclosure,
} from "@heroui/react"
import { CustomRadio } from "../components/radio"
import { useGetAllUsersQuery } from "../app/services/userApi"
import { BASE_URL } from "../constants"
import { useNavigate, useParams, useSearchParams } from "react-router"
import { Paths } from "../utils/paths"
import { Controller, useForm } from "react-hook-form"
import { Rating } from "../components/reviews/rating"
import { useGetAllReviewsQuery } from "../app/services/reviewApi"
import { FaInfoCircle } from "react-icons/fa"
import { useGetBranchByIdQuery } from "../app/services/branchApi"
import { CiLocationOn } from "react-icons/ci"
import { InfoItem } from "../components/branch"
import { useContext } from "react"
import { ThemeContext } from "../components/theme-provider"
import { SlArrowDown } from "react-icons/sl"
import { useTranslation } from "react-i18next"
import type { User, Review } from "../app/types"

export const Home = () => {
  const {
    data: users = [],
    isLoading,
    error,
  } = useGetAllUsersQuery(undefined, {})
  const { data: reviews = [] } = useGetAllReviewsQuery()
  const { control, getValues } = useForm()
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams()
  const { branchId } = useParams<{ branchId: string }>()
  const { data: branch } = useGetBranchByIdQuery(branchId || "")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  if (isLoading) {
    return <Spinner />
  }

  if (error || !users) {
    return (
      <p className="text-red-500 text-center">{t("home.loadingUsersError")}</p>
    )
  }

  const masters = users.filter((user: User) => {
    const isMasterRole = user.role === "MASTER"

    if (!branchId) return isMasterRole

    return isMasterRole && user.branchId === branchId
  })
  if (masters.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-lg mb-4">{t("home.noMasters")}</p>
        <Button color="primary" onPress={() => navigate(Paths.branch)}>
          {t("home.otherBranches")}
        </Button>
      </div>
    )
  }

  const onClick = (userId: string) => {
    if (!userId) {
      alert(t("home.pleaseSelectMaster"))
      return
    }

    const user = masters.find((user: User) => user.id === userId)
    if (user) {
      setSearchParams({ userId: user.id })
      navigate({
        pathname: Paths.service,
        search: `?userId=${userId}`,
      })
    } else {
      alert(t("home.userNotFound"))
    }
  }

  const navigateToReviews = (user: any) => {
    navigate(Paths.review, {
      state: {
        userId: user.id,
        name: user.name,
        image: user.image,
      },
    })
  }

  const getUserReviews = (userId: string) => {
    return reviews.filter((review: Review) => review.userId === userId)
  }

  return (
    <div className="flex flex-col items-center  max-w-4xl mx-auto p-5 ">
      <div
        onClick={onOpen}
        className="flex cursor-pointer  items-center gap-4 mb-6"
      >
        {branch?.image && (
          <Avatar
            size="lg"
            isBordered
            src={branch?.image ? `${BASE_URL}${branch.image}` : ""}
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80",
              img: "object-top object-cover",
            }}
          />
        )}
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
            {branch?.name}
          </h1>

          {branch?.address && (
            <InfoItem
              icon={<CiLocationOn size={22} />}
              title=""
              content={branch.city + ", " + branch.address}
            />
          )}
        </div>
        <SlArrowDown size={36} />
      </div>
      <Controller
        name="name"
        control={control}
        rules={{ required: t("home.chooseMaster") }}
        render={({ field }) => (
          <RadioGroup label={t("home.chooseMaster")} className="space-y-4">
            {masters.map((user: User) => (
              <CustomRadio
                key={user.id}
                value={user.id}
                onChange={field.onChange}
                className="p-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Avatar
                    size="lg"
                    isBordered
                    src={user.image ? `${BASE_URL}${user.image}` : ""}
                    classNames={{
                      base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                      icon: "text-black/80",
                      img: "object-top object-cover",
                    }}
                  />

                  <div className="flex flex-col items-start gap-1  ">
                    <h4 className="font-medium text-lg">{user.name}</h4>

                    <Rating reviews={getUserReviews(user.id)} showCount />
                  </div>
                  <button
                    className=" text-gray-500   hover:text-gray-700 transition"
                    onClick={() => navigateToReviews(user)}
                  >
                    <FaInfoCircle size={20} />
                  </button>
                </div>
              </CustomRadio>
            ))}
            <Button
              color="primary"
              className="w-full mt-6"
              onPress={() => onClick(getValues("name"))}
              isDisabled={!getValues("name")}
            >
              {t("home.continue")}
            </Button>
          </RadioGroup>
        )}
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={`${theme} text-foreground `}
        backdrop="blur"
        size="xs"
        placement="center" // Додаємо центральне позиціювання
      >
        <ModalContent className="max-w-sm md:max-w-lg  max-sm:mb-0">
          <ModalBody className="m-6 ">
            <h2 className="text-3xl font-bold text-center pt-6">
              {branch?.name}
            </h2>
            <InfoItem
              icon={<CiLocationOn className="text-xl" />}
              title={t("home.address")}
              content={`${branch?.city}, ${branch?.address}`}
            />
            <Button
              color="secondary"
              className="my-4"
              onPress={() => navigate(`${Paths.about_us}/${branchId}`)}
            >
              {t("home.aboutSalon")}
            </Button>
            <Button color="secondary" onPress={() => navigate(Paths.branch)}>
              {t("home.availableSalons")}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
