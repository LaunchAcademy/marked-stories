import Story from "./Story";
import Epic from "./Epic";
import StorySet from "./StorySet";

function normalizeStorySet(stories: Story[]): StorySet {
  const epicMap = new Map<string, Epic>();
  stories.forEach((story) => {
    if (story.epicName) {
      const { epicName } = story;
      let epic: Epic | undefined = epicMap.get(epicName);
      if (!epic) {
        epic = new Epic({ name: story.epicName });
        epicMap.set(story.epicName, epic);
      }
      story.epic = epic;
    }
  });
  return {
    stories,
    epicMap,
  };
}

export default normalizeStorySet;
