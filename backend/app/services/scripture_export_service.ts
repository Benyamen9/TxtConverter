import fs from 'node:fs'
import path from 'node:path'
import ScriptureRepository from '../repositories/scripture_repository.js'

function renderComment(comment: any, indent = 0): string {
  let output = ''
  const prefix = '  '.repeat(indent)

  output += `${prefix}${comment.content}\n`

  if (comment.segments && comment.segments.length > 0) {
    comment.segments.forEach((segment: any) => {
      output += `${prefix}Part of comment:\n`
      output += `${prefix}${segment.text}\n`
      output += `${prefix}Comment:\n`

      if (segment.comments && segment.comments.length > 0) {
        segment.comments.forEach((childComment: any) => {
          output += renderComment(childComment, indent + 1)
        })
      }
    })
  }

  return output
}

export default class ScriptureExportService {
  public static async exportScriptureBySlug(bookSlug: string, chapterNumber: number) {
    const { book, chapter } = await ScriptureRepository.getChapterByBookSlug(
      bookSlug,
      chapterNumber
    )

    let output = ''

    output += `${book.title}\n`
    output += `Psalm ${chapter.chapterNumber}:\n\n`

    chapter.verses.forEach((verse) => {
      output += `${verse.verseNumber} ${verse.text}\n\n`

      verse.segments.forEach((segment) => {
        output += `Part of sentence:\n`
        output += `${segment.text}\n`
        output += `Comment:\n`

        if (segment.comments && segment.comments.length > 0) {
          segment.comments.forEach((comment) => {
            output += renderComment(comment)
          })
        }

        output += `\n`
      })
    })

    const filePath = path.join('tmp', 'exports', book.slug, `psalm_${chapter.chapterNumber}.txt`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, output)

    return {
      path: filePath,
      message: 'Psalm exported successfully',
    }
  }
}
