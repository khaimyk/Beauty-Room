// file: CreateCategory.tsx
import {
  useCreateCategoryMutation,
  useLazyGetAllCategoriesQuery,
} from "../../../app/services/categoryApi"
import { Controller, useForm } from "react-hook-form"
import { Button, Textarea } from "@heroui/react"
import { ErrorMessage } from "../../error-message"
import { IoMdCreate } from "react-icons/io"
import { useTranslation } from "react-i18next"

export const CreateCategory = ({
  onClose,
  branchId,
}: {
  onClose: () => void
  branchId: string
}) => {
  const [createCategory] = useCreateCategoryMutation()
  const [triggerAllCategories] = useLazyGetAllCategoriesQuery()

  const { t } = useTranslation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()

  const error = errors?.category?.message as string

  const onSubmit = handleSubmit(async data => {
    try {
      await createCategory({ name: data.category }).unwrap()
      setValue("category", "")
      onClose()
      await triggerAllCategories(branchId).unwrap()
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <Controller
        name="category"
        control={control}
        defaultValue=""
        rules={{ required: t("category.nameRequired") }}
        render={({ field }) => (
          <Textarea
            {...field}
            label={t("category.nameLabel")}
            placeholder={t("category.namePlaceholder")}
            className="w-full"
            labelPlacement="outside"
            isInvalid={!!errors?.category}
          />
        )}
      />
      {error && <ErrorMessage error={error} />}
      <div className="flex justify-end">
        <Button color="success" type="submit" endContent={<IoMdCreate />}>
          {t("category.createSubmit")}
        </Button>
      </div>
    </form>
  )
}
