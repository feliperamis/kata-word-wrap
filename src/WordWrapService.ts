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

    wrap(text: string, lines: number): string {
        const splitted = text.split(" ");
        let textLine = "";
        const arrayOfLines = [];
        for (let i = 0; i < splitted.length; i++) {
            const word = splitted[i];
            textLine = !textLine.length 
                ? word 
                : (textLine + " " + word).length === (lines - 1)
                    ? textLine + " " + word + " "
                    : textLine + " " + word;
            if (textLine.length >= lines) {
                arrayOfLines.push(textLine);
                textLine = "";
            }            
        }
        return arrayOfLines.join("\n");
    }
}