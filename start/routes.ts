import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.on('/signup').render('signup')
Route.on('/login').render('login')
Route.post('/signup', 'SignUpController.index')