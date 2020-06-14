type StoryOptions = {
  name?: string;
  epicName?: string;
  description?: string;
};

export class Story {
  name?: string;
  epicName?: string;
  description?: string;

  constructor(options: Partial<StoryOptions> = {}) {
    this.name = options.name;
    this.epicName = options.epicName;
    this.description = options.description;
  }
}

export default Story;
