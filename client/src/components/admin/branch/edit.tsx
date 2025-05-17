import {
  useLazyGetAllBranchesQuery,
  useEditBranchMutation,
} from "../../../app/services/branchApi"
import { Avatar, Button } from "@heroui/react"
import { Input } from "../../input"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import type { Branch, User } from "../../../app/types"
import {
  useCurrentQuery,
  useEditUserMutation,
} from "../../../app/services/userApi"
import { FiUploadCloud } from "react-icons/fi"
import { useCallback, useEffect, useMemo, useState } from "react"
import { BASE_URL } from "../../../constants"
import { MdOutlinePerson } from "react-icons/md"
import { SocialMediaInput } from "./socialMedia"
import { useTranslation } from "react-i18next"
import { PhoneNumberInput } from "../../input/phone"

type Props = {
  onClose: () => void
  branch?: Branch
  users: User[]
}

export const EditBranch: React.FC<Props> = ({
  onClose = () => null,
  branch,
  users,
}) => {
  const [editBranch, { isLoading }] = useEditBranchMutation()
  const [triggerAll] = useLazyGetAllBranchesQuery()
  const { data: currentUser } = useCurrentQuery()
  const [editUser] = useEditUserMutation()
  const { t } = useTranslation()
  const [preview, setPreview] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const adminUsers = users.filter(user => user.role === "ADMIN")
  let parsed: { name: string; link: string }[] = []

  try {
    if (branch?.socialMedia) {
      const parsedCandidate = JSON.parse(branch.socialMedia)
      if (Array.isArray(parsedCandidate)) {
        parsed = parsedCandidate
      } else {
        parsed = []
      }
    }
  } catch {
    if (
      typeof branch?.socialMedia === "string" &&
      branch.socialMedia.startsWith("http")
    ) {
      parsed = [{ name: "Link", link: branch.socialMedia }]
    } else {
      parsed = []
    }
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: branch?.name || "",
      address: branch?.address || "",
      phoneNumber: branch?.phoneNumber || "",
      socialMedia: parsed,
      description: branch?.description || "",
      city: branch?.city || "",
      adminId: branch?.adminId || "",
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMedia",
  })

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        const file = e.target.files[0]

        // Перевірка типу файлу
        if (!file.type.startsWith("image/")) {
          setError(t("branch.edit.imageError"))
          return
        }

        // Перевірка розміру файлу (наприклад, не більше 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setError(t("branch.edit.sizeError"))
          return
        }

        setSelectedFile(file)

        // Створюємо URL для попереднього перегляду
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
      }
    },
    [setSelectedFile, setPreview, t],
  )

  // Очищаємо об'єкт URL при демонтажі компонента
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview])

  const previewImage = useMemo(() => {
    if (preview) return preview
    if (branch?.image) return `${BASE_URL}${branch.image}`
    return null
  }, [preview, branch?.image])

  const onSubmit = handleSubmit(async data => {
    try {
      const formData = new FormData()

      // Додаємо всі текстові дані
      formData.append("name", data.name)
      formData.append("address", data.address)
      formData.append("phoneNumber", data.phoneNumber)
      formData.append("description", data.description)
      formData.append("city", data.city)

      const socialMedia = data.socialMedia?.length ? data.socialMedia : []
      formData.append("socialMedia", JSON.stringify(socialMedia))

      if (selectedFile) {
        formData.append("image", selectedFile)
      }

      if (currentUser?.role === "SUPERADMIN" && data.adminId) {
        formData.append("adminId", data.adminId)
      }

      const branchResponse = await editBranch({
        id: branch?.id || "",
        formData,
      }).unwrap()
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
      console.error("Помилка при створенні послуги:", error)
    }
  })

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-4">
        {/* Поле для вибору адміністратора (тільки для SUPERADMIN) */}

        <Controller
          name="name"
          control={control}
          rules={{
            required: t("branch.edit.nameRequired"),
            minLength: {
              value: 3,
              message: t("branch.edit.nameMinLength"),
            },
          }}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branch.edit.name")}
              placeholder={t("branch.edit.namePlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}

        {currentUser?.role === "SUPERADMIN" && (
          <Controller
            name="adminId"
            control={control}
            rules={{
              required: t("branch.edit.selectAdmin"),
            }}
            render={({ field }) => (
              <select
                {...field}
                className="w-full p-5 dark:bg-zinc-800 bg-zinc-100 rounded-lg"
                style={{
                  borderColor: errors.adminId ? "#f87171" : "#e5e7eb",
                }}
              >
                <option value="">{t("branch.edit.selectAdmin")}</option>
                {adminUsers.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            )}
          />
        )}
        {errors.adminId && (
          <p className="text-red-500 text-sm mt-1">{errors.adminId.message}</p>
        )}

        <Controller
          name="city"
          control={control}
          rules={{
            required: t("branch.edit.cityRequired"),
          }}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branch.edit.city")}
              placeholder={t("branch.edit.cityPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}

        <Controller
          name="address"
          control={control}
          rules={{
            required: t("branch.edit.addressRequired"),
            minLength: {
              value: 3,
              message: t("branch.edit.addressMinLength"),
            },
          }}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branch.edit.address")}
              placeholder={t("branch.edit.addressPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
        <div className="flex flex-col items-center gap-4">
          {previewImage ? (
            <Avatar
              src={previewImage}
              className="w-24 h-24 text-larger "
              classNames={{
                img: "object-top object-cover",
              }}
              isBordered
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-default-200 flex items-center justify-center">
              <MdOutlinePerson size={40} className="text-default-500" />
            </div>
          )}
          <label className="cursor-pointer flex items-center gap-2 text-sm text-primary">
            <FiUploadCloud size={18} />
            <span>{t("branch.edit.photo")}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <PhoneNumberInput
          name="phoneNumber"
          control={control}
          label={t("clientForm.phoneLabel")}
          defaultValue={branch?.phoneNumber || ""}
          rules={{
            required: t("clientForm.requiredField"),
            validate: (value: string) => {
              if (!/^\+\d{10,15}$/.test(value)) {
                return t("clientForm.invalidPhone")
              }
              return true
            },
          }}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phoneNumber.message}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            {t("branch.edit.socialMedia")}
          </h3>
          <Button
            type="button"
            onPress={() => append({ name: "", link: "" })}
            className="w-full"
          >
            {t("branch.edit.addSocial")}
          </Button>

          {fields.map((field, index) => (
            <SocialMediaInput
              key={field.id}
              control={control}
              index={index}
              field={field}
              remove={remove}
            />
          ))}

          {fields.length === 0 && (
            <p className="text-red-500 text-sm mt-1">
              {t("branch.edit.atLeastOneSocial")}
            </p>
          )}
        </div>
        {errors.socialMedia && (
          <p className="text-red-500 text-sm mt-1">
            {errors.socialMedia.message}
          </p>
        )}
        <Controller
          name="description"
          control={control}
          rules={{
            minLength: {
              value: 3,
              message: t("branch.edit.descriptionMinLength"),
            },
          }}
          render={({ field }) => (
            <Input
              type="text"
              label={t("branch.edit.description")}
              placeholder={t("branch.edit.descriptionPlaceholder")}
              control={control}
              {...field}
            />
          )}
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>
      <Button
        color="primary"
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? t("branch.edit.saving") : t("branch.edit.save")}
      </Button>
    </form>
  )
}
