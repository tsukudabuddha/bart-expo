import { Screens } from './screens'

export type ParamList = {
  [Screens.ALL_STATIONS]: {}
  [Screens.STATION]: { abbr: string }
}
