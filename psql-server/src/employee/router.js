const { Router } = require("express");
const controller = require('./controller');

const router = Router();

// ----- User related apis ---------
router.get("/user/all", controller.getAllUser)
router.get("/user/manager",controller.getAllManagerDetail);
router.get("/user/:id", controller.getEmployeeById)


// ------ task related apis ----------
router.get("/task/all", controller.getAllTask);
router.get("/task/category", controller.getAllCategory);
router.get("/status/:taskId", controller.getAllStatusByTask);

router.post("/status/add", controller.addNewStatusInTask);
router.post('/task/category/update', controller.updateCategoryOfTask);
router.post("/task/new", controller.createNewTask);
module.exports = router