const router = require('app').getRouter()
const controller = require('./todo-controller')

/* GET response */
router.get('/', controller.getList)

/* POST response */
router.post('/', controller.createTodo)

module.exports = router