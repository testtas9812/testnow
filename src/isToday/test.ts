/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isToday from '.'

describe('isToday', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is today', () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('returns false if the given date is not today', () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 26))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 25).getTime())
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(isToday.bind(null), TypeError)
  })
})
