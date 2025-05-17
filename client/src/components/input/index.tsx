import { Input as NextInput } from "@heroui/react"
import type { Control } from "react-hook-form"
import { useController } from "react-hook-form"
import { forwardRef } from "react"

type Props = {
  name: string
  label: string
  placeholder?: string
  type?: string
  control: Control<any>
  required?: string
  rules?: any
  endContent?: JSX.Element
  startContent?: JSX.Element
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      label,
      placeholder,
      type,
      control,
      required = "",
      rules,
      endContent,
      onChange,
    },
    ref,
  ) => {
    const {
      field,
      fieldState: { invalid },
      formState: { errors },
    } = useController({ name, control, rules: { required, ...rules } })

    return (
      <NextInput
        ref={ref}
        id={name}
        label={label}
        placeholder={placeholder}
        type={type}
        value={field.value || ""}
        name={field.name}
        onChange={e => {
          field.onChange(e)
          if (onChange) onChange(e)
        }}
        isInvalid={invalid}
        onBlur={field.onBlur}
        errorMessage={`${errors[name]?.message ?? ""}`}
        endContent={endContent}
      />
    )
  },
)
