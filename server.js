var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto=require('crypto');
var bodyParser=require('body-parser');
var config={
    user:'yoyousuf67',
    database:'yoyousuf67',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD//environment variable
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

/*var articles={
articleOne:{
  title:'Article One',
  heading: 'Article One',
  date:'Sep 5 2017',
  content: ` <p>
            This is the content of my first article
            This is the content of my first article
            This is the content of my first article
            </p>
             <p>
            This is the content of my first article
            This is the content of my first article
            This is the content of my first article
            </p>
             <p>
            This is the content of my first article
            This is the content of my first article
            This is the content of my first article
            </p> `
  
},
articleTwo:{ title:'Article Two',
  heading: 'Article Two',
  date:'Sep 13 2017',
  content: ` <p>
            This is the content of my second article
            This is the content of my second article
            </p> `},
articleThree:{ title:'Article Three',
  heading: 'Article Three',
  date:'Dec 5 2017',
  content: ` <p>
            This is the content of my third article
            This is the content of my third article
            This is the content of my third article
            </p> `}
};*/
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=` <html>
    <head>
        <title>${title}</title>
    <meta name="viewport" context="width-device-width, initial-scale=1"/> 
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date.toDateString()}
        </div>
        <div>
            ${content}
        </div>
    </div>    
</body>
</html>
 `;

    return htmlTemplate;
}


function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return["pbkdf2","1000",salt, hashed.toString('hex')].join($);//output is in bytes 
}
app.get('/hash/:input',function(req,res){ 
    var hashedString=hash(req.params.input, 'this-is-string');
    res.send(hashedString);
});

app.post('/create-user',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    var dbString=hash(password,salt);

    pool.query('INSERT INTO "user"  (username,password) VALUES ($1,$2)',[username,dbString],function(err,result){
        if (err){
        res.status(500).send(err.toString());
    } else 
        {
            res.send('user successfully created:'+username);
        }
        
    });
});

var pool = new Pool(config);
app.get('/test-db',function (req,res){
    //make a slect request
    //return a response with the result

    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result));
        }

});
});
var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names= [];
app.get('/submit-name',function(req,res){
   //Get the name from the request object
   var name=req.query.name;
   
   names.push(name);
   // JSON:javascript object notation(convert object to string)

   res.send(JSON.stringify(names));
});

app.get('/article/:articleName', function (req, res) {
    //articleName=articleone
    //articles[articleName]=content object for articleOne
    var articleName= req.params.articleName;
    pool.query("SELECT * FROM article WHERE title= $1",[req.params.articleName], function(err, result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            if(result.rows.length===0){
                res.status(404).send('Article Not Found');
            
            }else
            {
                var articleData=result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
});

app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});

app.get('/articlethree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
