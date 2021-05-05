import {Wrapper} from "../src/Wrapper";
import {WrapperValidationError} from "../src/WrapperValidationError";

describe("Word wrap service test", () => {
    let wrapper: Wrapper;
    const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const wrapped =
        "Lorem ipsu\n" +
        "m dolor si\n" +
        "t amet, co\n" +
        "nsectetur \n" +
        "adipiscing\n" +
        " elit, sed\n" +
        " do eiusmo\n" +
        "d tempor i\n" +
        "ncididunt \n" +
        "ut labore \n" +
        "et dolore \n" +
        "magna aliq\n" +
        "ua.";


    const validWrappedText =
        "Lorem ipsum\n" +
        "dolor sit \n" +
        "amet, consectetur\n" +
        "adipiscing\n" +
        "elit, sed \n" +
        "do eiusmod\n" +
        "tempor incididunt\n" +
        "ut labore \n" +
        "et dolore \n" +
        "magna aliqua.\n";

    beforeAll(() => {
        wrapper = new Wrapper();
    })

    test("should return hello world ", () => {
        const helloMessage = wrapper.helloWorld();
        expect(helloMessage).toBe("Hello world - Word wrap");
    });

    // Validación código

    test("should return error if max line number is not a positive non zero number", () => {
        expect(() => {wrapper.wrap("Lorep ipsum", -2)}).toThrow(Error);
    });

    // Validación texto
    test("should return same text if number of text characters is lower than max line", () => {
        const wrappedText = wrapper.wrap("Lorem", 7);
        expect(wrappedText).toEqual("Lorem");
    });

    test("should return text wrapped when number of text characters is higher than max line", () => {
        const wrappedText = wrapper.wrap(loremIpsumText, 10);
        const validWrappedText =
            "Lorem ipsum\n" +
            "dolor sit \n" +
            "amet, consectetur\n" +
            "adipiscing\n" +
            "elit, sed \n" +
            "do eiusmod\n" +
            "tempor incididunt\n" +
            "ut labore \n" +
            "et dolore \n" +
            "magna aliqua.\n";
        expect(wrappedText).toEqual(validWrappedText);
    });
});