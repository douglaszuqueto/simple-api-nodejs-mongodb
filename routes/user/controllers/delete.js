const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.remove(id, function (data) {
        res.json(data);
    });

};

