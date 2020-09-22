module.exports = function (sequelize, DataTypes) {

  var Message = sequelize.define("Messages", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Message;
};
