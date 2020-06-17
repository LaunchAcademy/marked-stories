#!/usr/bin/env node

// tslint:disable: no-console

import { Command } from "commander";
import push from "./cli/push";

const prg = new Command();
const markedStories = prg.name("marked-stories");
markedStories.addCommand(push());

prg.parse(process.argv);
