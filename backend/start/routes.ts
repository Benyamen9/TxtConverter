/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const ExportsController = () => import('#controllers/exports_controller')
const AuthController = () => import('#controllers/auth_controller')

router.post('/login', [AuthController, 'login'])

router
  .group(() => {
    router.get('/export/:book/:chapter', [ExportsController, 'scripture'])
  })
  .use(middleware.auth({ guards: ['api'] }))
