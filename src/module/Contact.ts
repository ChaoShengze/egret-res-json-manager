import * as reader from "./File"

export const pendingArr: reader.egretResJson[] = [];

export function contact() {

}

function getResSingleKey(): Map<string, boolean> {
    const map_res = new Map();
    pendingArr.forEach((arr) => {
        arr.resources.forEach((res) => {
            map_res.set(res.name, false);
        });
    });
    return map_res;
}

function getGroupSingleKey(): Map<string, boolean> {
    const map_group = new Map();
    pendingArr.forEach((arr) => {
        arr.groups.forEach((group) => {
            map_group.set(group.name, false);
        });
    });
    return map_group;
}