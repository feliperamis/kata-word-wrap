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
            console.log(word)
            let forceJump = false;
            if (!textLine.length) {
                textLine = word;
            } else {
                if ((textLine + " ").length + word.length > lines) {
                    forceJump = true;
                    if (textLine.length < lines) textLine = textLine + " ";
                } else {
                    textLine = textLine + " " + word;
                }
            }
            if (textLine.length === lines - 1) textLine = textLine + " ";
            if (
                textLine.length === lines || 
                forceJump || 
                (i + 1) === splitted.length
            ) {
                arrayOfLines.push(textLine);
                textLine = "";
                if (forceJump) {
                    i -= 1;
                }
                forceJump = false;
            }            
        }
        console.log(arrayOfLines)
        return arrayOfLines.join("\n");
    }
}