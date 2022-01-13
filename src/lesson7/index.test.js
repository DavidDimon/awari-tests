import { sum, subtract, isUnderAge, getAgeByBirthYear, fibonacci } from './'

describe('test sum', () => {
  it('test 1', () => {
    expect(sum(1, 1)).toEqual(2)
  })

  it('test 2', () => {
    expect(sum(3, 1)).toEqual(4)
  })

  it('test 3', () => {
    expect(sum(-1, 0)).toEqual(-1)
  })
})

describe('test subtract', () => {
  it('test 1', () => {
    expect(subtract(1, 1)).toEqual(0)
  })

  it('test 2', () => {
    expect(subtract(3, 1)).toEqual(2)
  })

  it('test 3', () => {
    expect(subtract(-1, 0)).toEqual(-1)
  })
})

describe('test isUnderAge', () => {
  it('test 1', () => {
    expect(isUnderAge(18)).toBeTruthy()
  })

  it('test 2', () => {
    expect(isUnderAge(19)).toBeTruthy()
  })

  it('test 3', () => {
    expect(isUnderAge(3)).toBeFalsy()
  })
})

describe('test getAgeByBirthYear', () => {
  it('test 1', () => {
    expect(getAgeByBirthYear(1995)).toEqual(27)
  })

  it('test 2', () => {
    expect(getAgeByBirthYear(2000)).toEqual(22)
  })

  it('test 3', () => {
    expect(getAgeByBirthYear(2021)).toEqual(1)
  })
})

describe('test fibonacci', () => {
  it('test 1', () => {
    expect(fibonacci(1)).toEqual(1)
  })

  it('test 2', () => {
    expect(fibonacci(5)).toEqual(5)
  })

  it('test 3', () => {
    expect(fibonacci(8)).toEqual(21)
  })
})
