import { FaStar } from "react-icons/fa"
import type { Review } from "../../app/types"
import { useTranslation } from "react-i18next"

interface RatingProps {
  reviews: Review[] | undefined
  showCount?: boolean
}

export const Rating = ({ reviews = [], showCount = false }: RatingProps) => {
  // Функція для розрахунку середньої оцінки
  const calculateAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) return "0.0"
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
    return (totalRating / reviews.length).toFixed(1)
  }
  const { t } = useTranslation()
  // Функція для визначення правильного варіанту слова "відгук"
  const getReviewWord = (count: number) => {
    if (count === 1) {
      return t("reviews.reviewWord")
    }
    if (count >= 2 && count <= 4 && !(count >= 12 && count <= 14)) {
      return t("reviews.reviewsWord")
    }
    return t("reviews.reviewsWordPlural")
  }

  const averageRating = calculateAverageRating(reviews)
  const reviewCount = reviews.length
  const reviewWord = getReviewWord(reviewCount) // Отримуємо правильний варіант слова

  return (
    <div className="flex items-center gap-1">
      {/* Відображення зірок */}
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={20}
          className={
            i < Math.round(Number(averageRating))
              ? "text-yellow-500"
              : "text-gray-400"
          }
        />
      ))}

      <span className="text-gray-600 text-sm">
        {showCount && ` (${reviewCount} ${reviewWord})`}
      </span>
    </div>
  )
}
