import { Controller, useForm } from "react-hook-form"

import { Button, Checkbox, CheckboxGroup, Textarea } from "@heroui/react"
import { IoMdCreate } from "react-icons/io"
import type { Service } from "../../../app/types"
import { useEditServiceMutation } from "../../../app/services/serviceApi"
import { useGetAllCategoriesQuery } from "../../../app/services/categoryApi"
import { Input } from "../../input"
import { useTranslation } from "react-i18next"
import { useGetAllUsersQuery } from "../../../app/services/userApi"

type Props = {
  onClose: () => void
  servise?: Service
  branchId?: string
}
export const EditService: React.FC<Props> = ({
  onClose = () => null,
  servise,
  branchId,
}) => {
  const [editService, { isLoading }] = useEditServiceMutation()

  const { data: categories } = useGetAllCategoriesQuery(branchId || "")
  const { data: users } = useGetAllUsersQuery(branchId)
  const { t } = useTranslation()
  const masters = (users ?? []).filter(u => u.role === "MASTER")
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      service: servise?.name || "",
      categoryId: servise?.categoryId || "",
      price: servise?.price || "",
      currency: servise?.currency || "",
      duration: servise?.duration || "",
      description: servise?.description || "",
      masterIds: [],
    },
  })
  const onSubmit = handleSubmit(async data => {
    try {
      const serviceData = {
        id: servise?.id || "", // Ensure the service ID is provided
        updatedService: {
          name: data.service,
          categoryId: data.categoryId,
          price: Number(data.price),
          currency: data.currency,
          duration: Number(data.duration),
          description: data.description,
          masterIds: data.masterIds,
        },
      }

      await editService(serviceData).unwrap()
      reset()
      onClose()
    } catch (error) {
      console.error("Помилка при створенні послуги:", error)
    }
  })
  return (
    <form className="flex flex-col gap-4 p-1 md:p-3" onSubmit={onSubmit}>
      <div className="space-y-4">
        {/* Назва послуги */}
        <Controller
          name="service"
          control={control}
          rules={{
            required: t("adminService.nameRequired"),
            minLength: {
              value: 3,
              message: t("adminService.nameMinLength"),
            },
          }}
          render={({ field }) => (
            <Textarea
              {...field}
              labelPlacement="outside"
              label={t("adminService.nameLabel")}
              placeholder={t("adminService.namePlaceholder")}
              className="min-h-[60px]"
              errorMessage={errors.service?.message as string}
              isInvalid={!!errors.service}
            />
          )}
        />

        {/* Категорія */}
        <Controller
          name="categoryId"
          control={control}
          rules={{
            required: t("adminService.categoryRequired"),
          }}
          render={({ field }) => (
            <select
              {...field}
              className="w-full p-5 dark:bg-zinc-800 bg-zinc-100 rounded-lg"
              style={{
                borderColor: errors.categoryId ? "#f87171" : "#e5e7eb",
              }}
            >
              <option value="">{t("adminService.categoryPlaceholder")}</option>
              {(categories ?? []).map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
        />

        <Controller
          name="masterIds"
          control={control}
          rules={{
            required: t("adminService.masterRequired"),
          }}
          render={({ field }) => (
            <CheckboxGroup
              {...field}
              value={field.value || []}
              label={t("adminService.masterRequired")}
              errorMessage={errors.masterIds?.message as string}
              isInvalid={!!errors.masterIds}
            >
              {masters.map(master => (
                <Checkbox key={master.id} value={master.id}>
                  {master.name}
                </Checkbox>
              ))}
            </CheckboxGroup>
          )}
        />

        {/* Ціна та тривалість */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="price"
            control={control}
            rules={{
              required: t("adminService.priceRequired"),
              min: {
                value: 1,
                message: t("adminService.priceMin"),
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                value={String(field.value || "")}
                control={control}
                type="number"
                label={t("adminService.priceLabel")}
                placeholder={t("adminService.pricePlaceholder")}
              />
            )}
          />
          <Controller
            name="currency"
            control={control}
            rules={{
              required: t("adminService.currencyRequired"),
            }}
            render={({ field }) => (
              <select
                {...field}
                className="w-full p-5 dark:bg-zinc-800 bg-zinc-100 rounded-lg"
                style={{
                  borderColor: errors.currency ? "#f87171" : "#e5e7eb",
                }}
              >
                <option value="">
                  {t("adminService.currencyPlaceholder")}
                </option>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>
              </select>
            )}
          />

          <Controller
            name="duration"
            control={control}
            rules={{
              required: t("adminService.durationRequired"),
              min: {
                value: 5,
                message: t("adminService.durationMin"),
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                value={String(field.value || "")}
                control={control}
                type="number"
                label={t("adminService.durationLabel")}
                placeholder={t("adminService.durationPlaceholder")}
              />
            )}
          />
        </div>

        {/* Опис */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              label={t("adminService.descriptionLabel")}
              labelPlacement="outside"
              placeholder={t("adminService.descriptionPlaceholder")}
              className="min-h-[100px]"
            />
          )}
        />
      </div>

      {/* Кнопки */}

      <Button
        color="success"
        type="submit"
        isLoading={isLoading}
        endContent={<IoMdCreate className="text-lg" />}
        className="hover:bg-success-600 transition-colors"
      >
        {isLoading
          ? t("adminService.updatingEdit")
          : t("adminService.submitEdit")}
      </Button>
    </form>
  )
}
