import vine from '@vinejs/vine'

export const authLoginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(8),
  })
)

export const authRegisterValidate = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(8),
    fullName: vine.string().trim().minLength(2).optional(),
  })
)
