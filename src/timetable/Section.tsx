import { Text } from "../core-ui/Text";
import { colors } from "../core-ui/colors";
import { TimetableItem } from "./TimetableItem";
import { Estimate } from "./utils";

export type SectionData = {
  title: string;
  items: Estimate[];
}

export const Section = ({title, items}: SectionData) => {
  return (
    <>
      <Text style={{paddingTop: 24}} color={colors.secondaryDarkText} variant="footnote" alignment="left">{title.toUpperCase()}</Text>
      {items.map(item => <TimetableItem key={item.destination} item={item}/>)}
    </>
  )
}