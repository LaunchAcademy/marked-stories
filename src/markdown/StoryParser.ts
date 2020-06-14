import remark from "remark";
import fs from "fs";
import { root } from "mdast-builder";
import { Node } from "unist";
import toString from "mdast-util-to-string";

import Story from "./Story";

const storyHeaderDepth = 3;

class StoryParser {
  filePath: string;
  stories: Story[];

  constructor(filePath: string) {
    this.filePath = filePath;
    this.stories = [];
  }

  public parse(): Story[] {
    const { filePath } = this;
    const tree: Node = remark().parse(fs.readFileSync(filePath));

    const children = Array.isArray(tree.children) ? tree.children : [];
    let i: number = 0;
    let story: Story | undefined;
    let rangeNodes: Node[] = [];
    let currentEpicName: string | undefined;
    do {
      const node = children[i];
      if (node && node.depth === storyHeaderDepth - 1) {
        currentEpicName = toString(node);
      }

      if (node && node.depth === storyHeaderDepth) {
        if (story) {
          story.description = remark().stringify(root(rangeNodes));
          story.epicName = currentEpicName;
          // a new story was encountered so flush the current one
          this.stories.push(story);
          rangeNodes = [];
        }
        story = new Story({
          name: toString(node),
        });
      } else {
        if (node.type !== "heading" || (node.type === "heading" && node.depth > storyHeaderDepth)) {
          rangeNodes.push(node);
        }
      }
      i += 1;
    } while (i < children.length);
    if (story) {
      this.stories.push(story);
    }

    return this.stories;
  }
}

export default StoryParser;
