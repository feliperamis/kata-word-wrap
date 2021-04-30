import {Wrapper} from "../src/Wrapper";

describe("Word wrap service test", () => {
    let wrapper: Wrapper;

    beforeAll(() => {
        wrapper = new Wrapper();
    })

    test("should return hello world ", () => {
        const helloMessage = wrapper.helloWorld();
        expect(helloMessage).toBe("Hello world - Word wrap");
    });

    test("should return wrapped text", () => {
        const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        const wrappedText = wrapper.wrapText(text, 10);
        expect(wrappedText).toBe(
          "Lorem ipsu\n" +
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
          "na aliqua."
        );
    });
});
