const User = require('../model/user.model');

exports.create = (req, res) => {

  const user = new User({
    email: req.body.email,
    name: req.body.name,
    cpf: req.body.cpf,
    address: req.body.address
  });

  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user"
      });
    }
    else {
      res.send(data);
    }
  })
};

exports.findUsers = (req, res) => {
  if (req.query.name) {
    User.getByName(req.query.name, (err, data) => {
      if (err) {
        if (err.kind === "not found") {
          res.status(404).send({
            message: `Not found user with name ${req.query.name}`
          });
        } else {
          res.status(500).send({
            message: `Error retrieving users with name ${req.query.name}`
          });
        }
      } else {
        res.send(data);
      }
    });
  } else {
    User.getAll((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users"
        });
      }
      else {
        res.send(data);
      }
    });
  }
};

exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.id}`
        });
      } else {
        res.status(500).send({
          message: `Error retrieving user with id ${req.params.id}`
        });
      }
    } else {
      res.send(data);
    }
  })
}

exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.id}`
        });
      } else {
        res.status(500).send({
          message: `Error deleting user with id: ${req.params.id}`
        });
      }
    } else {
      res.send({ message: 'User was successfully deleted!' });
    }
  })
}

exports.update = (req, res) => {
  console.log("AAAAAAAAAAAAAAAAAAA", req.body);
  User.updateById(req.params.id, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(400).send({
          message: `Not found user with id ${req.params.id}`
        });
      } else {
        res.status(500).send({
          message: `Error updating user with id: ${req.params.id}`
        });
      }
    } else {
      res.send(data);
    }
  });
};