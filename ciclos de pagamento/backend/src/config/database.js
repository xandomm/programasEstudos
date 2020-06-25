const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/meudinheiro')

mongoose.Error.messages.general.required = "O atributo '{PATH}' E OBRIGATORIO"
mongoose.Error.messages.Number.min = "O '{VALUE} informado e menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE} informado e menor que o limite minimo de '{MAX}'."
mongoose.Error.messages.String.enumValue = "O '{VALUE} informado nao e valido para o atributo '{PATH}'."
