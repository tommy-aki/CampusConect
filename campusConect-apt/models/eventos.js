'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Eventos.belongsTo(models.Usuarios, {
        foreignKey: 'idUser',
        as: 'usuarios'
      })
      Eventos.hasMany(models.Asistencia, {
        foreignKey: 'idEvento',
        as: 'asistencia'
      })
    }
  }
  Eventos.init({
    idUser: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    lugar: DataTypes.STRING,
    tipoevento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Eventos',
  });
  return Eventos;
};