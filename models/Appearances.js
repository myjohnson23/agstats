/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Appearances', { 
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
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    G_all: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    GS: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_batting: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_defense: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_p: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_c: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_1b: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_2b: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_3b: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_ss: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_lf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_cf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_rf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_of: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_dh: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_ph: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G_pr: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
