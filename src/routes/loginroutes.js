var express = require("express");
var loginRouter = express.Router();

function router(nav) {
    loginRouter.route('/')
        .get((req, res) => {
            res.render(
                'login.ejs',
                {
                    nav, title: 'Log In here'
                }
            )
        })
    return loginRouter;
}
module.exports = router
