import { CreateCategory } from "./create"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react"
import { Categories } from "./categories"
import { useGetAllCategoriesQuery } from "../../../app/services/categoryApi"
import { FaPlus } from "react-icons/fa"
import { useContext } from "react"
import { ThemeContext } from "../../theme-provider"
import type { User } from "../../../app/types"
import { useSearchParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const AdminCategory = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [searchParams] = useSearchParams()
  const branchId = searchParams.get("branchId")
  const { data } = useGetAllCategoriesQuery(branchId || undefined)
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section className="container p-4 mx-auto ">
      <div className=" bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-center py-4 ">
          {t("category.adminTitle")}
        </h1>

        <Button
          color="primary"
          onPress={onOpen}
          endContent={<FaPlus />}
          className="my-6 ml-5  hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
        >
          {t("category.createButton")}
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className={`${theme} text-foreground`}
          backdrop="blur"
          size="lg"
          placement="center"
        >
          <ModalContent className="max-w-md md:max-w-lg">
            {onClose => (
              <>
                <ModalHeader className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-3">
                  {t("category.createTitle")}
                </ModalHeader>
                <ModalBody className="py-4">
                  <CreateCategory onClose={onClose} branchId={branchId || ""} />
                </ModalBody>
                <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <Button
                    variant="light"
                    onPress={onClose}
                    className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {t("category.close")}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <div className="w-full max-w-5xl">
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
              {data.map(({ name, user, id, createdAt }) => (
                <Categories
                  key={id}
                  id={id}
                  name={name}
                  user={user as User}
                  createdAt={createdAt}
                  branchId={branchId || ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-lg text-gray-600 dark:text-gray-300 py-10">
              <h3 className="text-2xl font-semibold">
                {t("category.noCategories")}
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
