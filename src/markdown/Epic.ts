type EpicOptions = {
  id?: string;
  name?: string;
};

class Epic {
  id?: string;
  name?: string;

  constructor(options: EpicOptions) {
    this.id = options.id;
    this.name = options.name;
  }
}

export default Epic;
