// 21.User Input Validation With JOI Validating Nested Object and Arrays(part-2)

const Joi = require('joi');

const arrayString = ['banaan', 'bacon', 'cheese'];
const arrayobjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

const userInput = {
    personalInfo: {
        streetAddress: '123987987',
        city: 'Nirobi',
        state: 'kn'
    },
    preferences: arrayString
};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
}); 

const preferencesSchema = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});


Joi.validate(userInput, schema, (err, result) => {
    if(err)
        console.log(err);
    else
        console.log(result);
});

// ------------------------------------------------------------------------

const arrayString = ['banaan', 'bacon', 'cheese'];
const arrayobjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

const userInput = {
    personalInfo: {
        streetAddress: '123987987',
        city: 'Nirobi',
        state: 'kn'
    },
    preferences: arrayobjects
};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
}); 

const preferencesSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});


Joi.validate(userInput, schema, (err, result) => {
    if(err)
        console.log(err);
    else
        console.log(result);
});

// TypeError: Joi.validate is not a function (getting error concentrate while referring)