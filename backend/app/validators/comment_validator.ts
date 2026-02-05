import vine from '@vinejs/vine'

export const commentCreateValidator = vine.compile(
  vine.object({
    userId: vine.number().min(1),
    author: vine.string().trim().minLength(1),
    source: vine.string().trim().optional().nullable(),
    type: vine.enum(['translator_note', 'saint_commentary', 'citation'] as const),
    parentCommentId: vine.number().min(1).optional().nullable(),
    segmentId: vine.number().min(1).nullable().optional(),
    content: vine.string().trim().minLength(1),
    selectedText: vine.string().trim().optional().nullable(),
  })
)

export const commentUpdateValidator = vine.compile(
  vine.object({
    content: vine.string().trim().minLength(1).optional(),
    selectedText: vine.string().trim().optional().nullable(),
    source: vine.string().trim().optional().nullable(),
    author: vine.string().trim().minLength(1).optional(),
    type: vine.enum(['translator_not', 'saint_commentary', 'citation'] as const).optional(),
  })
)
