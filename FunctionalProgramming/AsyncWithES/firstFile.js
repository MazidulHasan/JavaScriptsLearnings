import * as second from '../AsyncWithES/secondFile.js'

export class firstClass{
    async giveResult(params) {
        const resultFromSecond = await second.secondFunction(20,30)
        return `The result is:${params} and ${resultFromSecond}`
    }
}

const firstClass = new firstClass();
export default firstClass;

