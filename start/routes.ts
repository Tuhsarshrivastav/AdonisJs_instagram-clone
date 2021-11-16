import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.on('/signup').render('signup')
Route.on('/login').render('login')
Route.on('/profile').render('auth/profile').middleware("auth")

// post requests
Route.post('/signup', 'AuthController.signup')
Route.post('/login', 'AuthController.login')