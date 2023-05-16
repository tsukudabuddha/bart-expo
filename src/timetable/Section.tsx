import { Text } from '../core-ui/Text'
import { colors } from '../core-ui/colors'
import { TimetableItem } from './TimetableItem'
import { Estimate } from './utils'

// TODO: Make this reusable
export type SectionData = {
  title: string
  items: Estimate[]
  marginBottom?: number
  onItemPress: (abbr: string) => void
}

export const Section = ({ title, items, marginBottom, onItemPress }: SectionData) => {
  return (
    <>
      <Text style={{ marginBottom }} color={colors.secondaryDarkText} variant="footnote" alignment="left">
        {title.toUpperCase()}
      </Text>
      {items.map(item => (
        <TimetableItem key={item.destination} item={item} onPress={() => onItemPress(item.abbreviation)} />
      ))}
    </>
  )
}
