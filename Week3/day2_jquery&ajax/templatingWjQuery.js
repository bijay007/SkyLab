<body>
  <ul>
    <li>Carles</li>
    <li>Jonas</li>
    <li>Bijay</li>
    <li>Josep</li>
  </ul>
  <button>Click me</button>

  <div class="container-cards">
  <!-- we want to insert 100 sections inside here with each having h3 (for name) and p (for descrip)-->
  </div>

  <script src="https://code.jquery.com/jquery-2.0.3.min.js"></script>
  <!-- Latest compiled and minified JS -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
  <script>

    // var aStudents = ['Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']
    var aStudents = [{
      name: 'Xavier',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quaerat.'
    },
    {
      name: 'Ignasi',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam.'
    }
    // and 98 more of these
    ];

    var templateCard = '' +   // we save a template of what the final generated HTML will look like
      '<section class="col-md-4 col-sm-6">' +
        '<h2><%NAME%></h2>' +
        '<p><%DESC%></p>' +
      '</section>'

    var htmlCardsStudents = ""; // we save all 100 generated sections in this empty string

    $.each(aStudents, function(index, elem) { // here we iterate over the array of objects, edit the template for every object and copy the newly modified template into the empty string
      var cardStudent = templateCard;
      cardStudent = cardStudent.replace("<%NAME%>", elem.name);
      cardStudent = cardStudent.replace("<%DESC%>", elem.desc);
      htmlCardsStudents += cardStudent // here we don't append modified string directly to the div we wanted beacuse doing that opeartion requires painting the DOM 100 times unlike if we append just the htmlCardsStudents string
    })

    $(".container-cards").html( htmlCardsStudents ) // ** here we copy the string containing 100 sections into the div we wanted

  </script>

</body>