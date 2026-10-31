const Joi = require("joi");

const addVersion = Joi.object({
  name: Joi.string().required(),
  rtm: Joi.string().required(),
  ga: Joi.string().required(),
});

module.exports = {
  addVersion,
};
