/*var express=require('express');
var app=new express();
app.all("/",function(request,response){
    response.send("hello world");
})
app.listen(3000);

var express=require('express');
var app=new express();
app.get("/",function(request,response){
    response.send("hello world");
})
app.listen(3000);*/

const bodyparser=require('body-parser');
const cors=require("cors")
var express=require('express');
var chalk=require('chalk');
var path=require('path');

var app=new express();

var nav=[{link:'/',title:'Home'},
        {link:'/signup',title:'SignUp'},
        {link:'/login',title:'LogIn'},
        {link:'/books',title:'Books'},
        {link:'/authors',title:'Authors'},
        {link:'/books/add',title:'AddBooks'}];

const booksRouter=require("./src/routes/booksroutes")(nav); //passing nav to books router
const authorsRouter=require("./src/routes/authorsroutes")(nav);
const signupRouter=require("./src/routes/signuproutes")(nav);
const loginRouter=require("./src/routes/loginroutes")(nav);

app.use(express.static(path.join(__dirname,"/public")));

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({
    extended:true
}))

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.set('views','./src/views');
app.set('view engine','ejs');


     


app.get("/",function(req,res){
    res.render('index.ejs',
    {
        nav,
        title:'Library'
    });
   // res.sendFile(path.join(__dirname,"/src/views/index.html"));

});
app.listen(3500,function(){
    console.log('listerning to port '+chalk.green('3500'));
});
