import {Wrapper} from "../src/Wrapper";

describe("Word wrap service test", () => {
    let wrapper: Wrapper;

    beforeAll(() => {
        wrapper = new Wrapper();
    })
    
    test("should return error if number is not zero or higher", () => {
        const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        const number = -1
        const result = wrapper.textCutter(text, number)
        expect(result).toBe("Error: Number must be 0 or positive number")
    })
});