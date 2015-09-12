/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AwardsShareManagers', { 
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
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    pointsWon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    pointsMax: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    votesFirst: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
