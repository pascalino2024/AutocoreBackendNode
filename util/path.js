const path =  require('path')
// dirname return the Directory name of a path !
// So what we are trying to do here is to define the default path so that 
// there will not be any confusion about the current path wchich in this case is app.js
// so instead of Moving from for example routes to views , we  come back to apps.js and we go the views
module.exports =  path.dirname(process.mainModule.filename) ;