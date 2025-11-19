'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuarios.hasMany(models.Comentarios, {
        foreignKey: 'idUser',
        as: 'comentarios'
      });
      Usuarios.hasMany(models.Publicaciones, {
        foreignKey: 'idUser',
        as: 'publicaciones'
      })
      Usuarios.hasMany(models.Eventos, {
        foreignKey: 'idUser',
        as: 'eventos'
      })
      Usuarios.hasMany(models.Asistencia, {
        foreignKey: 'idUsuario',
        as: 'asistencia'
      })
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    carrera: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};