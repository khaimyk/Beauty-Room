import { ImCheckboxChecked } from "react-icons/im"

export const Succes = ({ children }: { children: string }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
        <ImCheckboxChecked className="text-6xl text-green-500 mx-auto mb-4" />
        <p className="text-2xl font-semibold text-green-500">{children}</p>
      </div>
    </div>
  )
}
