'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dposts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dposts.init({
    darea: DataTypes.STRING,
    dbuildingsqft: DataTypes.INTEGER,
    dlandacerage: DataTypes.INTEGER,
    dcatagory: DataTypes.STRING,
    dnotes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dposts',
  });
  return Dposts;
};