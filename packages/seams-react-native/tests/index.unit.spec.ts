import { describe, expect, it } from 'vitest'

import { createSeamsReactNative } from '../src/index'
import { createFakeSeamsReactNative } from '../src/testing/index'

describe('createSeamsReactNative', () => {
  it('describes no runtime seams while the package is a skeleton', () => {
    expect(createSeamsReactNative().describe()).toEqual({ seams: [] })
  })
})

describe('createFakeSeamsReactNative', () => {
  it('describes no runtime seams by default', () => {
    expect(createFakeSeamsReactNative().describe()).toEqual({ seams: [] })
  })

  it('returns the seams it was given', () => {
    const seams = { seams: [{ name: 'navigation' }] }
    expect(createFakeSeamsReactNative(seams).describe()).toBe(seams)
  })
})
