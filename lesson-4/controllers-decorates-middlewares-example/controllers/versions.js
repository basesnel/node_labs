const Joi = require("joi");

const versions = require("../models/versions");

const { HttpError } = require("../helpers");

const addVersion = Joi.object({
  name: Joi.string().required(),
  rtm: Joi.string().required(),
  ga: Joi.string().required(),
});

const getAll = async (req, res, next) => {
  try {
    const result = await versions.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await versions.getById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { error } = addVersion.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await versions.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { error } = addVersion.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await versions.updateById(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await versions.deleteById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(204).json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
