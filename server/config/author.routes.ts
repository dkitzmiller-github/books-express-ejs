const authorController = require('../controllers/index').authorController;
const router = require('express').Router();

// router.get('/', function(request, response, next) {
//     response.render('pages/main', {});
// });

router.get('/', authorController.index);
router.get('/new', authorController.new);
router.post('/', authorController.create);
router.get('/:id', authorController.show);
router.get('/:id/edit', authorController.edit);
router.post('/:id/update', authorController.create);
router.post('/:id/delete', authorController.destroy);

module.exports = router;