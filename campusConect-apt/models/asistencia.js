'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asistencia.belongsTo(models.Usuarios, {
        foreignKey: 'idUsuario',
        as: 'usuarios'
      });
      Asistencia.belongsTo(models.Eventos, {
        foreignKey: 'idEvento',
        as: 'eventos'
      })
    }
  }
  Asistencia.init({
    idEvento: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asistencia',
  });
  return Asistencia;
};