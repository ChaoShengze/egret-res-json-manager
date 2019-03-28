import * as fs from "fs";

export interface egretResJson extends JSON {
    groups: { keys: string, name: string }[],
    resources: { name: string, type: string, url: string }[]
}

export interface egretThmJson extends JSON {
    skins: any,
    autoGenerateExmlsList: boolean,
    exmls: string[],
    path: string
}

export function readResJsonFile(url: string): egretResJson {
    const resFile = JSON.parse(fs.readFileSync(url, 'utf-8')) as egretResJson;
    return resFile;
}

export function readThmJsonFile(url: string): egretThmJson {
    const thmFile = JSON.parse(fs.readFileSync(url, 'utf-8')) as egretThmJson;
    return thmFile;
}

export function writeJson(url: string, data: egretResJson | egretThmJson) {
    const str = JSON.stringify(data, null, "\t");
    fs.writeFile(url, str, function (err) {
        if (err) {
            throw "Write json error!";
        }
    })
}