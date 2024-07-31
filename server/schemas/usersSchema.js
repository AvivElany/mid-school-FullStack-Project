const Joi = require('joi')

const validationOptions = {
  stripUnknown:true,
  abortEarly:false,
}

const schemas = {
  createNewUser:
    Joi.object().keys({
      name: Joi.object().keys({
        first: Joi.string().required(),
        middle: Joi.string().optional().default(""),
        last: Joi.string().required(),
      }),
      phone: Joi.string().pattern(/^05\d{1}([-]{0,1})\d{7}$/, { name: 'cellphone number'}).required(),
      email: Joi.string().email().required(),
      // password rules: at least one upper case letter, at least one lower case letter, at least one number, at least one special characted, at least 7 characters total
      password: Joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,}$/, { name: 'password'}).required(),
      image: Joi.object().keys({
        url: Joi.string().uri().optional(),
        alt: Joi.string().optional().default("Profile image"),
      }),
      job: Joi.string().optional(),
      classroom: Joi.string().required(),
      grades: Joi.object().keys({
        math: Joi.number().min(0).max(100).required(),
        english: Joi.number().min(0).max(100).required(),
        sciences: Joi.number().min(0).max(100).required(),
        history: Joi.number().min(0).max(100).required(),
        literature: Joi.number().min(0).max(100).required(),
        programming: Joi.number().min(0).max(100).required(),
        art: Joi.number().min(0).max(100).required(),
      }),
      address: Joi.object().keys({
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.number().required(),
      }),
      
      isMale: Joi.boolean().required(),
      isPrincipal: Joi.boolean().optional(),
      isTeacher: Joi.boolean().required(),
      isDeleted: Joi.boolean().required(),
    }).options(validationOptions),
  
  updateUser:
    Joi.object().keys({
      name: Joi.object().keys({
        first: Joi.string().optional(),
        middle: Joi.string().optional().default(" "),
        last: Joi.string().optional(),
      }),
      phone: Joi.string().pattern(/^05\d{1}([-]{0,1})\d{7}$/, { name: 'cellphone number'}).optional(),
      // password rules: at least one upper case letter, at least one lower case letter, at least one number, at least one special characted, at least 7 characters total
      password: Joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,}$/, { name: 'password'}).optional(),
      image: Joi.object().keys({
        url: Joi.string().optional(),
        alt: Joi.string().optional().default("Profile image"),
      }),
      job: Joi.string().optional(),
      classroom: Joi.string().optional(),
      grades: Joi.object().keys({
        math: Joi.number().min(0).max(100).optional(),
        english: Joi.number().min(0).max(100).optional(),
        sciences: Joi.number().min(0).max(100).optional(),
        history: Joi.number().min(0).max(100).optional(),
        literature: Joi.number().min(0).max(100).optional(),
        programming: Joi.number().min(0).max(100).optional(),
        art: Joi.number().min(0).max(100).optional(),
      }),
      address: Joi.object().keys({
        country: Joi.string().optional(),
        city: Joi.string().optional(),
        street: Joi.string().optional(),
        houseNumber: Joi.number().optional(),
      }),
      isDeleted: Joi.boolean().optional(),
      isMale: Joi.boolean().optional(),
      isPrincipal: Joi.boolean().optional(),
      isTeacher: Joi.boolean().optional(),
    }).options(validationOptions).min(0).message("The request's body must include at-least one valid key"),
  
  updateGrades:
    Joi.object().keys({
      grades: Joi.object().keys({
        math: Joi.number().min(0).max(100).optional(),
        english: Joi.number().min(0).max(100).optional(),
        sciences: Joi.number().min(0).max(100).optional(),
        history: Joi.number().min(0).max(100).optional(),
        literature: Joi.number().min(0).max(100).optional(),
        programming: Joi.number().min(0).max(100).optional(),
        art: Joi.number().min(0).max(100).optional(),
      }),
    }).options(validationOptions).min(1).message("The request's body must include at-least one valid key"),
  
  login:
    Joi.object().keys({
      email: Joi.string().email().required(),
      // password rules: at least one upper case letter, at least one lower case letter, at least one number, at least one special characted, at least 7 characters total
      password: Joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,}$/, { name: 'password'}).required(),
    }).options(validationOptions),
}

module.exports = schemas;