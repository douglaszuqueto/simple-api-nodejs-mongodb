const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    Repository.create(req.body, function (data) {
        res.json(data);
    });

};
