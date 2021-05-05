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

        return "";
    }
}