import Epic from "./Epic";

type StoryOptions = {
  name?: string;
  epicName?: string;
  description?: string;
};

export class Story {
  name?: string;
  epicName?: string;
  epic?: Epic;
  description?: string;

  constructor(options: Partial<StoryOptions> = {}) {
    this.name = options.name;
    this.epicName = options.epicName;
    this.description = options.description;
  }
}

export default Story;
