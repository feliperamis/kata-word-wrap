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
});