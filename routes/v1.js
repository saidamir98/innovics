const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userRoleController = require('../controllers/userRole');
router.post(
  '/user-roles',
  auth,
  userRoleController.validate('postUserRole'),
  userRoleController.create
);
router.get('/user-roles', auth, userRoleController.list);
router.get('/user-roles/:id', auth, userRoleController.getById);
router.put(
  '/user-roles/:id',
  auth,
  userRoleController.validate('postUserRole'),
  userRoleController.update
);
router.delete('/user-roles/:id', auth, userRoleController.delete);

const userController = require('../controllers/user');
router.post('/register', userController.validate('registerUser'), userController.register);
router.get('/me', auth, userController.me);
router.post('/login', userController.validate('loginUser'), userController.login);
// router.get('users/:id', userController.getById);
// router.get('users/', userController.list);
// router.put('users/:id', userController.update);
// router.delete('users/:id', userController.delete);

const categoryController = require('../controllers/category');
router.post(
  '/categories',
  auth,
  categoryController.validate('postCategory'),
  categoryController.create
);
router.get('/categories', auth, categoryController.list);
router.get('/categories/:id', auth, categoryController.getById);
router.put(
  '/categories/:id',
  auth,
  categoryController.validate('postCategory'),
  categoryController.update
);
router.delete('/categories/:id', auth, categoryController.delete);

const startupController = require('../controllers/startup');
router.post('/startups', auth, startupController.validate('postStartup'), startupController.create);
router.get('/startups', auth, startupController.list);
router.get('/startups/:id', auth, startupController.getById);
router.put(
  '/startups/:id',
  auth,
  startupController.validate('postStartup'),
  startupController.update
);
router.delete('/startups/:id', auth, startupController.delete);

module.exports = router;
