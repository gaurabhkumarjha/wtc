const client = require("../modules/modules");


exports.addclientdata = async (req, res) => {

    const clientdata = client(req.body);
    try {

        const saveelientdata = clientdata.save();
        res.status(200);
        res.status(200).json(saveelientdata);

    } catch (err) {
        res.status(500).json("server error");
    }
}

exports.getclientdetails = async (req, res) => {
    try {
        const getclientdetails = await client.find();
        res.status(200);
        res.status(200).json(getclientdetails);

    } catch (err) {
        res.status(500).json("server error");
    }
}

exports.clientdelete = async (req, res) => { // delete

    const { id } = req.params;
    console.log(id);
    try {
  
      const userdelete = await client.findByIdAndDelete({ _id: id });
      res.status(201).json(userdelete);
    } catch (err) {
      res.status(500).json(err);
    }
  }