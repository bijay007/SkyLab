describe('a function rock that', function () {
  it('should exist', function () {
    expect(rock).toBeDefined()
  })
  it('should return string', function () {
    var result = rock()
    expect(typeof result).toEqual('string')
  })
  it('should have arguemnts paper rock and scissor', function () {
    expect(rock('invalidArg')).toEqual('Error, you should enter a valid arg')
  })
  it('should have arguemnts paper rock and scissor', function () {
    expect(rock('invalidArg', 'invalidArg')).toEqual('Error, you should enter a valid arg')
  })
  it('should return scissor wins if paper and scissor', function () {
    expect(rock('paper', 'scissor')).toEqual('scissor wins')
  })
  it('should return paper wins if paper and rock', function () {
    expect(rock('paper', 'rock')).toEqual('paper wins')
  })
  it('should return rock wins if scissor and rock', function () {
    expect(rock('scissor', 'rock')).toEqual('rock wins')
  })
  it('if there is no player 2, should work anyway', function () {
    expect(typeof rock('paper')).toEqual('string')
  })
  it('if both players enter the same option', function () {
    expect(rock('paper', 'paper')).toEqual('tie')
  })
})
