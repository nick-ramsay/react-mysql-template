module.exports = function (sequelize, DataTypes) {

  var Message = sequelize.define("Messages", {
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Message;
};
