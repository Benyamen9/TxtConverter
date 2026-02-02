import ScriptureRepository from '../repositories/scripture_repository.js'
import LayoutService from './layout_service.js'
import { inject } from '@adonisjs/core'

@inject()
export default class ScriptureExportService {
  constructor(
    protected layoutService: LayoutService,
    protected scriptureRepository: ScriptureRepository
  ) {}

  async buildExport(bookSlug: string, chapterNumber: number): Promise<string> {
    const { book, chapter } = await this.scriptureRepository.getChapterByBookSlug(
      bookSlug,
      chapterNumber
    )

    let output = ''

    output += this.layoutService.line(book.title)
    output += this.layoutService.doubleLine(`Psalm ${chapter.chapterNumber}`)

    chapter.verses.forEach((verse) => {
      output += this.layoutService.doubleLine(`${verse.verseNumber} ${verse.text}`)

      verse.segments.forEach((segment) => {
        output += this.layoutService.label('Part of sentence')
        output += this.layoutService.line(segment.text)
        output += this.layoutService.label('Comment')

        if (segment.comments?.length > 0) {
          segment.comments.forEach((comment) => {
            output += this.layoutService.renderComment(comment)
          })
        }

        output += '\n'
      })
    })

    return output
  }
}
