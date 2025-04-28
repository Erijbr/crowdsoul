import { forwardRef } from 'react';
import { Group, Select, Text } from "@mantine/core";
import { ICurrency } from "../types";
import currencyData from "../data/Currencies.json";

// Interface pour accepter onChange
interface CurrencySelectProps {
  onChange?: (value: string | null) => void;
}

// Personnalisation de chaque item dans la liste
const CurrencySelectItem = forwardRef<HTMLDivElement, ICurrency>(
  ({ name, cc, ...others }: ICurrency, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Text size="sm">{name}</Text>
        <Text size="sm" opacity={0.65}>
          {cc}
        </Text>
      </Group>
    </div>
  )
);

// Le composant principal
const CurrencySelect = ({ onChange }: CurrencySelectProps) => {
  return (
    <Select
      label="What currency do you want to raise money in?"
      itemComponent={CurrencySelectItem}
      data={currencyData.data.map(c => ({ value: c.name, label: c.name, ...c }))}
      searchable
      clearable
      maxDropdownHeight={300}
      nothingFound="Nobody here"
      filter={(value, item) =>
        (item.label ?? '').toLowerCase().includes(value.toLowerCase().trim())
      }
      onChange={onChange} // Correction : branché sur ton formulaire
    />
  );
};

export default CurrencySelect;
