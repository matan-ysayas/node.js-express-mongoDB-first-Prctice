 
const employees = require("../Models/employee-model");
const getAll = async (req, res) => {
  await employees
    .find()
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ msg: err }));
};

const getById = async (req, res) => {
  await employees
    .findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ msg: err }));
};

const Add = async (req, res) => {
  await employees
    .create(req.body)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ msg: err }));
};

const update = async (req, res) => {
  await employees
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ msg: err }));
};
const deleteOffice =async (req, res) => {
  await employees
    .findByIdAndDelete(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ msg: err }));
};
module.exports = { getAll, getById, Add, update, deleteOffice };
