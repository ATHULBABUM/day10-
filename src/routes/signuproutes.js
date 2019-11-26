var express = require("express");
var signupRouter = express.Router();

function router(nav) {
    signupRouter.route('/')
        .get((req, res) => {
            res.render(
                'signup.ejs',
                {
                    nav, title: "Sign up here"
                }
            )
        })
    return signupRouter;
}
module.exports = router