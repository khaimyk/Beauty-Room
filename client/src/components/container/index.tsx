import type React from "react"

type Props = {
  children: React.ReactElement[] | React.ReactElement
  className?: string
}
export const Container: React.FC<Props> = ({ children }) => {
  return <div className="flex max-w-screen-xl mx-auto md:mt-10">{children}</div>
}
