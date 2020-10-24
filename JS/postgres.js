const { Client } = require('pg')

var query = {
    select: {
        main: "select * from main order by id",
        results: "select * from results order by id",
        data: "select * from data order by id",
    },
    insert: {
        main: `INSERT INTO public.main(id, barcode, "time", addr) VALUES ($1, $2, $3, $4)`,
        results: `INSERT INTO public.results(id, main_id, wor_type, voltage, current, capacity, temp, "time", stage, error, cs) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        data: `INSERT INTO public.data(id, results_id, voltage, current, capacity, temp, "time") VALUES ($1,$2,$3,$4,$5,$6,$7)`
    }
}

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sqlite_port',
    password: '0Bama-mama',
    port: 5432,
})

client.connect().then(() => {
    console.log("PG Connected")

    var values = [1, "20", 500, 75]
    client.query(query.insert.main, values).then(() => { console.log("DONE") })

})
