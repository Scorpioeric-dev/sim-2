module.exports = {
  getAllHouses: async (req, res) => {
    const db = req.app.get("db");
    let houses = await db.get_all_houses();
    res.status(200).send(houses);
  },

  addToHouses: async (req, res) => {
    const { name, address, state, city, zip,img,rent_amount,mortgage } = req.body;
    const db = req.app.get("db");
    let houses = await db.add_houses([name, address, state, city, zip,img,rent_amount,mortgage]);
    res.status(200).send(houses);
  },


  deleteHouses: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_houses(id).then(result => {
      res.status(200).send(result);
    });
  }
};
