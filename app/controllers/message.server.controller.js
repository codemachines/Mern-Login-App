exports.render = function (req, res) {
    var email = req.body.email;
    var comments = req.body.comments;
  
    var session = req.session; //session information

    session.email = email;//email id entered by the user
    console.log("username in session: " + session.email);

    //returns the view page with email and comments in it
    res.render('message', {
        email: email,
        comments: comments
    });
};