import {WrapperValidationError} from "./WrapperValidationError";

export class Wrapper {
    constructor() {
    }

    helloWorld(): string {
        return "Hello world - Word wrap"
    }

    wrap(inputText: string, maxLine: number) {
        throw new WrapperValidationError();
    }
}