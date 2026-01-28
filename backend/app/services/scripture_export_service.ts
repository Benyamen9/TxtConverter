import fs from 'node:fs'
import path from 'node:path'
import ScriptureRepository from '../repositories/scripture_repository.js'

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

        segment.comments.forEach((comment) => {
          output += `${comment.content}\n`
        })

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
