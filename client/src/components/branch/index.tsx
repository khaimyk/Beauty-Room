export const InfoItem = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
}) => (
  <div className="flex items-center gap-2">
    <span className="mt-1 text-gray-500 dark:text-gray-400">{icon}</span>
    <div>
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h4>
      <span className="text-md  text-gray-900 dark:text-white flex ">
        {content}
      </span>
    </div>
  </div>
)
