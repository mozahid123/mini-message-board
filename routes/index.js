var express = require('express');
var router = express.Router();


// messages
let messages=[
  {
    user:'Zawad',
    text:'Hello there',
    publish:new Date()
  },
  {
    user:'Mozahid',
    text:'Hey i am new here',
    publish:new Date()
  }
]

router.get('/',function(req,res){
  res.render('index',{title:'Mini message board',messages:messages})
})

router.get('/new',function(req,res){
  res.render('forms')
})

router.post('/new',function(req,res){
  message=req.body.Textmessage,
  name=req.body.Username
  messages.push({text:message, user: name, publish: new Date()});
  res.redirect('/')
})

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
