const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

const db = require("./utils/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API for Mahasiswa
// Show all mahasiswa
app.get("/api/mahasiswa", (req, res) => {
  let sql = `SELECT * FROM mahasiswa`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Show specific mahasiswa by its nim
app.get("/api/mahasiswa/:id", (req, res) => {
  let sql = `SELECT * FROM mahasiswa WHERE nim = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Add new mahasiswa
app.post("/api/mahasiswa", (req, res) => {
  let data = {
    nim: req.body.nim,
    nama: req.body.nama,
    jurusan: req.body.jurusan,
  };
  let sql = `INSERT INTO mahasiswa SET ?`;
  db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Edit mahasiswa by its nim
app.put("/api/mahasiswa/:id", (req, res) => {
  let sql = `UPDATE mahasiswa SET nama = '${req.body.nama}', jurusan = '${req.body.jurusan}' WHERE nim = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Delete mahasiswa by its nim
app.delete("/api/mahasiswa/:id", (req, res) => {
  let sql = `DELETE FROM mahasiswa WHERE nim = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// API for dosen
// Show all dosen
app.get("/api/dosen", (req, res) => {
  let sql = `SELECT * FROM dosen`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Show specific dosen by its nip
app.get("/api/dosen/:id", (req, res) => {
  let sql = `SELECT * FROM dosen WHERE nip = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Add new dosen
app.post("/api/dosen", (req, res) => {
  let data = {
    nip: req.body.nip,
    nama: req.body.nama,
  };
  let sql = `INSERT INTO dosen SET ?`;
  db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Edit dosen by its nip
app.put("/api/dosen/:id", (req, res) => {
  let sql = `UPDATE dosen SET nama = '${req.body.nama}' WHERE nip = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

// Delete dosen by its nip
app.delete("/api/dosen/:id", (req, res) => {
  let sql = `DELETE FROM dosen WHERE nip = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        response: results,
      })
    );
  });
});

app.listen(port, () => {
  console.log(`University API is listening at http://localhost:${port}`);
});
