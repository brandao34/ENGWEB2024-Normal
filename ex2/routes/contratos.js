var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos');

/* Listar os Contratos (R) */
router.get('/', function (req, res) {
    const entidade = req.query.entidade;
    const tipo = req.query.tipo;

    if (entidade) {
        Contrato.listByEntidade(entidade)
            .then(registros => res.jsonp(registros))
            .catch(erro => res.jsonp(erro));
    } else if (tipo) {
        Contrato.listByTipoProcedimento(tipo)
            .then(registros => res.jsonp(registros))
            .catch(erro => res.jsonp(erro));
    } else {
        Contrato.list()
            .then(registros => res.jsonp(registros))
            .catch(erro => res.jsonp(erro));
    }
});


/* Listar as Entidades Comunicantes (R) */
router.get('/entidades', function (req, res) {
    Contrato.listEntidades()
        .then(entidades => res.jsonp(entidades))
        .catch(erro => res.jsonp(erro));
});

/* Listar os Tipos de Procedimento (R) */
router.get('/tipos', function (req, res) {
    Contrato.listTiposProcedimento()
        .then(tipos => res.jsonp(tipos))
        .catch(erro => res.jsonp(erro));
});



/* Consultar um Contrato por ID (R) */
router.get('/:id', function (req, res) {
    Contrato.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro));
});

/* Criar um Contrato (C) */
router.post('/', function (req, res) {
    Contrato.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(erro => res.jsonp(erro));
});

/* Atualizar um Contrato (U) */
router.put('/:id', function (req, res) {
    Contrato.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro));
});

/* Remover um Contrato (D) */
router.delete('/:id', function (req, res) {
    Contrato.remove(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro));
});

module.exports = router;
