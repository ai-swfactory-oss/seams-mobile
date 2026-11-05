import { describe, expect, it } from 'vitest'

import { createSeamsExpo } from '../src/index'
import { createFakeSeamsExpo } from '../src/testing/index'

describe('createSeamsExpo', () => {
  it('plans no builds while the package is a skeleton', () => {
    expect(createSeamsExpo().plan()).toEqual({ builds: [] })
  })
})

describe('createFakeSeamsExpo', () => {
  it('plans no builds by default', () => {
    expect(createFakeSeamsExpo().plan()).toEqual({ builds: [] })
  })

  it('returns the plan it was given', () => {
    const plan = { builds: [{ profile: 'preview' }] }
    expect(createFakeSeamsExpo(plan).plan()).toBe(plan)
  })
})
