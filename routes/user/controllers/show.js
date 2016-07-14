const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.get(id, function (data) {
        res.json(data);
    });

};
