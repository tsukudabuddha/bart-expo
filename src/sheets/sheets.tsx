import { registerSheet } from 'react-native-actions-sheet'
import { ServiceAdvisorySheet } from './ServiceAdvisorySheet'

export enum Sheets {
  SERVICE_ADVISORY = 'service-advisory',
}

registerSheet(Sheets.SERVICE_ADVISORY, ServiceAdvisorySheet)

export {}
