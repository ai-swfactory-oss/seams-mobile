import type { ExpoBuildPlan, SeamsExpo } from '../index'

export const createFakeSeamsExpo = (plan: ExpoBuildPlan = { builds: [] }): SeamsExpo => ({
  plan: () => plan,
})
