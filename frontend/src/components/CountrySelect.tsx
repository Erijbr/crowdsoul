import { forwardRef } from 'react';
import countriesData from "../data/Countries.json";
import { Avatar, Group, Select, Text } from "@mantine/core";
import { ICountry } from "../types";

// Interface pour accepter onChange
interface CountrySelectProps {
  onChange?: (value: string | null) => void;
}

// Personnalisation de chaque option dans la liste
const CountrySelectItem = forwardRef<HTMLDivElement, ICountry>(
  ({ image, name, code, ...others }: ICountry, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text size="sm">{name}</Text>
          <Text size="xs" opacity={0.65}>
            {code}
          </Text>
        </div>
      </Group>
    </div>
  )
);

// Le composant principal
const CountrySelect = ({ onChange }: CountrySelectProps) => {
  return (
    <Select
      label="Country"
      itemComponent={CountrySelectItem}
      data={countriesData.data.map(c => ({ value: c.name, label: c.name, ...c }))}
      searchable
      clearable
      maxDropdownHeight={300}
      nothingFound="Nothing found"
      filter={(value, item) =>
        (item.label ?? '').toLowerCase().includes(value.toLowerCase().trim())
      }
      onChange={onChange} // Correction : on peut capter la sélection maintenant
    />
  );
};

export default CountrySelect;
