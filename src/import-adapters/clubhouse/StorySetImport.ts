import Client from "./Client";
import StorySet from "../../markdown/StorySet";
// import Epic from "../../markdown/Epic";
import Story from "../../markdown/Story";
import { StoryChange } from "clubhouse-lib";

export class StorySetImport {
  storySet: StorySet;
  projectId: number;
  private client: Client;

  constructor(storySet: StorySet, client: Client, projectId: number) {
    this.storySet = storySet;
    this.client = client;
    this.projectId = projectId;
  }

  async create() {
    const clubhouseEpics = await this.client.listEpics();

    // build a list of persisted epics
    const epicNameIdMap = new Map<string, number>();
    clubhouseEpics.forEach((clubhouseEpic) => {
      epicNameIdMap.set(clubhouseEpic.name, clubhouseEpic.id);
    });

    const { epicMap, stories } = this.storySet;

    // create non-existent epics where necessary
    for (const [_, epic] of epicMap) {
      if (epic.name) {
        const persistedEpicId = epicNameIdMap.get(epic.name);
        if (!persistedEpicId) {
          const persistedEpic = await this.client.createEpic({ name: epic.name });
          epicNameIdMap.set(persistedEpic.name, persistedEpic.id);
        }
      }
    }

    // create stories
    for (const story of stories) {
      const storyChange = this.makeStoryChange(story);
      if (story.epicName) {
        storyChange.epic_id = epicNameIdMap.get(story.epicName);
      }
      await this.client.createStory(storyChange);
    }
  }

  private makeStoryChange(story: Story): StoryChange {
    return {
      name: story.name,
      description: story.description,
      story_type: "feature",
      project_id: this.projectId,
    };
  }
}

export default StorySetImport;
