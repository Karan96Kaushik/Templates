const sqlite3 = require('sqlite3').verbose();

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

let db = new sqlite3.Database('./data.db', err => {
    if (err) { console.error(err.message) }

    console.log("Sqlite Connected");

    db.all(query.select.main, [], async (err, rows) => {
        if (err) { throw err; }
        console.log(rows)
    })
});
