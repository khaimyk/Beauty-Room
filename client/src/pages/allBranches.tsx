import { Avatar, Button, Card, CardBody } from "@heroui/react"
import { useGetAllBranchesQuery } from "../app/services/branchApi"
import { useNavigate } from "react-router"
import { Paths } from "../utils/paths"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setBranch, setBranches } from "../features/branchSlice"
import { useEffect } from "react"
import { BASE_URL } from "../constants"
import { useTranslation } from "react-i18next"

export const AllBranches = () => {
  const { data, isError, isSuccess } = useGetAllBranchesQuery()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { selectedBranch } = useAppSelector(state => state.branch)
  const { t } = useTranslation()

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setBranches(data))
    }
  }, [isSuccess, data, dispatch])

  const handleSubmit = (branchId: string) => {
    dispatch(setBranch(branchId))
    navigate(`${Paths.about_us}/${branchId}`)
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-red-500">
        {t("branch.loadingError")}
      </div>
    )
  }

  return (
    <section className="py-8">
      <Button
        onPress={() => navigate(-1)}
        className="mb-6 flex items-center gap-2"
        variant="flat"
        color="primary"
      >
        <FaArrowLeft />
        <span className="hidden sm:inline">{t("branch.back")}</span>
      </Button>

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        {t("branch.ourBranches")}
      </h2>

      <div className="space-y-3 max-w-2xl mx-auto flex flex-col gap-2">
        {data && data.length > 0 ? (
          data.map(branch => (
            <Card
              key={branch.id}
              className={`border hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${
                selectedBranch?.id === branch.id
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-200"
                  : "border-gray-200"
              }`}
            >
              <CardBody
                onClick={() => handleSubmit(branch.id)}
                className="flex flex-row items-center justify-between  p-4"
              >
                <Avatar
                  size="md"
                  src={branch?.image ? `${BASE_URL}${branch.image}` : ""}
                  classNames={{
                    base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B] mr-2",
                    icon: "text-black/80",
                    img: "object-top object-cover",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {branch.name}
                  </h3>
                  {branch.address && branch.city && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {branch.city + ", " + branch.address}
                    </p>
                  )}
                </div>

                <FaArrowRight className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200" />
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            {t("branch.noBranches")}
          </div>
        )}
      </div>
    </section>
  )
}
