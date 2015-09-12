/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Master', {
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    birthYear: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    birthMonth: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    birthDay: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    birthCountry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthState: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deathYear: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deathMonth: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deathDay: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deathCountry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deathState: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deathCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nameFirst: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nameLast: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nameGiven: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    height: {
      type: 'DOUBLE',
      allowNull: true,
    },
    bats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    throws: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    debut: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    finalGame: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    retroID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bbrefID: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: false,
    paranoid: true,
    freezeTableName: true
  },
  {
    associate: function(models) {
    Master.hasMany(models.Batting, {foreignKey: {fieldName: 'playerID'}});
    }
  }
);
};
