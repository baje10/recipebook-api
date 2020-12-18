const express = require('express');
const router = express.Router();

const {create,
        recipeById,
        read,
        remove,update,
        list,
        listRelated,
        listCategories,
        listBySearch,
        photo,
        listSearch
      } = require('../controllers/recipe');
const { requireSignin, isAuth, isAdmin } = require('../requirements/requirements');
const { userById } = require('../controllers/user');

router.post('/create/:userId', requireSignin,isAuth,isAdmin,create);

router.get('/get/:recipeId', read)

router.delete(
    "/delete/:recipeId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

router.put(
    "/update/:recipeId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.get('/', list)
router.get("/search", listSearch);
router.get('/related/:recipeId',listRelated)
router.get('/categories',listCategories)
router.post("/by/search", listBySearch);
router.get("/photo/:recipeId", photo);

router.param('userId', userById);
router.param('recipeId', recipeById);

module.exports = router;
