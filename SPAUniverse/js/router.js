// Definindo uma classe
export class Router {
  // Nao precisava iniciar ele aqui, mas fica mais claro, nao é necessario colocar let, const nada
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    // para acessar o handle dentro do proprio objeto quando for instanciado, tem que usar o this
    this.handle()
  }

  handle() {
    const { pathname } = window.location

    const route = this.routes[pathname] || this.routes[404]
    console.log(route)
    var path = window.location.pathname
    var page = path.split('/').pop()
    document.querySelector('body').classList.add(String(page))

    fetch(route)
      .then(data => data.text())
      .then(html => {
        const app = document.querySelector('#app')
        app.innerHTML = html

        // a ideia aqui é adcionar uma classe diferente no css para mudar as configs
        // app.classList.add(String(this.routeName))
      })
  }
}
