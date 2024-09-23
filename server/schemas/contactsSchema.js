const Joi = require('joi');

const validationOptions = {
    stripUnknown:true,
    abortEarly:false,
}

const schemas = {
    createNewMessage:
        Joi.object().keys({
        sender: Joi.string().required(),
        message: Joi.string().required(),
        id: Joi.string().optional(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^05\d{1}([-]{0,1})\d{7}$/, { name: 'cellphone number'}).optional(),
        isDeleted: Joi.boolean().optional(),
    }).options(validationOptions),

    updateMessage:
    Joi.object().keys({
        isDeleted: Joi.boolean().optional(),
    }).options(validationOptions),
}

module.exports = schemas;