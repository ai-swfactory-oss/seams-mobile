export interface RuntimeSeam {
  readonly name: string
}

export interface RuntimeSeams {
  readonly seams: readonly RuntimeSeam[]
}

export interface SeamsReactNative {
  readonly describe: () => RuntimeSeams
}

export const createSeamsReactNative = (): SeamsReactNative => ({
  describe: () => ({ seams: [] }),
})
