/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
import { middleware } from './kernel.js';
const AuthController = () => import('#controllers/auth_controller');
const FormDataController = () => import('#controllers/form_data_controller')

// Default route
router.get('/', async () => {
  return {
    hello: 'world',
  };
});

// Grouped API routes with prefix 'api/v1'
router.group(() => {
  router.post('/signup', [AuthController, 'signup']);
  router.post('/login', [AuthController, 'login']);
  router.get('/me', [AuthController, 'me']).use(middleware.auth({ guards: ['api'] }));

  //formData
  router.post('/form', [FormDataController, 'store']);
}).prefix('api/v1');

