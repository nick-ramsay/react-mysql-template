module.exports = function (sequelize, DataTypes) {

  var TestMessages = sequelize.define("TestMessages", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return TestMessages;
};
