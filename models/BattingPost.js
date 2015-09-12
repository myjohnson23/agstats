/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BattingPost', {
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
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    teamID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lgID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    G: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    AB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    R: {
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
    RBI: {
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
    BB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    SO: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    IBB: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    HBP: {
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
  });
};
