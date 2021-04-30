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
});