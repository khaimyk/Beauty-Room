import { Controller } from "react-hook-form"
import { Button } from "@heroui/react"
import { Input } from "../../input"
import { socialMediaOptions } from "../../../utils/options"
import { useTranslation } from "react-i18next"

type SocialMediaInputProps = {
  control: any
  index: number
  field: any
  remove: (index: number) => void
}

export const SocialMediaInput: React.FC<SocialMediaInputProps> = ({
  control,
  index,
  remove,
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-2 mb-4 p-3 border rounded-lg">
      <div className="flex items-center gap-2">
        <Controller
          name={`socialMedia.${index}.name`}
          control={control}
          render={({ field: nameField }) => (
            <select
              {...nameField}
              className="w-1/3 p-2 dark:bg-zinc-800 bg-zinc-100 rounded-lg"
            >
              <option value="">{t("branch.edit.selectNetwork")}</option>
              {socialMediaOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />

        <Controller
          name={`socialMedia.${index}.link`}
          control={control}
          rules={{
            pattern: {
              value:
                /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.(com|org|net|io|ua)\/.+$/,
              message: t("branch.edit.linkInvalid"),
            },
          }}
          render={({ field: linkField }) => (
            <Input
              {...linkField}
              label={t("branch.edit.link")}
              control={control}
              placeholder="https://..."
              className="flex-1"
            />
          )}
        />

        <Button type="button" onPress={() => remove(index)}>
          {t("branch.edit.remove")}
        </Button>
      </div>
    </div>
  )
}
