/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Schools', { 
    schoolID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_full: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
