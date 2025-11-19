'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentarios.belongsTo(models.Usuarios, {
        foreignKey: 'idUser',
        as: 'usuarios'
      })
      Comentarios.belongsTo(models.Publicaciones, {
        foreignKey: 'idPublicacion',
        as: 'publicaciones'
      })
    }
  }
  Comentarios.init({
    idPublicacion: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  return Comentarios;
};