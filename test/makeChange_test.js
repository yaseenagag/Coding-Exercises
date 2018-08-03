import { expect } from 'chai'
<<<<<<< HEAD
import makeChange from '../src/makeChange'

describe('makeChange()', function(){

  it('should be a function', function(){
    expect(makeChange).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function(){
    const change = makeChange({price: 100, amountGiven: 100})
=======
import makeChange from '../src/specifications/makeChange'

describe('makeChange()', function () {

  it('should be a function', () => {
    expect(makeChange).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', () => {
    const change = makeChange({ price: 100, amountGiven: 100 })
>>>>>>> origin/master
    expect(change).to.be.an('object')
    expect(change).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(change).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    })
  })

<<<<<<< HEAD
  it('returns correct change', function(){
    expect(makeChange({price: 100, amountGiven: 141})).to.deep.equal({
=======
  it('returns correct change', () => {
    expect(makeChange({ price: 100, amountGiven: 141 })).to.deep.equal({
>>>>>>> origin/master
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    })
  })

<<<<<<< HEAD
  it('minimizes the number of coins given by using the most high-value coins', function(){
    expect(makeChange({price: 100, amountGiven: 168})).to.deep.equal({
=======
  it('minimizes the number of coins given by using the most high-value coins', () => {
    expect(makeChange({ price: 100, amountGiven: 168 })).to.deep.equal({
>>>>>>> origin/master
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    })

<<<<<<< HEAD
    expect(makeChange({price: 100, amountGiven: 169})).to.deep.equal({
=======
    expect(makeChange({ price: 100, amountGiven: 169 })).to.deep.equal({
>>>>>>> origin/master
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 4,
    })

<<<<<<< HEAD
    expect(makeChange({price: 100, amountGiven: 170})).to.deep.equal({
=======
    expect(makeChange({ price: 100, amountGiven: 170 })).to.deep.equal({
>>>>>>> origin/master
      quarters: 2,
      dimes: 2,
      nickels: 0,
      pennies: 0,
    })
  })
})
