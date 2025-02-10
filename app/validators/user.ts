import { UserRole } from '#models/user'
import vine from '@vinejs/vine'

/**
 * Validates the user creation action
 */
export const signupValidator = vine.compile(
    vine.object({
        name: vine.string().trim().minLength(6),
        referredBy: vine.number().positive().optional(),
        role: vine.enum(Object.values(UserRole)).optional(),
        email: vine.string().trim().email(),
        password: vine.string().trim().minLength(8),
    })
)