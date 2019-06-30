const express = require('express');
const next = require('next');
var bodyParser = require('body-parser');
const db = require('./db');
const sql = require('sql-template-strings');

const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    var server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/newslist', (req, res) => {
        (
            async function(){
                /*
                var whr = '';
                if(req.query.date_filter != 0){
                    whr = 'WHERE publish_date >= ' + req.query.date_filter + ' 00:00:00 AND publish_date <= ' + req.query.date_filter + ' 23:59:59';
                }
                */
                var usql = sql`
                    SELECT id, title, cover_image, description, publish_date
                    FROM news
                    ORDER BY publish_date DESC
                `;
                if(req.query.date_filter != 0){
                    let from = req.query.date_filter + ' 00:00:00';
                    let to = req.query.date_filter + ' 23:59:59';
                    usql = sql`
                    SELECT id, title, cover_image, description, publish_date 
                    FROM news 
                    WHERE publish_date >= ${from} AND publish_date <= ${to} 
                    ORDER BY publish_date DESC 
                `;
                }
                
                var result = await db.query(usql);
                var output = {}
                output.status = false;
                if(typeof(result) == 'object'){
                    output.status = true;
                    output.result = result;
                }
                res.status(200).json({ output });
            }
        )(this);
    });

    server.get('/news', (req, res) => {
        (
            async function(){
                const [result] = await db.query(sql`
                    SELECT id, title, cover_image, description, publish_date
                    FROM news
                    WHERE id = ${req.query.id}
                `);
                var output = {}
                output.status = false;
                if(typeof(result) != 'undefined'){
                    if(result.hasOwnProperty('id')){
                        output.status = true;
                        output.result = result;
                    }
                }
                res.status(200).json({ output });
            }
        )(this);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.post('/admin', (req, res) => {
        (
            async function(){
                const [result] = await db.query(sql`
                    SELECT id, user
                    FROM admin
                    WHERE user = ${req.body.user} AND pass = ${req.body.pass}
                `);
                var output = {}
                output.status = false;
                if(typeof(result) != 'undefined'){
                    if(result.hasOwnProperty('id')){
                        output.status = true;
                        output.result = result;
                    }
                }
                res.status(200).json({ output });
            }
        )(this);
    });

    server.post('/admin/news', async (req, res) => {
        var publish_date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        const result = await db.query(sql`INSERT INTO news (title, cover_image, description, publish_date) VALUES (${req.body.title}, ${req.body.cover_image}, ${req.body.description}, ${publish_date})`);
        var output = {}
        output.status = false;
        if(typeof(result) != 'undefined'){
            output.status = true;
        }
        res.status(200).json({ output });
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });