import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pkg

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

pool.connect((err, client, release) => {
  if (err) {
    console.error('Ошибка подключения к базе:', err.stack)
  } else {
    console.log('Подключение к базе успешно!')
    release()
  }
})
