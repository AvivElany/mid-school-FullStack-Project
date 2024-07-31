const Joi = require('joi');

const validationOptions = {
  stripUnknown:true,
  abortEarly:false,
}

const schemas = {
  createNewNews:
    Joi.object().keys({
      title: Joi.string().required(),
      subtitle: Joi.string().required(),
      content: Joi.string().required(),
      web: Joi.string().uri().required(),
      date: Joi.string().required(),
      image: Joi.object().keys({
        url: Joi.string().optional(),
        alt: Joi.string().optional(),
      }),
      isDeleted: Joi.boolean().optional().default(false),
    }).options(validationOptions),
  
  updateNews:
    Joi.object().keys({
      title: Joi.string().optional(),
      subtitle: Joi.string().optional(),
      content: Joi.string().optional(),
      web: Joi.string().uri().optional(),
      date: Joi.string().optional(),
      image: Joi.object().keys({
        url: Joi.string().optional(),
        alt: Joi.string().optional(),
      }),
      isDeleted: Joi.boolean().optional(),
    }).options(validationOptions),
  
  isDeleted:
    Joi.object().keys({
        isDeleted: Joi.boolean().optional(),
    }).options(validationOptions),
}

module.exports = schemas;