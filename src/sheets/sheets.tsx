import { registerSheet } from 'react-native-actions-sheet'
import { ServiceAdvisorySheet } from './ServiceAdvisorySheet'
import { RouteDetailSheet } from './RouteDetailSheet'

export enum Sheets {
  SERVICE_ADVISORY = 'service-advisory',
  ROUTE_DETAIL = 'route-detail',
}

registerSheet(Sheets.SERVICE_ADVISORY, ServiceAdvisorySheet)
registerSheet(Sheets.ROUTE_DETAIL, RouteDetailSheet)

export {}
