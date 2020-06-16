import ClubhouseClient, { StoryChange as ClubhouseStoryChange, Story as ClubhouseStory } from "clubhouse-lib";

class Client {
  apiToken: string;
  projectId: string;
  private client: ClubhouseClient<any, any>;

  constructor(apiToken: string, projectId: string) {
    this.client = ClubhouseClient.create(apiToken);
  }

  createStory(storyChange: ClubhouseStoryChange): Promise<ClubhouseStory> {
    return this.client.createStory(storyChange);
  }
}

export default Client;
