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


var express=require('express');
var chalk=require('chalk');
var path=require('path');

var app=new express();
const booksRouter=express.Router();

app.use(express.static(path.join(__dirname,"/public")));

app.use('/books',booksRouter);

app.set('views','./src/views');
app.set('view engine','ejs');
var nav=[{link:'/',title:'home'},
        {link:'/signup',title:'signup'},
        {link:'/login',title:'login'},
        {link:'/books',title:'books'},
        {link:'/authors',title:'authors'}];

var books=[
    {
        image:"img1.jpg",
        title:"war and piece",
        genre:"historical fiction",
        author:"lev nicolaveyich"
    },
    {
        image:"img2.jpg",
        title:"book2",
        genre:"historical fiction",
        author:"lev nicolaveyich"
    },
    {
        image:"img1.jpg",
        title:"book3",
        genre:"historical fiction",
        author:"lev nicolaveyich"
    },
    {
        image:"img2.jpg",
        title:"book4",
        genre:"historical fiction",
        author:"lev nicolaveyich"
    },
    {
        image:"img1.jpg",
        title:"book5",
        genre:"historical fiction",
        author:"lev nicolaveyich"
    },
]        

booksRouter.route('/')
.get((req,res)=>{
    res.render(
        'books',
        {
            nav,title:'Library',books
        }
    )
})



app.get("/",function(req,res){
    res.render('index.ejs',
    {
        nav,
        title:'Library'
    });
   // res.sendFile(path.join(__dirname,"/src/views/index.html"));

});
app.listen(3000,function(){
    console.log('listerning to port '+chalk.green('3000'));
});

