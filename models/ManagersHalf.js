/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ManagersHalf', { 
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    yearID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    teamID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lgID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inseason: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    half: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
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
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
