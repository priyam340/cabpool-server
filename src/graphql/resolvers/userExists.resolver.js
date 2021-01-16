const User = require("../../models/user.model");
const mysql = require("mysql");
exports.userExists = async (_, { email }) => {
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "java",
    port: "3306",
  });
  conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Server!");
  });
  var res = 0;
  function saveIt(results) {
    res = results;
    console.log(results);
  }
  var res = 0;
  let sql = "select * from corona ";
  async function ch() {
    try {
      const user = await conn.query(sql);
    } catch (err) {}
  }

  console.log(user);
  return true;
  // const user = await User.find({ email: email }).exec();
  // console.log(user);
  // return user.length == 0 ? false : true;
};
