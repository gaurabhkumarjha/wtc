const express= require("express");
const router= new express.Router();
const controller= require("../controller/controller");

router.post("/addclientdata", controller.addclientdata);
router.get("/getclientdetails", controller.getclientdetails);
router.delete("/deleteclientdata/:id", controller.clientdelete);

module.exports= router;