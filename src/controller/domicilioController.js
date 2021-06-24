const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const domicilioController = {
   

    // crear un domicilio
        create: (domicilio) => {
            return db.Domicilio.create({calle: domicilio.calle,numero: domicilio.numero,
            })
            .then((domicilio) => {
                console.log(">> Created domicilio: " + JSON.stringify(domicilio, null, 4));
                return domicilio;
              })
    
              .catch((err) => {
                console.log(">> Error while creating domicilio: ", err);
              });
    
        },
    
    // Buscar un domicilio por Id
        findDomicilioById : (domicilioId) => {
            return db.Domicilio.findByPk(domicilioId,
                 { include: ["personas"] })
    
              .then((domicilio) => {
                return domicilio;
              })
              .catch((err) => {
                console.log(">> Error while finding domicilio: ", err);
              });
          },
    
          findAll : () => {
            return db.Domicilio.findAll({
              include: ["personas"],
            }).then((domicilios) => {
              return domicilios;
            });
          }
    
    
        }
        
     
    
    module.exports = domicilioController;