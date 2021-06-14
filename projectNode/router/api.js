const router=require('express').Router();
const UserController=require('../controllers/user.controller')

router.post('/register',UserController.newUser)
router.get('/getAll',UserController.getAllUser)

module.exports=router