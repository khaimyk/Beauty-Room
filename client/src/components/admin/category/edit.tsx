import { Controller, useForm } from "react-hook-form"
import {
  useEditCategoryMutation,
  useLazyGetAllCategoriesQuery,
} from "../../../app/services/categoryApi"
import { Button, Textarea } from "@heroui/react"
import { IoMdCreate } from "react-icons/io"
import type { Category } from "../../../app/types"
import { useTranslation } from "react-i18next"

type Props = {
  onClose: () => void
  categoryId: string
}
export const EditCategory: React.FC<Props> = ({
  onClose = () => null,
  categoryId,
}) => {
  const [editCategory, { isLoading }] = useEditCategoryMutation()
  const [triggerAllCategories] = useLazyGetAllCategoriesQuery()

  const { t } = useTranslation()

  const { handleSubmit, control } = useForm<Category>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = async (data: Category) => {
    try {
      await editCategory({
        id: categoryId,
        categoryData: data,
      }).unwrap()
      await triggerAllCategories("").unwrap()
      onClose()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            placeholder={t("category.editPlaceholder")}
            className="mb-5"
          />
        )}
      />
      <Button
        color="success"
        className="flex-end"
        endContent={<IoMdCreate />}
        type="submit"
        isLoading={isLoading}
      >
        {t("category.saveChanges")}
      </Button>
    </form>
  )
}
