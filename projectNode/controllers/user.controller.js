const User = require('../models/user.model');

const newUser = async (req, res) => {
    console.log("------new user-------");
    try {
        let user = new User(req.body);
        await user.save();
        res.status(200).json({user});
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllUser = async (req, res) => {
    console.log("------get all user-------");
    try {
        let users = await User.find();
        
        res.status(200).json({users});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports={newUser,getAllUser}

