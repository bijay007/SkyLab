angular.module('filterApp', [])
  .controller('mainController', function ($scope) {
    var allStudents = [
      {
        'name': 'Stívali Serna',
        'mail': 'stivaliserna08@gmail.com',
        'github': 'https://github.com/stivaliserna'
      }, {
        'name': 'Xavier Meroño',
        'mail': 'x.merono@gmail.com',
        'github': 'https://github.com/xmero'
      }, {
        'name': 'Bijay Timilsina',
        'mail': 'bjtimi.007@hotmail.com',
        'github': 'https://github.com/bijay007'
      }, {
        'name': 'Ernesto Parra',
        'mail': 'ernesto-parra@hotmail.com',
        'github': 'https://github.com/ERPG'
      }, {
        'name': 'Francisco Lopez',
        'mail': 'frans.lopez.m@gmail.com',
        'github': 'https://github.com/FransLopez'
      }, {
        'name': 'Ignasi Amargos',
        'mail': 'amargos.ignasi@gmail.com',
        'github': 'https://github.com/IggyA/js-exercises'
      }, {
        'name': 'Jonas Rodon',
        'mail': 'jonasrodon@gmail.com',
        'github': 'https://github.com/JonasRodon'
      }, {
        'name': 'Josep Otal',
        'mail': 'j.otal.pares@gmail.com',
        'github': 'https://github.com/josepotal'
      }, {
        'name': 'Oscar Viciana',
        'mail': 'vicfer.oscar@gmail.com',
        'github': 'https://github.com/oviciana'
      }, {
        'name': 'Alejandro Vazquez',
        'mail': 'alejovp@gmail.com',
        'github': 'https://github.com/alejovp'
      }, {
        'name': 'Carles Far',
        'mail': 'litulandio@gmail.com',
        'github': 'https://github.com/LITULANDIO'
      }, {
        'name': 'Ezequiel Cucchiararo',
        'mail': 'ezequiel.cucchiararo@gmail.com',
        'github': 'https://github.com/EzequielGomezCucchiararo'
      }
    ]
    $scope.search = ''
    $scope.allStudents = allStudents
    $scope.unfiltered = allStudents.map(function (elem) {
      return elem.name + ' - ' + elem.mail + '  -  ' + elem.github.replace('https://github.com/', '@')
    })
  })
