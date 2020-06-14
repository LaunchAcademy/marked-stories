import Story from "../Story";

describe("Markdown Story", () => {
  let story: Story;
  const storyName = "A good user story";
  const storyDescription = "So good it must be imported";
  const storyEpicName = "An epic epic";
  beforeEach(() => {
    story = new Story({
      name: storyName,
      description: storyDescription,
      epicName: storyEpicName,
    });
  });

  it("has a name", () => {
    expect(story.name).toEqual(storyName);
  });
  it("has a description", () => {
    expect(story.description).toEqual(storyDescription);
  });

  it("has an epicName", () => {
    expect(story.epicName).toEqual(storyEpicName);
  });
});
