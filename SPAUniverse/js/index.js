import { Router } from './router.js'

const router_obj = new Router()

router_obj.add('/', '/pages/home.html')
router_obj.add('/home', '/pages/home.html')
router_obj.add('/universe', '/pages/universe.html')
router_obj.add('/explorer', '/pages/explorer.html')
router_obj.add(404, '/pages/404.html')

router_obj.handle()

window.onpopstate = () => router_obj.handle()
window.route = () => router_obj.route()

// // esta parte é para acertar os botes de voltar do browser

// Uma funcao que está dentro de uma classe é chamada de método
// Uma variável que está dentro de uma classe é chamada de atributo
