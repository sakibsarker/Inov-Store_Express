const express = require('express');
const router = express.Router();

const {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getAllUsers,
    getUsersById,
    deleteUsers,
    updateUsers
} = require('../controller/UserController');

router.route('/').post(registerUser).get(getAllUsers);
router.post('/logout',logoutUser);
router.post('/login',authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);



module.exports = router;