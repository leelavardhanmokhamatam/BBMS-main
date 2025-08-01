const Contact = require("../Models/Contact");
class ContectController {
    add = async (req, res) => {

        const newContact = await Contact.create(req.body);

        res.json({ "status": true, message: 'Success' });
    }

}

module.exports = ContectController;