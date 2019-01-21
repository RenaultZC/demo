const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '*****',
    user: '*****',
    password: '*****',
    database: '*****',
    port: '*****'
});

module.exports = async function main() {
    const mysql = require('mysql2/promise');
    // 创建连接
    const conn = await mysql.createConnection({
        host: '*****',
        user: '*****',
        password: '*****',
        database: '*****',
        port: '*****'
});
    //查询
    const [rows, fields] = await conn.execute('SELECT * FROM `user`')
    return rows;
  }