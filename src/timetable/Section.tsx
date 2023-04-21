import { Text } from "../core-ui/Text";
import { colors } from "../core-ui/colors";
import { TimetableItem } from "./TimetableItem";
import { Estimate } from "./utils";

export type SectionData = {
  title: string;
  items: Estimate[];
  marginBottom: number;
}

export const Section = ({title, items, marginBottom}: SectionData) => {
  return (
    <>
      <Text style={{marginBottom}} color={colors.secondaryDarkText} variant="footnote" alignment="left">{title.toUpperCase()}</Text>
      {items.map(item => <TimetableItem key={item.destination} item={item}/>)}
    </>
  )
}