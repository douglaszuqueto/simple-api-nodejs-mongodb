const Repository = require('../../../repositories/user');

module.exports = function (req, res) {

    Repository.all(function (data) {
        res.json(data);
    });

};
