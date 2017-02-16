var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
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
};
function createTemplate (data){
    var title=data.title;
    var date=data.title;
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
            ${date}
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


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    //articleName=articleone
    //articles[articleName]=content object for articleOne
    var articleName= req.params.articleName;
 res.send(createTemplate(articles[articleName]));
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
