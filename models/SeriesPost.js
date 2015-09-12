/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SeriesPost', { 
    yearID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    round: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    teamIDwinner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lgIDwinner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamIDloser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lgIDloser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wins: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    losses: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ties: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
