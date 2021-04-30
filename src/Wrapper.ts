export class Wrapper {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    wrapText(text: string, limit: number): string {
      let regex = new RegExp('.{1,' + limit + '}', 'g');

      return text.match(regex).join('\n')
    }
}
