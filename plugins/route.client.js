export default ({ $nuxt, app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    if (process.client) {
      window.$nuxt.$emit('showNav', false)
    }
  })
}
