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
          "ua."
        );
    });
});
