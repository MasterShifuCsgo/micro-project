import Joi from "joi";

const TypeCheckTunniNimetus = Joi.object({
  nimi: Joi.string().required(),
  kommentaar: Joi.string().required(),
  hinnang: Joi.number().required()
})
export default TypeCheckTunniNimetus;