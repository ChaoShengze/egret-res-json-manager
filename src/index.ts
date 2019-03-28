#!/usr/bin/env node
import { Args } from "args-router";
import * as reader from "./module/File";
import { sortRes, sortThm } from "./module/Sort";
import { pendingArr } from "./module/Contact"

const args = Args.getInstance();

args.regArg("contact", (args) => {
    if (args.length != 2) {
        console.error("请指定两个res.json！");
        return;
    }
    args.forEach((url) => {
        pendingArr.push(reader.readResJsonFile(url));
    });
});

args.regArg("sortRes", (args) => {
    const url = args[0];
    const res = reader.readResJsonFile(url);
    reader.writeJson(url, sortRes(res));
});

args.regArg("sortThm", (args) => {
    const url = args[0];
    const res = reader.readThmJsonFile(url);
    reader.writeJson(url, sortThm(res));
});

args.regArg("--help", (args) => {
    console.log(`\n　　constact 命令\n\n　　　　合并两个res.json，例如使用\n\n　　　　　　egret-res-json-manager contact 1.res.json 2.res.json\n\n　　　　来合并 1.res.json 和 2.res.json`);
});

try {
    args.run();
} catch (error) {
    const err = error as string;
    console.log(err);
}