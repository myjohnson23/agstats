/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AllstarFull', { 
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
    gameNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    gameID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lgID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    GP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    startingPos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
