import { Link, useMatch } from "react-router-dom"
import clsx from "clsx"
import { Tooltip } from "@heroui/react"

type Props = {
  children?: React.ReactNode
  icon: React.ReactNode
  href: string
  className?: string
  activeClass?: string
  mobile?: boolean
  title?: string
  onClick?: () => void
}

export const NavButton = ({
  children,
  icon,
  href,
  className = "",
  activeClass = "",
  mobile = false,
  title = "",
}: Props) => {
  const match = useMatch(href + "/*")

  const content = (
    <Link
      to={href}
      className={clsx(
        "flex items-center transition-all",
        mobile
          ? "justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          : "px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
        match ? activeClass : "text-gray-700 dark:text-gray-300",
        className,
      )}
    >
      <span className={clsx(mobile ? "text-xl" : "text-lg mr-3")}>{icon}</span>
      {!mobile && children}
    </Link>
  )

  return mobile ? (
    <Tooltip content={title} placement="right" showArrow>
      {content}
    </Tooltip>
  ) : (
    content
  )
}
