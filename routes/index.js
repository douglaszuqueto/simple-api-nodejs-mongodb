module.exports = (app) => {

    /**
     * Index
     */
    app.get('/', (req, res) => res.json('ok'));

    /**
     * User
     */
    app.use('/users', require('./user/user'));

};
