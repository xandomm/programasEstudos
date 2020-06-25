const express = require('express')

module.exports = function(server) {

    //definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
    
}