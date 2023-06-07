// GET index
exports.getMainPage = (req, res) => {
    res.render('index', {
        path: '/'
    });
};

// GET 404
exports.get404 = (req, res) => {
    res.status(404).render('404');
};