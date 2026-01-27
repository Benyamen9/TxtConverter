/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const EditorsController = () => import('#controllers/editors_controller')

router.get('/export/:book/:chapter', [EditorsController, 'psalm'])
