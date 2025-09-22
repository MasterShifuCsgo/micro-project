import Joi from "joi";

export default TypeCheckTunni_nimetus = Joi.object({
  nimi: Joi.string().required(),
  kommentaar: Joi.string().required(),
  hinnang: Joi.number().required()
})