import joi from 'joi';

const reqTrimString = joi.string().required().trim();

const joiTypes = {
  username: reqTrimString.min(3).max(40),
  email: joi.string().required().lowercase().max(128).email(),
  password: reqTrimString
    .min(6)
    .max(72)
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[#$!.%& *?])[A-Za-z\d#$!.%& *?]{6,72}$/),
};

const registerSchema = joi.object({
  username: joiTypes.username,
  email: joiTypes.email,
  password: joiTypes.password,
  repeatPassword: joi.valid(joi.ref('password')),
});

const loginSchema = joi.object({
  email: joiTypes.email,
  password: joiTypes.password,
});

export { registerSchema, loginSchema };
