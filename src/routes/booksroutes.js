var express = require("express");
var booksRouter = express.Router();
function router(nav) {
    var books = [
        {
            image: "img1.jpg",
            title: "I will never tell",
            genre: "historical fiction",
            author: "lev nicolaveyich"
        },
        {
            image: "img2.jpg",
            title: "Half girlfiend",
            genre: "story",
            author: "chettan baghath"
        },
        {
            image: "img3.jpg",
            title: "Mark dowson",
            genre: "noval",
            author: "lev nicolaveyich"
        },
        {
            image: "img4.jpg",
            title: "Non Fiction",
            genre: "historical fiction",
            author: "lev nicolas"
        },
        {
            image: "img5.jpg",
            title: "Physiology",
            genre: "historical fiction",
            author: "colaveyich"
        },
    ]

    booksRouter.route('/')
        .get((req, res) => {
            res.render(
                'books.ejs',
                {
                    nav, title: 'Books', books
                }
            )
        })
    booksRouter.route('/add')
        .get((req, res) => {
            res.render(
                'addbooks.ejs', {
                    nav, title: 'Upload your books', books
                }
            )
        })
    booksRouter.route('/save')
        .post((req,res)=>{
            //res.send("form submitted")
            console.log(req.body);
        })
    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'book.ejs',
                {
                    nav, title: 'book', book: books[id]
                }
            )
        })
    return booksRouter;
    }
module.exports = router