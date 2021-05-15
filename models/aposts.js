'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aposts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aposts.init({
    aarea: DataTypes.STRING,
    abuildingsqft: DataTypes.INTEGER,
    alandacerage: DataTypes.INTEGER,
    acatagory: DataTypes.STRING,
    anotes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aposts',
  });
  return Aposts;
};