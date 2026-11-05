export interface ExpoBuild {
  readonly profile: string
}

export interface ExpoBuildPlan {
  readonly builds: readonly ExpoBuild[]
}

export interface SeamsExpo {
  readonly plan: () => ExpoBuildPlan
}

export const createSeamsExpo = (): SeamsExpo => ({
  plan: () => ({ builds: [] }),
})
