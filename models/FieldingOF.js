/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FieldingOF', { 
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
    stint: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Glf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Gcf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Grf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
