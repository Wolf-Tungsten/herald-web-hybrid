window.goto = path => {
    console.log(path)
    window.router.push(path)
  }
  
window.androidMessage = message => {
    console.log(message)
}
  
window.injectToken = token => {
    window.heraldToken = token;
}