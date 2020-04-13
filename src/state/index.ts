import { IConfig, createOvermind, IState } from "overmind"
import { merge, namespaced } from "overmind/config"
import { createHook } from "overmind-react"

import * as blogs from "./blog"
import * as api from "../api"

const config = merge(
  {
    effects: api,
  },
  namespaced({ blogs })
)

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config)

export const useOvermind = createHook<typeof config>()
