var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 articleone: { 
 title: 'first article |harshit srivastava' , 
 heading: 'article one',
 date: 'sep 5,2016',
 content:`
  <p>
             This is my first article.
  </p> `,
},
articletwo: {
 title: 'second article |harshit srivastava' , 
 heading: 'article two',
 date: 'sep 15,2016',
 content:`
  <p>
             This is my second article.
  </p> `,
},
articlethree: {
 title: 'third article |harshit srivastava' , 
 heading: 'article three',
 date: 'sep 15,2016',
 content:`
  <p>
             This is my second article.
  </p> `,
},
};

function createtemplate(data){
       var title= data.title;
       var date= data.date;
       var heading = data.heading;
       var content = data.content;
       
var htmltemplate =`<html>
    <head>
        <title>
            ${title} 
        </title>
       <meta name="viewport" content=" width-device-width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">
          <div>
            <a href="/">home</a>
          </div>
           <hr/>
        <h3>
            ${heading}
        </h3>
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
 return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename= req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});



app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
