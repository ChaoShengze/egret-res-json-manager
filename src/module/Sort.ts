import * as file from "./File"

export function sortThm(data: file.egretThmJson): file.egretThmJson {
    data.exmls.sort();
    let arr: string[][] = [];
    for (const key in data.skins) {
        if (data.skins.hasOwnProperty(key)) {
            const element = data.skins[key] as string;
            arr.push([key, element])
        }
    }
    arr.sort();
    data.skins = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        data.skins[element[0]] = element[1];
    }
    return data;
}

export function sortRes(data: file.egretResJson): file.egretResJson {
    data.groups.sort();
    data.groups.forEach((element) => {
        const arr = element.keys.split(",");
        arr.sort();
        let str: string = "";
        arr.forEach(element => {
            str += `${element},`;
        });
        str.slice(str.length - 1, 1);
        element.keys = str;
    });
    data.resources.sort();
    return data;
}