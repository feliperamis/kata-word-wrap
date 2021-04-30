export class Wrapper {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    wrapText(text: string, limit: number): string {
      return "Lorem ipsu\n" +
      "m dolor si\n" +
      "t amet, c\n" +
      "onsectetur\n" +
      "adipiscing\n" +
      "elit, sed d\n" +
      "o eiusmod\n" +
      "tempor inc\n" +
      "ididunt ut\n" +
      "labore et \n" +
      "dolore mag \n" +
      "na aliqua."
    }
}
