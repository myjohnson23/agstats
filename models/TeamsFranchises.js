/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TeamsFranchises', { 
    franchID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    franchName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NAassoc: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
