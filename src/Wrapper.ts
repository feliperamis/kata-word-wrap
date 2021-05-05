import {WrapperValidationError} from "./WrapperValidationError";

export class Wrapper {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    wrap(inputText: string, maxLine: number) {
        if (maxLine <= 0) {
            throw new WrapperValidationError();
        }

        // Base condition
        if (inputText.length <= maxLine) {
            return inputText;
        }

        const arrays = inputText.split(' ');
        let wrappedText = "";
        let count = 0;
        arrays.forEach(word => {
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