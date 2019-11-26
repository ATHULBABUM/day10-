var express = require("express");
var authorsRouter = express.Router();
function router(nav) {
     var authors = [
    {
      image: 'image1.jpg',
      name: "Lev Nicolaveyich",
      country: "russian"
    }, {
      image: 'image2.jpg',
      name: "A P J Kalam",
      country: "Indian"
    }, {
      image: 'image3.jpg',
      name: "Gandhiji",
      country: "Indian"
    }, {
      image: 'image4.jpg',
      name: "Hitler",
      country: "German"
    }, {
      image: 'image5.jpg',
      name: "Shakespear",
      country: "England"
    }
      ]
  authorsRouter.route('/')
    .get((req, res) => {
        res.render(
           "authors.ejs", {
               nav, title: "Authors", authors
            }
        )
    })
  authorsRouter.route('/:id')
      .get((req, res) => {
           const id = req.params.id;
               res.render(
                   'author.ejs',
                       {
                           nav, title: 'author', author: authors[id]
                        }
                )
       })
  return authorsRouter;
  }
module.exports = router