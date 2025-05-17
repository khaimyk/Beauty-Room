import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react"
import { useGetAllBranchesQuery } from "../../app/services/branchApi"
import { CreateBranch } from "./create"
import { Branches } from "./branches"
import { useContext } from "react"
import { ThemeContext } from "../theme-provider"
import { FaPlus } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export const SuperAdminBranch = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { data } = useGetAllBranchesQuery()
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  return (
    <section className="container p-4 mx-auto ">
      <div className=" bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-center py-4 ">
          {t("branches.title")}
        </h1>

        <Button
          color="primary"
          onPress={onOpen}
          endContent={<FaPlus />}
          className="my-6 ml-5  sm:w-auto hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
        >
          {t("branches.createBranch")}
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
                  {t("branches.createBranch")}
                </ModalHeader>
                <ModalBody className="py-4">
                  <CreateBranch onClose={onClose} />
                </ModalBody>
                <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <Button
                    variant="light"
                    onPress={onClose}
                    className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {t("branches.close")}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <div className="w-full max-w-5xl">
          {data?.length ? (
            data.map((branch: any) => (
              <div key={branch.id}>
                <Branches
                  name={branch.name}
                  id={branch.id}
                  address={branch.address}
                  image={branch.image}
                  phoneNumber={branch.phoneNumber}
                  description={branch.description}
                  city={branch.city}
                  adminId={branch.adminId}
                  status={branch.status}
                  createdAt={branch.createdAt}
                  updatedAt={branch.updatedAt}
                />
              </div>
            ))
          ) : (
            <div className="text-center text-lg text-gray-600 dark:text-gray-300 py-10">
              <h3 className="text-2xl font-semibold">
                {t("branches.noBranches")}
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
