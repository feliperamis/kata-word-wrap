export class WordWrapService {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    checkValidNumber(text: string, lines: number) {
        return lines > 0;
    }
}