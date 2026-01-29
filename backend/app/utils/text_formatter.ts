export class TextFormatter {
  static line(text: string): string {
    return `${text}\n`
  }

  static doubleLine(text: string): string {
    return `${text}\n\n`
  }

  static label(label: string): string {
    return `${label}:\n`
  }
}
