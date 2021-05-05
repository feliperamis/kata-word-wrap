import {WordWrapService} from "../src/WordWrapService";

describe("Word wrap service test", () => {
    let wordWrapService: WordWrapService;

    beforeAll(() => {
        wordWrapService = new WordWrapService();
    })

    test("should return hello world ", () => {
        const helloMessage = wordWrapService.helloWorld();
        expect(helloMessage).toBe("Hello world - Word wrap");
    });

    test("should return true if the number of lines is valid ", () => {
        const valid = wordWrapService.checkValidNumber('fakeTest', 10);
        expect(valid).toBeTruthy();
    });

    test("should return if the text can be splited  at least one time  ", () => {
        const valid = wordWrapService.checkMinimunLenthOfText('fakeTestWithAtLeastTenCharacters', 10);
        expect(valid).toBeTruthy();
    });

    test("should wrap the text ", () => {
        const inputText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        const outputText = wordWrapService.wrap(inputText, 10);
        console.log(outputText)
        expect(outputText).toEqual(
            "Lorem ipsum\n" +
            "dolor sit \n" +
            "amet, consectetur\n" +
            "adipiscing\n" +
            "elit, sed \n" +
            "do eiusmod\n" +
            "tempor incididunt\n" +
            "ut labore \n" +
            "et dolore \n" +
            "magna aliqua.\n"
        );
    });

});