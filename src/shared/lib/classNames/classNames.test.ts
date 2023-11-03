import {classNames} from ".";

describe("classNames", () => {
  const expected = "someClass";

  test("только с одним первым параметром", () => {
    expect(classNames("someClass")).toBe(expected);
  });

  test("дополнительными классами", () => {
    const expected = "someClass class1 class2";

    expect(classNames("someClass", ["class1", "class2"])).toBe(expected);
  });

  test("модами hovered scrollable", () => {
    const expected = "someClass class1 class2 hovered scrollable";

    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: true,
      }),
    ).toBe(expected);
  });

  test("модами hovered", () => {
    const expected = "someClass class1 class2 hovered";

    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: false,
      }),
    ).toBe(expected);
  });

  test("модами scrollable вместе с hovered undefined", () => {
    const expected = "someClass class1 class2 scrollable";

    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: undefined,
        scrollable: true,
      }),
    ).toBe(expected);
  });
});
