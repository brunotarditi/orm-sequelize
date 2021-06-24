
const db = require('../database/models');
const sequelize = db.sequelize;


const personaController = {
   

// crear una persona
create: (id, persona) => {
  return db.Persona.create({
    nombre: persona.nombre,
    apellido: persona.apellido,
    dni: persona.dni,
    domicilioId: id,
  })
    .then((persona) => {
      console.log(">> Created persona: " + JSON.stringify(persona, null, 4));
      return persona;
    })
    .catch((err) => {
      console.log(">> Error while creating persona: ", err);
    });
},

// Buscar una persona por Id
findPersonaById : (id) => {
  return db.Persona.findByPk(id, { include: ["Domicilio"] })
    .then((persona) => {
      return persona;
    })
    .catch((err) => {
      console.log(">> Error while finding persona: ", err);
    });
},

      findAll : () => {
        return db.Persona.findAll({
          include: ["personas"],
        }).then((domicilios) => {
          return domicilios;
        });
      }


    }
    
 

module.exports = personaController