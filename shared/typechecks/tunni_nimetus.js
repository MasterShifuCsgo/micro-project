import Joi from "joi";

const TypeCheckTunniNimetus = Joi.object({
  nimi: Joi.string().required().messages({
    'string.base': 'nimi peab olema string',
    'any.required': 'nimi peab olema JSON-is'
  }),
  kommentaar: Joi.string().required().messages({
    'string.base': 'kommentaar peab olema string',
    'any.required': 'kommentaar peab olema JSON-is'
  }),
  hinnang: Joi.number().required().messages({
    'number.base': 'hinnang peab olema number',
    'any.required': 'hinnang peab olema JSON-is'
  })
}).required().messages({ 
  'object.base': 'Valideeritud tüüp peab olema JSON või Objekt',
  'any.required': 'Tüübi valideerimiseks on vaja objekti või JSON-i'
});

export default TypeCheckTunniNimetus;