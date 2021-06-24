'use strict';
const {
  Model, BelongsTo
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Domicilio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Domicilio.hasOne(models.Persona, {
        foreignKey: 'domicilioId',
        as: 'personas'
      })
    }
  };
  Domicilio.init({
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Domicilio',
  });
  return Domicilio;
};