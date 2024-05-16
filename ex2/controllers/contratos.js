const mongoose = require('mongoose');
const Contrato = require("../models/contratos");

module.exports.list = () => {
    return Contrato
        .find()
        .sort({ dataPublicacao: 1 })
        .exec();
}

module.exports.findById = id => {
    return Contrato
        .findOne({ idcontrato: id })
        .exec();
}

module.exports.listByEntidade = entidade => {
    return Contrato
        .find({ entidade_comunicante: entidade })
        .exec();
}

module.exports.listEntidades = () => {
    return Contrato
        .distinct('entidade_comunicante')
        .collation({ locale: "pt", strength: 2 }) 
        .exec();
}

module.exports.listByTipoProcedimento = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}

module.exports.listTiposProcedimento = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .collation({ locale: "pt", strength: 2 }) 
        .exec();
}


module.exports.insert = contrato => {
    var newContrato = new Contrato(contrato);
    return newContrato.save();
}

module.exports.update = (id, contrato) => {
    return Contrato
        .findByIdAndUpdate(id, contrato, { new: true })
        .exec();
}

module.exports.remove = id => {
    return Contrato
        .findOneAndDelete({ idcontrato: id })
        .exec();
}
