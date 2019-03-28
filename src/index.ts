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
    reader.writeJson(url, sortRes(res));
});

args.regArg("sortThm", (args) => {
    const url = args[0];
    const res = reader.readThmJsonFile(url);
    reader.writeJson(url, sortThm(res));
});

try {
    args.run();
} catch (error) {
    const err = error as string;
    console.log(err);
}