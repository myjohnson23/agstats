/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fielding', {
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    yearID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    stint: {
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
    PB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    WP: {
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
    },
    ZR: {
      type: 'DOUBLE',
      allowNull: true,
    }
  },
  {
    timestamps: false,
    paranoid: true,
    freezeTableName: true
  });
};
