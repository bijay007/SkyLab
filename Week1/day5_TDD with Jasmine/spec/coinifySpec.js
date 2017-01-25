describe ('The function combos ', function () {
  it ('must exist.', function () {
    expect (combos).toBeDefined()
  })
  it ('must return a number', function () {
    var result = combos()
    expect (result instanceof Array).toBeTruthy()
  })
  it ('must return 1 if a cent is inserted', function () {
      var result = combos(1)
      expect (result[0]).toEqual(1)
      expect (result.length).toBe(2)
      expect (result[1] instanceof Array).toBeTruthy()
  })
  it ('must return 2 if 5 cents is inserted', function () {
      var result = combos(5)
      expect (result[0]).toEqual(2)
      expect (result.length).toBe(2)
      expect (result[1] instanceof Array).toBeTruthy()
  })
  it ('must return 4 if 10 cents is inserted', function () {
    var result = combos(10)
    expect (result[0]).toEqual(4)
    expect (result[1] instanceof Array).toBeTruthy()
  })
  it ('must return 6 if 15 cents is inserted', function () {
    var result = combos(15)
    expect (result[0]).toEqual(6)
    expect (result[1] instanceof Array).toBeTruthy()
  })
  it ('must return 242 if 1 dollar(100 cents) is inserted', function () {
    var result = combos(100)
    expect (result[0]).toEqual(242)
    expect (result[1] instanceof Array).toBeTruthy()
  })
})