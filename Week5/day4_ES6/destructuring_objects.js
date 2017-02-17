var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
};

var {name, surname, dateOfBirth: {year}, children, age=30} = customer;
name // 'John'
surname // 'Doe'
year // 1988
children // undefined
age // 30