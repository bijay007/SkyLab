module.exports = function(users) {

  users.on("userAdded", function( msg ) {
    console.log( new Date() )
    console.log( "DATA => " + msg )
    console.log( "LIST => " + users.listAll() )
  } )

}