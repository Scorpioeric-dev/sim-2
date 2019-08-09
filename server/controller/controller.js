module.exports = {
  
    addToHouses: async (req, res) => {
    const { name, address, state, city, zipcode } = req.body;
    const db = req.app.get("db");
    let houses = await db.add_houses([name, address, state, city, zipcode]);
    res.status(200).send(houses);
  },
  
  deleteHouses: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    let houses = await db.delete_houses([id]);
    res.status(200).send(houses);
  },
};
