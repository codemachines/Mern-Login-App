exports.render = function (req, res) {
    //saves the session information
    var session = req.session;
    //checks if username is entered by the user
    if (session.username) {
        
        res.render('display', { title: 'Display Commment', username: session.username });
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }

};
