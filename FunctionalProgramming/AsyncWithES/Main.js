import * as firstClass from '../AsyncWithES/firstFile.js'

async function runFirst() {
    console.log('Running Main file');
    const result = await firstClass.giveResult('Onnichan')
    console.log(result);
}

runFirst()