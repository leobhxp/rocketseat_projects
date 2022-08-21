export class GithubUser {
  static searchUser(username) {
    const endpoint = `https://api.github.com/users/${username}`

    // Tenta acessar o endpoint, depois converte pra json, depois pega somente o dado de login name etc
    return fetch(endpoint)
      .then(data => data.json())
      .then(data => ({
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers
      }))
  }
}
