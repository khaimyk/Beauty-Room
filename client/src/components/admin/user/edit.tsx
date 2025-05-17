import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Avatar,
} from "@heroui/react"
import { ThemeContext } from "../../theme-provider"
import { Controller, useForm } from "react-hook-form"
import {
  useEditUserMutation,
  useLazyCurrentQuery,
} from "../../../app/services/userApi"
import { hasErrorField } from "../../../utils/has-error-field"
import { ErrorMessage } from "../../error-message"
import { MdOutlineDescription, MdOutlinePerson } from "react-icons/md"
import { FiUploadCloud } from "react-icons/fi"
import type { User } from "../../../app/types"
import { useContext, useState, useMemo, useEffect, useCallback } from "react"
import { BASE_URL } from "../../../constants"
import { FaTelegram } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { Input } from "../../input"
import {
  useCreateClientMutation,
  useEditClientMutation,
  useLazySearchClientsQuery,
} from "../../../app/services/clientApi"
import { PhoneNumberInput } from "../../input/phone"
import { useTranslation } from "react-i18next"
import "react-toastify/dist/ReactToastify.css"
import { Succes } from "../../button/succes"

type Props = {
  isOpen: boolean
  onClose: () => void
  user?: User
}

export const EditProfile: React.FC<Props> = ({
  isOpen = false,
  onClose = () => null,
  user,
}) => {
  const { theme } = useContext(ThemeContext)
  const [editUser, { isLoading }] = useEditUserMutation()
  const [createClient] = useCreateClientMutation()
  const [updateClient] = useEditClientMutation()
  const [triggerSearchClient] = useLazySearchClientsQuery()
  const [triggerUser] = useLazyCurrentQuery()
  const [error, setError] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const { t } = useTranslation()
  const { handleSubmit, control } = useForm<User>({
    mode: "onChange",
    reValidateMode: "onBlur",

    defaultValues: {
      email: user?.email || "",
      name: user?.name || "",
      nickName: user?.nickName || "",
      description: user?.description || "",
      phoneNumber: user?.phoneNumber || "",
    },
  })

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        const file = e.target.files[0]

        // Перевірка типу файлу
        if (!file.type.startsWith("image/")) {
          setError(t("editProfile.fileError"))
          return
        }
        // Перевірка розміру файлу
        if (file.size > 5 * 1024 * 1024) {
          setError(t("editProfile.sizeError"))
          return
        }

        setSelectedFile(file)

        // Створюємо URL для попереднього перегляду
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
      }
    },
    [t],
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
    if (user?.image) return `${BASE_URL}${user.image}`
    return null
  }, [preview, user?.image])

  const onSubmit = async (data: User) => {
    try {
      const formData = new FormData()
      data.name && formData.append("name", data.name)
      data.email && formData.append("email", data.email)
      if (data.nickName) {
        const formattedNick =
          /^\+?\d{10,15}$/.test(data.nickName) && data.nickName.startsWith("+")
            ? data.nickName.slice(1)
            : data.nickName
        formData.append("nickName", formattedNick)
      }
      selectedFile && formData.append("image", selectedFile)
      data.description && formData.append("description", data.description)
      data.phoneNumber && formData.append("phoneNumber", data.phoneNumber)

      await editUser({ userData: formData, id: user?.id ?? "" }).unwrap()
      setIsSuccess(true)
      if (data.phoneNumber && (data.email || data.chatId)) {
        const clientResponse = await triggerSearchClient({
          userId: user?.id ?? "",
        }).unwrap()
        if (clientResponse.length > 0) {
          const client = clientResponse[0]
          await updateClient({
            id: client.id,
            updatedClient: {
              name: data.name,
              nickName: data.nickName || data.email,
              phoneNumber: data.phoneNumber,
              userId: user?.id ?? "",
            },
          }).unwrap()
        } else {
          await createClient({
            name: data.name,
            nickName: data.nickName || data.email,
            phoneNumber: data.phoneNumber,
            userId: user?.id ?? "",
          }).unwrap()
        }
      }

      await triggerUser().unwrap()
    } catch (err) {
      if (hasErrorField(err)) {
        setError(err.data.error)
        setIsSuccess(false)
      }
    }
  }
  // Автоматичне закриття модального вікна через 2 секунди після успішного відправлення
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess, onClose])

  return (
    <Modal
      isOpen={isOpen}
      isDismissable={false}
      onClose={onClose}
      isKeyboardDismissDisabled={true}
      className={`${theme} text-foreground`}
      backdrop="blur"
      size="lg"
      placement="center"
    >
      <ModalContent>
        {onClose => (
          <>
            {isSuccess && <Succes children={t("profile.updated")} />}
            <ModalHeader
              className="flex flex-col gap-1 text-xl font-bold"
              id="edit-profile-modal"
            >
              {t("editProfile.title")}
            </ModalHeader>
            <ModalBody id="edit-profile-modal-description">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                    <span>{t("editProfile.changePhoto")}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: t("editProfile.requiredField"),
                      minLength: {
                        value: 2,
                        message: t("editProfile.minLength", { min: 2 }),
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        control={control}
                        label={t("editProfile.name")}
                        placeholder={t("editProfile.namePlaceholder")}
                        endContent={
                          <MdOutlinePerson
                            size={24}
                            className="text-default-400"
                          />
                        }
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: t("editProfile.requiredField"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("editProfile.invalidEmail"),
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        label="Email"
                        control={control}
                        placeholder={t("editProfile.emailPlaceholder")}
                        endContent={
                          <BiLogoGmail size={24} className="text-default-400" />
                        }
                      />
                    )}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Controller
                    name="nickName"
                    control={control}
                    rules={{
                      required: t("editProfile.requiredField"),
                      pattern: {
                        value: /^(@?\w{3,32}|\d{10,14})$/,
                        message: t("editProfile.invalidTelegram"),
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value}
                        onChange={
                          e => field.onChange(e.target.value.replace(/^\+/, "")) // видаляє лише початковий +
                        }
                        label={t("editProfile.telegram")}
                        control={control}
                        placeholder={t("editProfile.telegramPlaceholder")}
                        endContent={
                          <FaTelegram size={24} className="text-default-400" />
                        }
                      />
                    )}
                  />
                  <PhoneNumberInput
                    name="phoneNumber"
                    control={control}
                    label={t("editProfile.phone")}
                    defaultValue={user?.phoneNumber || ""}
                    rules={{
                      required: t("editProfile.requiredField"),
                      validate: (value: string) => {
                        if (!/^\+\d{10,15}$/.test(value)) {
                          return t("editProfile.invalidPhone")
                        }
                        return true
                      },
                    }}
                  />
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label={t("editProfile.description")}
                        control={control}
                        placeholder={t("editProfile.descriptionPlaceholder")}
                        className="col-span-2"
                        endContent={
                          <MdOutlineDescription
                            size={24}
                            className="text-default-400"
                          />
                        }
                      />
                    )}
                  />
                </div>
                <ErrorMessage error={error} />

                <ModalFooter className="px-0">
                  <div className="flex gap-3 w-full">
                    <Button
                      color="danger"
                      variant="flat"
                      onPress={onClose}
                      className="flex-1"
                    >
                      {t("editProfile.cancel")}
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      isLoading={isLoading}
                      spinner={<Spinner color="white" size="sm" />}
                      className="flex-1"
                    >
                      {t("editProfile.saveChanges")}
                    </Button>
                  </div>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
