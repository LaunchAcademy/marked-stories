type EpicOptions = {
  name?: string;
};

class Epic {
  name?: string;

  constructor(options: EpicOptions) {
    this.name = options.name;
  }
}

export default Epic;
