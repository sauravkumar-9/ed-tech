import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('placed'),
  z.literal('no show'),
  z.literal('pending'),
  z.literal('rejected'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  status: userStatusSchema,
  // role: userRoleSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof userSchema>

export const userListSchema = z.array(userSchema)
