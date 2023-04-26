import { Text } from '../core-ui/Text'
import styled from 'styled-components/native'
import { colors } from '../core-ui/colors'
import { Estimate } from './utils'
import { View, useColorScheme } from 'react-native'

export const TimetableItem = ({ item }: { item: Estimate }) => {
  const isDarkMode = useColorScheme() === 'dark'

  const borderRadius = 8

  // TODO: Replace background for light mode

  const time = item.estimates.join(', ')

  return (
    <Container isDarkMode={isDarkMode} borderRadius={borderRadius}>
      <Bar color={item.color} borderRadius={borderRadius} />
      <TextContainer>
        <Text variant="headline" alignment="left">
          {item.destination}
        </Text>
        <BottomRow>
          <Text
            color={colors.secondaryDarkText}
            style={{ marginTop: 8 }}
            variant="body"
            alignment="left"
          >{`${item.trainLength}-Car Train`}</Text>
          <Text style={{ marginTop: 8 }} variant="body" alignment="left">
            {time === 'Leaving' ? time + ' now' : time + ' min'}
          </Text>
        </BottomRow>
      </TextContainer>
    </Container>
  )
}

type ContainerProps = {
  isDarkMode: boolean
  borderRadius: number
}

const Container = styled.View<ContainerProps>`
  background-color: ${({ isDarkMode }: ContainerProps) => (isDarkMode ? colors.secondaryDarkBackground : 'grey')};
  border-radius: ${({ borderRadius }: ContainerProps) => borderRadius}px;
  margin-bottom: 16px;
  flex-direction: row;
`

type BarProps = {
  color: string
  borderRadius: number
}

const Bar = styled.View<BarProps>`
  background-color: ${({ color }: BarProps) => color};
  width: 20px;
  height: 100%;
  border-bottom-left-radius: ${({ borderRadius }: BarProps) => borderRadius}px;
  border-top-left-radius: ${({ borderRadius }: BarProps) => borderRadius}px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`

const TextContainer = styled(View)`
  padding: 16px;
  flex: 1;
`

const BottomRow = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
