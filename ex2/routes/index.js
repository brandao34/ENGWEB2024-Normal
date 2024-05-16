var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos');

/* GET home page. */
router.get('/', function (req, res) {
    Contrato.list()
        .then(registros => {
            const data = registros.map(registro => {
                return {
                    idcontrato: registro.idcontrato,
                    objectoContrato: registro.objectoContrato,
                    dataCelebracaoContrato: registro.dataCelebracaoContrato,
                    precoContratual: registro.precoContratual,
                    NIPC_entidade_comunicante: registro.NIPC_entidade_comunicante,
                    entidade_comunicante: registro.entidade_comunicante
                };
            });
            res.render('index', { header: "Metainformação", data: data });
        })
        .catch(erro => res.status(500).send("Erro ao processar a solicitação."));
});

module.exports = router;


router.get('/:id', function (req, res) {
  const id = req.params.id;

  // Buscar registro pelo ID
  Contrato.findById(id)
      .then(registro => {
          if (!registro) {
              return res.status(404).send("Registro não encontrado");
          }
          res.render('iddetalhes', { registro: registro });
      })
      .catch(erro => res.status(500).send("Erro ao processar a solicitação."));
});


