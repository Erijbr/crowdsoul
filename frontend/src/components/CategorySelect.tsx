import { forwardRef } from 'react';
import { Group, Select, Text } from "@mantine/core";
import {
    IconAugmentedReality,
    IconCat,
    IconClipboardHeart,
    IconDeviceTv,
    IconFireHydrant,
    IconHeartHandshake,
    IconLeaf,
    IconReportMoney,
    IconSos
} from "@tabler/icons-react";

// Interface pour accepter onChange
interface CategorySelectProps {
  onChange?: (value: string | null) => void;
}

const mockdata = [
    { icon: IconClipboardHeart, title: 'Medical' },
    { icon: IconSos, title: 'Emergency' },
    { icon: IconLeaf, title: 'Environment' },
    { icon: IconHeartHandshake, title: 'Nonprofit' },
    { icon: IconReportMoney, title: 'Financial emergency' },
    { icon: IconCat, title: 'Animals' },
    { icon: IconFireHydrant, title: 'Crisis Relief' },
    { icon: IconAugmentedReality, title: 'Technology' },
    { icon: IconDeviceTv, title: 'Film & Videos' },
];

// Pour personnaliser chaque option de la liste
const CategorySelectItem = forwardRef<HTMLDivElement, any>(
  ({ title, icon: Icon, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Icon size={18} />
        <div>
          <Text size="sm">{title}</Text>
        </div>
      </Group>
    </div>
  )
);

// Composant CategorySelect
const CategorySelect = ({ onChange }: CategorySelectProps) => {
    return (
        <Select
            label="Category"
            itemComponent={CategorySelectItem}
            data={mockdata.map(c => ({ value: c.title, label: c.title, icon: c.icon }))}
            searchable
            clearable
            maxDropdownHeight={300}
            nothingFound="Nothing found"
            filter={(value, item) =>
                (item.label ?? "")?.toLowerCase().includes(value?.toLowerCase().trim())
            }
            onChange={onChange} // <-- ici on passe l'onChange !
        />
    );
};

export default CategorySelect;
