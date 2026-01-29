import ScriptureRepository from '../repositories/scripture_repository.js'
import ExportRepository from '../repositories/export_repository.js'
import { CommentType } from '../types/comment_type.js'

function renderComment(comment: any, indent = 0): string {
  const prefix = '  '.repeat(indent)
  let output = ''

  if (comment.type === CommentType.CITATION) {
    output += `${prefix}Citation:\n`
  }

  output += `${prefix}${comment.content}\n`

  if (comment.segments?.length) {
    for (const segment of comment.segments) {
      output += `${prefix}Part of comment:\n`
      output += `${prefix}${segment.text}\n`
      output += `${prefix}Comment:\n`

      if (segment.comments?.length) {
        for (const child of segment.comments) {
          output += renderComment(child, indent + 1)
        }
      }
    }
  }

  return output
}

export default class ScriptureExportService {
  public static async exportScriptureBySlug(bookSlug: string, chapterNumber: number) {
    const { book, chapter } = await ScriptureRepository.getChapterByBookSlug(
      bookSlug,
      chapterNumber
    )

    let output = `${book.title}\nPsalm ${chapter.chapterNumber}:\n\n`

    for (const verse of chapter.verses) {
      output += `${verse.verseNumber} ${verse.text}\n\n`

      for (const segment of verse.segments) {
        output += `Part of sentence:\n${segment.text}\nComment:\n`

        if (segment.comments?.length) {
          for (const comment of segment.comments) {
            output += renderComment(comment)
          }
        }

        output += '\n'
      }
    }

    const filePath = ExportRepository.writeExportFile(book.slug, chapter.chapterNumber, output)

    return {
      path: filePath,
      message: 'Scripture exported successfully',
    }
  }
}
