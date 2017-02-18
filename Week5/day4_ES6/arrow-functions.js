(function() {

  function sum(a,b) {
    return a+b
  }

  var sum = function(a,b) {
    return a+b
  }

  var sum = (a,b) => a+b

  [1,2,4,5,2,5,2,5,2,5,2,5,6,7,2]
    .map( x => x*2 )
    .filter( x => x>10 )
    .filter( (x,i) => i%2 !== 0 )
    .reduce( (acc, item) => acc+item, 0 )

  [1,2,4,5,2,5,2,5,2,5,2,5,6,7,2]
    .map( x => x*2 )
    .filter( x => x>10 )
    .filter( (x,i) => i%2 !== 0 )
    .reduce( (acc, item) => acc+item, 0 )


  $("button").on('click', (e) => {
    e.preventDefault()
    console.log('button clicked')
  })


  (arg1, arg2, ...) => expr
  (arg1, arg2, ...) => { stmt1; stmt2; return expr; }
  singleArg => expr
  singleArg => { stmt1; stmt2; return expr; }


  var self = this;
  this.element.addEventListener('click', function(event) {
    console.log ( this )
    self.registerClick(event.target.id);
  });

})()
