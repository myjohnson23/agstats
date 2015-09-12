/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AwardsSharePlayers', { 
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
      type: 'DOUBLE',
      allowNull: true,
    },
    pointsMax: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    votesFirst: {
      type: 'DOUBLE',
      allowNull: true,
    }
  });
};
