import vine from '@vinejs/vine'

export const exportScriptureValidator = vine.compile(
  vine.object({
    bookSlug: vine.string().trim().minLength(1),
    chapterNumber: vine.number().min(1),
  })
)
