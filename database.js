import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
    host: '127.0.0.1',
    database: 'hotel',
    user: 'root',
    password: 'rout'
});