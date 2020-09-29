const db = require("../models");

module.exports = {
    createMessage: function (req, res) {
        console.log("Called createMessage controller");
        db.Messages
            .create(req.body)
            .then(dbMessage => res.json(dbMessage))
            .catch(err => res.status(422).json(err))
    },
    findAllMessages: function (req, res) {
        console.log("Called Find All Messages Controller");
        db.Messages
            .findAll({ order: [['createdAt', 'DESC']] })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteOneMessage: function (req, res) {
        console.log("Called deleteOneMessage controller");
        db.Messages
            .destroy({ where: { id: req.body.messageID } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};