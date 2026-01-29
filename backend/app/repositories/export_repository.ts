import fs from 'node:fs'
import path from 'node:path'

export default class ExportRepository {
  static write(book: string, chapter: number, content: string) {
    const filePath = path.join('tmp', 'exports', book, `chapter_${chapter}.txt`)
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, content)
    return filePath
  }
}
