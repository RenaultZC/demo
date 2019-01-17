import xlsx from 'node-xlsx';
import fs from 'fs';
let putXlsx = async (ctx) => {
    console.log(`${__dirname}\\test.xlsx`)
    const workBuffer = await xlsx.parse(fs.readFileSync(`${__dirname}\\test.xlsx`));
    console.log(workBuffer);
    ctx.body = workBuffer;
}
module.exports = putXlsx;