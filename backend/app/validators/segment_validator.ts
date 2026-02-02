import vine from '@vinejs/vine'

export const createSegmentValidator = vine.compile(
  vine.object({
    verseId: vine.number().min(1),
    segmentNumber: vine.number().min(1),
    text: vine.string().trim().minLength(1),
  })
)

export const updateSegmentValidator = vine.compile(
  vine.object({
    text: vine.string().trim().minLength(1).optional(),
    segmentNumber: vine.number().min(1).optional(),
  })
)
