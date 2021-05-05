import {WrapperValidationError} from "./WrapperValidationError";

export class Wrapper {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    /**
      Split has O(len) complexity with a one character separator,
      and we iterate a second time for each word, so **O(len + number of words)**
    */
    wrap(inputText: string, maxLine: number) {
        if (maxLine <= 0) {
            throw new WrapperValidationError();
        }

        if (inputText.length <= maxLine) {
            return inputText;
        }

        let wrappedText = "";
        let count = 0;
        inputText.split(' ').forEach(word => {
            wrappedText += word;
            count += word.length;

            if (count === maxLine-1) {
                wrappedText += " \n";
                count = 0;
            } else if (count >= maxLine) {
                wrappedText += "\n";
                count = 0;
            } else {
                wrappedText += " ";
                count++;
            }
        });

        return wrappedText;
    }
}