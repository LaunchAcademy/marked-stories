import Story from "./Story";
import Epic from "./Epic";

type StorySet = {
  stories: Story[];
  epicMap: Map<string, Epic>;
};

export default StorySet;
