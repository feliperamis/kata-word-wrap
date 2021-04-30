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

});