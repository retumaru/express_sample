//トップページ
exports.index = (req, res) => {
    //ユーザのセッションを取得
    const user = req.session.authUser

    //ログインユーザがいれば
    if (user) {
        // views/user/index.ejs を表示
        res.render('user/index')
    } else {
        //ログインユーザがいなければ、ログインページにリダイレクト
        res.redirect('/login')
    }
}
//トップページ
exports.logout = (req, res) => {
    //ユーザのセッションを取得
    dalete (req.session.authUser)

    //ログインユーザがいれば

    // views/user/index.ejs を表示
    res.render('/login')
}