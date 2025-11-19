var router = require("express").Router()

const userCtrl = require("../controllers/users")

router.post('/new', userCtrl.createNewUser)

module.exports = router;
