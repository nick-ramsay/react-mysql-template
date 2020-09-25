const router = require("express").Router();
const rstControllers = require("../../controllers/rstControllers");

router
  .route("/create-message")
  .post(rstControllers.createMessage);
/*
router
  .route("/find-all-messages")
  .post(rstControllers.findAllMessages);

router
  .route("/delete-one-message")
  .post(rstControllers.deleteOneMessage);
  
  */

module.exports = router;
