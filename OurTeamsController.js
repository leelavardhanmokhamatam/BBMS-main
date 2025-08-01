const Team = require("../Models/teams");
class OurTeamsController {
    getTeam = async (req, res) => {
        const teamData = await Team.findAll();
        const finalData = teamData.map((ele) => {
            return {
                "id": ele.id,
                "name": ele.name,
                "image": "http://localhost:5000/images/teams/" + ele.image,

            }
        })
        res.json({ status: true, message: 'Success', data: finalData })
    }


}

module.exports = OurTeamsController;