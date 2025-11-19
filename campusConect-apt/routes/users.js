var router = require("express").Router()

const userCtrl = require("../controllers/users")

router.post('/new', userCtrl.createNewUser)
router.get('/list', userCtrl.getAllUsers)

module.exports = router;
