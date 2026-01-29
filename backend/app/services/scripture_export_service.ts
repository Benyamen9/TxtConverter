import ScriptureRepository from '../repositories/scripture_repository.js'
import { renderComment } from '../utils/comment_renderer.js'
import { TextFormatter } from '../utils/text_formatter.js'

export default class ScriptureExportService {
  public static async buildExport(bookSlug: string, chapterNumber: number): Promise<string> {
    const { book, chapter } = await ScriptureRepository.getChapterByBookSlug(
      bookSlug,
      chapterNumber
    )

    let output = ''

    output += TextFormatter.line(book.title)
    output += TextFormatter.doubleLine(`Psalm ${chapter.chapterNumber}`)

    chapter.verses.forEach((verse) => {
      output += TextFormatter.doubleLine(`${verse.verseNumber} ${verse.text}`)

      verse.segments.forEach((segment) => {
        output += TextFormatter.label('Part of sentence')
        output += TextFormatter.line(segment.text)
        output += TextFormatter.label('Comment')

        if (segment.comments?.length > 0) {
          segment.comments.forEach((comment) => {
            output += renderComment(comment)
          })
        }

        output += '\n'
      })
    })

    return output
  }
}
