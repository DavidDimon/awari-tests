import {
  sumArray,
  getLastButOne,
  isOdd,
  upperCaseFirstLetter,
  pxToRem,
  objectToArray,
} from './'

describe('test sumArray', () => {
  it('test 1', () => {
    expect(sumArray([1, 1, 1, 1])).toEqual(4)
  })

  it('test 2', () => {
    expect(sumArray([2, 4, 6, 8])).toEqual(20)
  })

  it('test 3', () => {
    expect(sumArray([1, -1, 10])).toEqual(10)
  })
})

describe('test getLastButOne', () => {
  it('test 1', () => {
    expect(getLastButOne([1, 1, 2, 1])).toEqual(2)
  })

  it('test 2', () => {
    expect(getLastButOne([2, 4, 6, 8])).toEqual(6)
  })

  it('test 3', () => {
    expect(getLastButOne([1, 'último', 10])).toEqual('último')
  })
})

describe('test isOdd', () => {
  it('test 1', () => {
    expect(isOdd(1)).toBeTruthy()
  })

  it('test 2', () => {
    expect(isOdd(2)).toBeFalsy()
  })

  it('test 3', () => {
    expect(isOdd(50)).toBeFalsy()
  })
})

describe('test upperCaseFirstLetter', () => {
  it('test 1', () => {
    expect(upperCaseFirstLetter('hideo kojima')).toEqual('Hideo Kojima')
  })

  it('test 2', () => {
    expect(upperCaseFirstLetter('david dimon')).toEqual('David Dimon')
  })

  it('test 3', () => {
    expect(upperCaseFirstLetter('teste')).toEqual('Teste')
  })
})

describe('test pxToRem', () => {
  it('test 1', () => {
    expect(pxToRem(120)).toEqual('7.5rem')
  })

  it('test 2', () => {
    expect(pxToRem(130)).toEqual('8.125rem')
  })

  it('test 3', () => {
    expect(pxToRem(-50)).toEqual('-3.125rem')
  })
})

describe('test objectToArray', () => {
  it('test 1', () => {
    expect(objectToArray({ name: 'test', age: 15 })).toEqual(['test', 15])
  })

  it('test 2', () => {
    expect(objectToArray({ name: 'david' })).toEqual(['david'])
  })

  it('test 3', () => {
    expect(objectToArray({ isProgrammer: false, name: 'Steve Jobs' })).toEqual([
      false,
      'Steve Jobs',
    ])
  })
})
