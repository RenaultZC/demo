import xlsx from 'node-xlsx';
import fs from 'fs';
let putXlsx = async (ctx) => {
    
    const workBuffer = await xlsx.parse(fs.readFileSync(`${__dirname}\\..\\test.xlsx`));
    ctx.body = workBuffer;
}
module.exports = putXlsx;