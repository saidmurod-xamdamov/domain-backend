const db = require("../data/DB");
async function Get(req, res) {
  try {
    db.query("SELECT * FROM hosting", async (error, results) => {
      return res.status(200).send(results);
    });
  } catch (error) {
    console.log(error);
  }
}
async function Post(req, res) {
  try {
    db.query("INSERT INTO hosting SET ?", req.body, async (error, results) => {
      return res.status(201).send(results);
    });
  } catch (error) {
    console.log(error);
  }
}
async function Update(req, res) {
  const id = req.params.id;
  try {
    db.query(
      `SELECT * FROM hosting WHERE id =${id}`,
      async (error, results) => {
        console.log(results);
        if (results.length <= 0) {
          return res.status(404).send(error);
        } else {
          db.query(
            `UPDATE hosting SET ? WHERE id=${id}`,
            req.body,
            async (error, results) => {
              if (error) {
                console.log(error);
              }
              return res.status(200).send(results);
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
async function Delete(req, res) {
  const id = req.params.id;
  try {
    db.query(
      `SELECT * FROM hosting WHERE id =${id}`,
      async (error, results) => {
        console.log(results);
        if (results.length <= 0) {
          return res.status(404).send(error);
        } else {
          db.query(
            `DELETE FROM hosting WHERE id=${id}`,
            async (error, results) => {
              if (error) {
                console.log(error);
              }
              return res.status(200).send(results);
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  Get,
  Post,
  Update,
  Delete,
};
