import Story from "../Story";
import normalizeStorySet from "../normalizeStorySet";

describe("normalize story set", () => {
  const epicName = "Epic One";
  const storyA = new Story({ name: "first story", epicName });
  const storyB = new Story({ name: "second story", epicName });

  beforeEach(() => {});
  it("populates the epic reference", () => {
    normalizeStorySet([storyA, storyB]);
    const { epic } = storyA;
    expect(epic).toBeDefined();
  });

  it("does not replace the epic reference when encountered twice", () => {
    normalizeStorySet([storyA, storyB]);
    const { epic: epicA } = storyA;
    expect(epicA).toEqual(storyB.epic);
  });

  it("associates an existing epic to another story", () => {
    normalizeStorySet([storyA, storyB]);
    const { epic: epicA } = storyA;
    expect(epicA).toBeDefined();
    expect(epicA).toEqual(storyB.epic);
  });
});
