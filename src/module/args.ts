import * as process from "process";

export class Args {
    private static instance: Args | null = null;
    private args: string[] | null = null;
    private map: Map<string, (args: string[]) => any>;
    private constructor() {
        this.map = new Map();
        this.args = ([] as string[]).concat(process.argv).splice(2);
    }
    public static getInstance(): Args {
        if (!this.instance) {
            this.instance = new Args();
        }
        return this.instance;
    }

    /**
     * 注册一个启动参数，用于后续自动调用
     * @param name 要注册的参数名
     * @param dealFunc 参数名对应的回调函数
     */
    public regArg(name: string, dealFunc: (args: string[]) => any): void {
        this.map.set(name, dealFunc);
    }

    /**
     * 自动根据已注册的参数和对应的函数自动调用相关的方法
     */
    public run(): void {
        if (!this.args) { 
            throw "No Args!";
        }
        const name = this.args[0];
        const args = ([] as string[]).concat(this.args).splice(1);
        if (!this.map.has(name) || !this.map.get(name)) {
            throw `${name} has not been registered!`;
        }
        const func = this.map.get(name);
        if (func) {
            func(args);
        }
    }
}