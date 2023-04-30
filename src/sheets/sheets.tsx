import { registerSheet } from 'react-native-actions-sheet'
import ExampleSheet from './ExampleSheet'
import { ServiceAdvisorySheet } from './ServiceAdvisorySheet'

export enum Sheets {
  SERVICE_ADVISORY = 'service-advisory',
}

// registerSheet('example-sheet', ExampleSheet)
registerSheet(Sheets.SERVICE_ADVISORY, ServiceAdvisorySheet)

export {}
