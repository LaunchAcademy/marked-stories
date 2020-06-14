import StoryParser from "../StoryParser";
import Story from "../Story";
import { join } from "path";

describe("Story Parser", () => {
  const relativeFixturePath = "fixtures/validStoryFile.md";
  const fixturePath = join(__dirname, relativeFixturePath);
  let parser: StoryParser;
  let stories: Story[] = [];
  beforeEach(() => {
    parser = new StoryParser(fixturePath);
    stories = parser.parse();
  });

  it("has a path", () => {
    expect(parser.filePath).toEqual(fixturePath);
  });

  it("creates a list of stories", () => {
    expect(stories.length).toEqual(2);
  });

  it("creates a story with a sensible name", () => {
    expect(stories[0].name).toEqual("Parse a markdown story");
  });

  it("creates a story with a sensible epicName", () => {
    expect(stories[0].epicName).toEqual("Initial Import");
  });

  it("creates a story with a description", () => {
    expect(stories[0].description).toBeTruthy();
    expect(stories[0].description).toMatch("Acceptance Criteria");
  });
});
