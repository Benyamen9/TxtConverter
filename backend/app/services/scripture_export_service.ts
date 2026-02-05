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
      verse.segments.forEach((segment) => {
        if (segment.comments?.length > 0) {
          const topLevelComments = segment.comments.filter((comment) => !comment.commentSegmentId)

          topLevelComments.forEach((comment) => {
            output += this.layoutService.renderComment(comment)
          })
        }
        output += '\n'
      })
    })

    return output
  }
}
