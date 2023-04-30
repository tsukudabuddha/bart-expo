export type BARTAdvisory = {
  station: string
  description: {
    '#cdata-section': string
  }
  sms_text: {
    '#cdata-section': string
  }
}

export type BARTAdvisories = {
  '?xml': {
    '@version': string
    '@encoding': string
  }
  root: {
    '@id': string
    uri: {
      '#cdata-section': string
    }
    date: string
    time: string
    bsa: BARTAdvisory[]
    message: string
  }
}
