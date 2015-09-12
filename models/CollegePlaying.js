/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CollegePlaying', { 
    playerID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    schoolID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yearID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
