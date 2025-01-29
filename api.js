import express from 'express'
import mysql from 'mysql2/promise'
const connection = await mysql.createConnection({
    host: '127.0.0.1',
    database: 'hotel',
    user: 'root',
    password: 'rout'
});

const app = express()
app.use(express.json());

app.get('/', function (req, res) {
  res.json('Hello World')
})

app.get('/hotel', async function (req, res) {
    const [results, fields] = await connection.query('SELECT * FROM hotels')
    res.json(results)
})

app.get('/hotel/:id', async function (req, res) {
    const [results, fields] = await connection.query('SELECT * FROM hotels WHERE id = ?', [req.params.id])
    res.json(results)
})

app.post('/hotel', async function (req, res) {
    try {
        const [results, fields] = await connection.query(
            'INSERT INTO hotels (code, city, address, reference) VALUES (?, ?, ?, ?)',
            [req.code, req.city, req.address, req.reference]
        );
        res.json({
            hotels: results})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'An error occurred' })
    }
    });

app.put('/hotel/:id', async function (req, res) {
    try {
        const [results, fields] = await connection.query(
            'UPDATE hotels SET code = ?, city = ?, address = ?, reference = ? WHERE id = ?',
            [req.code, req.city, req.address, req.reference, req.params.id]
        );
        res.json({
            hotels: results})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'An error occurred' })
    }
    });

app.delete('/hotel/:id', async function (req, res) {
    try {
        const [results, fields] = await connection.query(
            'DELETE FROM hotels WHERE id = ?', [req.params.id]
        );
        res.json({
            hotels: results})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'An error occurred' })
    }
    });


app.listen(3000)