import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react"
import { useGetAllServisesQuery } from "../../../app/services/serviceApi"
import { CreateService } from "./create"
import { Services } from "./services"
import { useContext } from "react"
import { ThemeContext } from "../../theme-provider"
import { FaPlus } from "react-icons/fa"
import { useSearchParams } from "react-router"
import { useTranslation } from "react-i18next"

export const AdminService = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [searchParams] = useSearchParams()
  const branchId = searchParams.get("branchId")
  const { data } = useGetAllServisesQuery(branchId || undefined)
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  const servicesByCategory = data?.reduce(
    (acc, service) => {
      const category = service.category?.name || "Без категорії"
      if (!acc[category]) acc[category] = []
      acc[category].push(service)
      return acc
    },
    {} as Record<string, any[]>,
  )

  return (
    <section className="container p-4 mx-auto ">
      <div className=" bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-center py-4 ">
          {t("adminService.title")}
        </h1>

        <Button
          color="primary"
          onPress={onOpen}
          endContent={<FaPlus />}
          className="my-6 ml-5  hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
        >
          {t("adminService.createButton")}
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
                  {t("adminService.createButton")}
                </ModalHeader>
                <ModalBody className="py-4">
                  <CreateService onClose={onClose} branchId={branchId || ""} />
                </ModalBody>
                <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <Button
                    variant="light"
                    onPress={onClose}
                    className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {t("adminService.close")}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <div className="w-full max-w-5xl">
          {servicesByCategory && Object.keys(servicesByCategory).length > 0 ? (
            Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category}>
                <h4 className="text-xl font-bold my-4 pl-4 uppercase">
                  {category === "Без категорії"
                    ? t("adminService.uncategorized")
                    : category}
                </h4>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
                  {services.map(service => (
                    <Services
                      id={service.id}
                      name={service.name}
                      key={service.id}
                      user={service.user?.name}
                      createdAt={service.createdAt}
                      updatedAt={service.updatedAt}
                      price={service.price}
                      currency={service.currency}
                      duration={service.duration}
                      description={service.description}
                      branchId={branchId || ""}
                      masters={service.masters}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-lg text-gray-600 dark:text-gray-300  py-10">
              <h3 className="text-2xl font-semibold">
                {t("adminService.noServices")}
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
