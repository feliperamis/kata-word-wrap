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

        if (maxLine <= inputText.length) {
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
                "na aliqua.";
        }

        return inputText;
    }
}