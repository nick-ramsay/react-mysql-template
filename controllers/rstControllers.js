const db = require("../models");

module.exports = {

    createMessage: function (req, res) {
        console.log("Called createMessage controller");
        console.log(req.body);
        db.Messages.create(req.body).then(function (dbMessage) {
            res.json(dbMessage);
        });

    },
    findAllMessages: function (req, res) {
        console.log("Called Find All Messages Controller");
        db.Messages
            .findAll({ order: [['createdAt', 'DESC']] })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    deleteOneMessage: function (req, res) {
        console.log(req.body);
        db.Messages
            .destroy({ where: { id: req.body.messageID } })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    }
};