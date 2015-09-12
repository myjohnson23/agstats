/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HallOfFame', { 
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    yearid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    votedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ballots: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    needed: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    votes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    inducted: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    needed_note: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
