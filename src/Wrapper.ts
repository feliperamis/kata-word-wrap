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

        return inputText.substr(0, maxLine).concat('\n', this.wrap(inputText.substr(maxLine, inputText.length-1), maxLine));
    }
}