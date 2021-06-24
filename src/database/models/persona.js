'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Persona.belongsTo(models.Domicilio)
    }
  };
  Persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    domicilioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};