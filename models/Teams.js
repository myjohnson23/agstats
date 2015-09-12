/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Teams', {
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
    franchID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    divID: {
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
    Ghome: {
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
    DivWin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    WCWin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LgWin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    WSWin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    R: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    AB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    H: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    DOUBLE: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    TRIPLE: {
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
    SB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    CS: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    HBP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SF: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    RA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ER: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ERA: {
      type: 'DOUBLE',
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
    HA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    HRA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    BBA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SOA: {
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
    FP: {
      type: 'DOUBLE',
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    park: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attendance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    BPF: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    PPF: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    teamIDBR: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamIDlahman45: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamIDretro: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
