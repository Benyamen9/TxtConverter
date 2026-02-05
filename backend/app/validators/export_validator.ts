import vine from '@vinejs/vine'

export const exportScriptureValidator = vine.compile(
  vine.object({
    book: vine.string().trim().minLength(1),
    chapter: vine
      .number()
      .min(1)
      .transform((value) => Number(value)),
  })
)
