import { Args } from "args-router";
import * as reader from "./module/File"
import { sortRes, sortThm } from "./module/Sort"

const args = Args.getInstance();

args.regArg("contact", (args) => {
    reader.readResJsonFile("C:\\WorkSpace\\windmillRescue1\\resource\\default.res.json");
});

args.regArg("sortRes", (args) => {
    const url = args[0];
    const res = reader.readResJsonFile(url);
    const dataSort = sortRes(res);
    reader.writeJson(url, dataSort);
});

args.regArg("sortThm", (args) => {
    const url = args[0];
    const res = reader.readThmJsonFile(url);
    const dataSort = sortThm(res);
    reader.writeJson(url, dataSort);
});

try {
    args.run();
} catch (error) {
    const err = error as string;
    console.log(err);
}