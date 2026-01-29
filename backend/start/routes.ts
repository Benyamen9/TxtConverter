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
const CommentsController = () => import('#controllers/comment_controller')
const SegmentsController = () => import('#controllers/segment_controller')
const BooksController = () => import('#controllers/books_controller')
const AuthController = () => import('#controllers/auth_controller')

// Auth routes
router.post('/login', [AuthController, 'login'])
router.post('/register', [AuthController, 'register'])

router
  .group(() => {
    // Books routes
    router.get('/books', [BooksController, 'index'])
    // Segments routes
    router.post('/segments', [SegmentsController, 'store'])
    router.put('/segments/:id', [SegmentsController, 'update'])
    router.delete('/segments/:id', [SegmentsController, 'delete'])
    // Comments routes
    router.put('/comments/:id', [CommentsController, 'update'])
    router.post('/comments', [CommentsController, 'store'])
    router.delete('/comments/:id', [CommentsController, 'delete'])
    // Export routes
    router.get('/export/:book/:chapter', [ExportsController, 'scripture'])
  })
  .use(middleware.auth({ guards: ['api'] }))
