import type { RuntimeSeams, SeamsReactNative } from '../index'

export const createFakeSeamsReactNative = (seams: RuntimeSeams = { seams: [] }): SeamsReactNative => ({
  describe: () => seams,
})
