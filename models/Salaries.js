/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Salaries', { 
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
      allowNull: false,
      defaultValue: ''
    },
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    salary: {
      type: 'DOUBLE',
      allowNull: true,
    }
  });
};
