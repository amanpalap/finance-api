import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { signupValidator } from '#validators/user'

export default class AuthController {

    async login({ request }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        const user = await User.verifyCredentials(email, password)
        const u = await User.findOrFail(user.id)
        const token = await User.accessTokens.create(
            u,
            ['*'],
            {
                expiresIn: '30 days'
            }
        )
        return token
    }

    async signup({ request, response }: HttpContext) {
        const data = request.all()
        const payload = await signupValidator.validate(data)
        const user = await User.create({
            name: payload.name,
            email: payload.email,
            password: payload.password
        })
        return response.json({
            status: true,
            message: 'Account created!',
            user: user
        })
    }

    async me({ auth }: HttpContext) {
        return auth.user
    }
}