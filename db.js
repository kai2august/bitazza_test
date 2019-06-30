const mysql = require('serverless-mysql');

const db = mysql({
  config: {
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b5831fde986838',
    password: '38dc93e1',
    database: 'heroku_31db8d3d2554562'
  }
});

exports.query = async query => {
  try {
      //console.log(query);
    const results = await db.query(query);
    await db.end();
      //console.log(results);
    return results;
  } catch (error) {
      //console.log(error);
    return { error };
  }
};