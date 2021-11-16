import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.on('/singup').render('singup')
Route.on('/login').render('login')
