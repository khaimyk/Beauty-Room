import {
  useCreateBranchMutation,
  useLazyGetAllBranchesQuery,
} from "../../app/services/branchApi"
import { Button } from "@heroui/react"
import { Input } from "../input"
import { Controller, useForm } from "react-hook-form"
import {
  useEditUserMutation,
  useGetAllUsersQuery,
} from "../../app/services/userApi"
import { useTranslation } from "react-i18next"

export const CreateBranch = ({ onClose }: { onClose: () => void }) => {
  const [createBranch, { isLoading }] = useCreateBranchMutation()
  const [triggerAll] = useLazyGetAllBranchesQuery()
  const { data: users } = useGetAllUsersQuery(undefined, {})
  const [editUser] = useEditUserMutation()
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      phoneNumber: "",
      socialMedia: "",
      description: "",
      city: "",
      adminId: "",
    },
  })

  const onSubmit = handleSubmit(async data => {
    try {
      const create = {
        name: data.name,
        adminId: data.adminId,
        ...(data.address && { address: data.address }),
        ...(data.phoneNumber && { phoneNumber: data.phoneNumber }),
        ...(data.socialMedia && { socialMedia: data.socialMedia }),
        ...(data.city && { city: data.city }),
        ...(data.description && { description: data.description }),
      }

      const branchResponse = await createBranch(create).unwrap()

      if (data.adminId) {
        await editUser({
          id: data.adminId,
          userData: (() => {
            const formData = new FormData()
            formData.append("branchId", branchResponse.id)
            return formData
          })(),
        }).unwrap()
      }
      reset()
      onClose()
      await triggerAll().unwrap()
    } catch (error) {
      console.error("Помилка при створенні філії:", error)
    }
  })

  const adminUsers = (users ?? []).filter(user => user.role === "ADMIN")

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-4">
        <Controller
          name="name"
          control={control}
          rules={{
            required: t("branches.branchNameRequired"),
            minLength: {
              value: 3,
              message: t("branches.branchNameMinLength"),
            },
          }}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branches.branchName") + "*"}
              placeholder={t("branches.branchNamePlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}

        {/* Обов'язкове поле - адміністратор */}
        <Controller
          name="adminId"
          control={control}
          rules={{
            required: t("branches.adminRequired"),
          }}
          render={({ field }) => (
            <select
              {...field}
              className="w-full p-5 dark:bg-zinc-800 bg-zinc-100 rounded-lg"
              style={{
                borderColor: errors.adminId ? "#f87171" : "#e5e7eb",
              }}
            >
              <option value="">{t("branches.adminRequired")}</option>
              {adminUsers.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          )}
        />
        {errors.adminId && (
          <p className="text-red-500 text-sm mt-1">{errors.adminId.message}</p>
        )}

        {/* Необов'язкові поля */}
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branches.address")}
              placeholder={t("branches.addressPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branches.phone")}
              placeholder={t("branches.phonePlaceholder")}
              control={control}
              {...field}
            />
          )}
        />

        <Controller
          name="socialMedia"
          control={control}
          rules={{
            pattern: {
              value:
                /^(https?:\/\/)?(www\.)?(facebook|instagram|twitter)\.com\/.+$/,
              message: t("branches.socialMediaInvalid"),
            },
          }}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branches.socialMedia")}
              placeholder={t("branches.socialMediaPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
        {errors.socialMedia && (
          <p className="text-red-500 text-sm mt-1">
            {errors.socialMedia.message}
          </p>
        )}

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branches.city")}
              placeholder={t("branches.cityPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branches.description")}
              placeholder={t("branches.descriptionPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? t("branches.submitting") : t("branches.submit")}
      </Button>
    </form>
  )
}
