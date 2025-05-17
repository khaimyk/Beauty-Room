export type User = {
  id: string
  email: string
  password: string
  name: string
  image?: string
  description?: string
  phoneNumber?: string
  role: RoleType
  chatId?: string
  nickName?: string
  services: Service[]
  bookings: Booking[]
  reviews: Review[]
  categories: Category[]
  masterAvailability: MasterAvailability[]
  bookingLogs: BookingLog[]
  branch?: Branch
  branchId?: string
  managedBranches: Branch[]
  createdBranches: Branch[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
export const roleOptions = ["CLIENT", "MASTER", "ADMIN", "SUPERADMIN"] as const
export type RoleType = (typeof roleOptions)[number]

export type Branch = {
  id: string
  name: string
  address: string
  phoneNumber?: string
  description?: string
  socialMedia?: string
  city?: string
  image?: string
  status: "ACTIVE" | "INACTIVE"
  superAdmin: User
  superAdminId: string
  admin: User
  adminId: string
  users: User[]
  services: Service[]
  bookings: Booking[]
  reviews: Review[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export type Category = {
  id: string
  name: string
  services: Service[]
  user?: User
  userId?: string
  createdAt: Date
  updatedAt: Date
}

export type Service = {
  id: string
  name: string
  description: string
  duration: number
  price: number
  currency: string
  user: User
  userId: string
  bookings: Booking[]
  category: Category
  categoryId: string
  branch?: Branch
  branchId?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  masters?: { masterId: string; master: { id: string; name: string } }[]
}

export type Client = {
  id: string
  name: string
  nickName: string
  chatId?: string
  phoneNumber: string
  user?: User
  userId: string
  reviews: Review[]
  bookings: Booking[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export type Booking = {
  id: string
  user: User
  userId: string
  services: Service[]
  review: Review[]
  client: Client
  clientId: string
  branch?: Branch
  branchId?: string
  date: Date
  time: string
  notes?: string
  createdAt: Date
  updatedAt: Date
  status: "PENDING" | "CONFIRMED" | "CANCELLED"
  logs: BookingLog[]
}

export type Review = {
  id: string
  rating: number
  comment?: string
  client?: Client
  clientId?: string
  user?: User
  userId?: string
  booking?: Booking
  bookingId?: string
  branch?: Branch
  branchId?: string
  createdAt: Date
  updatedAt: Date
}

export type MasterAvailability = {
  id: string
  availability: string // JSON string
  user: User
  userId: string
  createdAt: Date
  updatedAt: Date
}

export type BookingLog = {
  id: string
  bookingId: string
  userId: string
  action: "confirmed" | "canceled"
  timestamp: Date
  booking: Booking
  user: User
}
