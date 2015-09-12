/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AwardsManagers', { 
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    awardID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    yearID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    lgID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
