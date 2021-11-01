const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "post@7622",
    host:"localhost",
    port:5432,
    database: "sample"
});

module.exports = pool;
