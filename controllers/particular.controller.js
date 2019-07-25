
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/database.config");

const Particular = require("../models/particular.model");
const Atelier = require('../models/atelier.model');


exports.inscrire = (req, res) => {
  Particular.find()
    .then(particular => {
      //autoincrement
      let idautom;
      if (particular.length == 0) {
        idautom = 0
      } else {
        idautom = parseInt(particular[particular.length - 1]._id) + 1
      }

      Particular.findOne({ email: req.body.email }).then(particular => {
        if (particular) {
          return res.status(400).json({ email: "Email already exists" });
        } else {
          const newParticular = new Particular({
            _id: idautom,
            name: req.body.name,
            firstname: req.body.firstname,
            email: req.body.email,
            phone: req.body.phone,

          });
          
          
          newParticular
            .save()
            .then(particular => res.json(particular))
            .catch(err => console.log(err));

        }
      });
    })
};




