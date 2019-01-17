const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19980527',
    database: 'test',
    port: '3306'
});

module.exports = async function main() {
    const mysql = require('mysql2/promise');
    // 创建连接
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '19980527',
        database: 'test',
        port: '3306'}
    );
    //查询
    const [rows, fields] = await conn.execute('SELECT * FROM `user`')
    return rows;
  }