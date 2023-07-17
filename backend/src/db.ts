const Pool = require ("pg").Pool

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "userdata",
    password: 'Jesusisthekey7&',
    port: 5432,
})


export const profile = new Pool({
    user: "postgres",
    host: "localhost",
    database: "usersdatabase",
    password: 'Jesusisthekey7&',
    port: 5432,
})

