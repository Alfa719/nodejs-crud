const {User} = require("../models");

class UserController {
    static index = async (req, res) => {
        await User.findAll().then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err.stack)
        });
    }

    static store = async (req, res) => {
        const { name, birthdate, gender, address, age } = req.body;
        await User.create({name, birthdate, gender, address, age}).then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err.stack);
        });
    }

    static show = async (req, res) => {
        const { id } = req.params;
        await User.findOne({where:{id}}).then((result) => {
            if (result == null) res.json("User not found")
            res.json(result);
        }).catch((err) => {
            res.json(err.stack);
        });
    }

    static update = async (req, res) => {
        const { id } = req.params;
        const { name, birthdate, gender, address, age } = req.body;
        await User.findOne({where:{id}}).then(async (result) => {
            if (result == null) res.json("User not found");

            await User.update({name, birthdate, gender, address, age}, {where:{id}}).then((result) => {
                res.json(req.body);
            }).catch((err) => {
                res.json(err.stack);
            });
        }).catch((err) => {
            res.json(err.stack);
        });
    }

    static destroy = async (req, res) => {
        const { id } = req.params;

        await User.destroy({where:{id}}).then((result) => {
            if (result == 0) res.json("User not found");

            res.json("Success delete User");
        }).catch((err) => {
            res.json(err.stack);
        });
    }
}

module.exports = UserController;