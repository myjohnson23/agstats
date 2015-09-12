/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pitching', {
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
    W: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    L: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    G: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    GS: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    CG: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SHO: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SV: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    IPouts: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    H: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ER: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    HR: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    BB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SO: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    BAOpp: {
      type: 'DOUBLE',
      allowNull: true,
    },
    ERA: {
      type: 'DOUBLE',
      allowNull: true,
    },
    IBB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    WP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    HBP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    BK: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    BFP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    GF: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    R: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SH: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SF: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    GIDP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  },
  {
    timestamps: false,
    paranoid: true,
    freezeTableName: true
  });
};
