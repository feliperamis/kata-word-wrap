export class WordWrapService {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    checkValidNumber(text: string, lines: number):boolean {
        return lines > 0;
    }

    checkMinimunLenthOfText(text: string, lines: number):boolean {
        return text.length >= lines;
    }

    wrap(text: string, lines: number) {
    }
}