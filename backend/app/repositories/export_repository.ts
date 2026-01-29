import fs from 'node:fs'
import path from 'node:path'

export default class ExportRepository {
  public static writeExportFile(bookSlug: string, chapterNumber: number, content: string): string {
    const filePath = path.join('tmp', 'exports', bookSlug, `psalm_${chapterNumber}.txt`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, content)

    return filePath
  }
}
