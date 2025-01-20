 -------------------------Apps---------------------------------
 |         |             |         |            |              |
 Routes   Utils                  Views
 |    |
 web  admin


// Utils contains useful features 



 /// it is important to export the modules so the We can  make accessible to apps.js
 module.exports = router ;

 // router can be used in multiples routes files

 Apps for now the root directory of the Project

The admin contains the routes  related to Pages 
examples 
 *  add-product is a pages related to Admin so the routes to it middleware is in admin 

in admin : 
     borderparser is used to get the data entered by the Client 
     // router.use(bodyParser.urlencoded({extended:false})); 
     instead of use we use router.post // to apply for only post request

app.use('/admin',adminroutes) ; permet de filter les requetes 
si une requetes ne commence pas par admin elle nest pas process par admin.js