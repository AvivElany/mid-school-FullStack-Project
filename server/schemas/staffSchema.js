const Joi = require('joi')

const validationOptions = {
    stripUnknown:true,
    abortEarly:false,
}

const schemas = {
    createNewStaff:
        Joi.object().keys({
        name: Joi.object().keys({
            first: Joi.string().required(),
            middle: Joi.string().optional().default(""),
            last: Joi.string().required(),
        }),
        image: Joi.object().keys({
            url: Joi.string().uri().optional(),
            alt: Joi.string().optional().default("Profile image"),
        }),
        job: Joi.string().optional(),
        classroom: Joi.string().required(),
        isMale: Joi.boolean().required(),
        isPrincipal: Joi.boolean().required(),
        isTeacher: Joi.boolean().required(),
        isDeleted: Joi.boolean().required(),
        }).options(validationOptions),

    updateStaff:
        Joi.object().keys({
        name: Joi.object().keys({
            first: Joi.string().required(),
            middle: Joi.string().optional().default(""),
            last: Joi.string().required(),
        }),
        image: Joi.object().keys({
            url: Joi.string().uri().optional(),
            alt: Joi.string().optional().default("Profile image"),
        }),
        job: Joi.string().optional(),
        classroom: Joi.string().required(),
        isMale: Joi.boolean().required(),
        isPrincipal: Joi.boolean().required(),
        isTeacher: Joi.boolean().required(),
        isDeleted: Joi.boolean().required(),
        }).options(validationOptions).min(0).message("The request's body must include at-least one valid key"),
}

module.exports = schemas;