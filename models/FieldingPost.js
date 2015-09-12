/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FieldingPost', { 
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
      allowNull: true,
    },
    lgID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    round: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    POS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    G: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    GS: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    InnOuts: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    PO: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    A: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    E: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    DP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    TP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    PB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    CS: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
