/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TeamsHalf', { 
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
    teamID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Half: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    divID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DivWin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Rank: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    W: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    L: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
