const mongoose = require("mongoose");
const Schema = mongoose.Schema;
module.exports = function(sequelize, DataTypes) {
    const Favorite = sequelize.define("Favorite", {
      title: {
      type: DataTypes.STRING,
      allowNull: false
  
      },
      location: {
        type: DataTypes.STRING,
         allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      companyUrl: {
        type: DataTypes.STRING,
         allowNull: false
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apply: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created: {
        type: DataTypes.STRING,
        allowNull: false
      },

      company: {
        type: DataTypes.STRING,
        allowNull: false
      },
     
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
 
    return Favorite;
  };