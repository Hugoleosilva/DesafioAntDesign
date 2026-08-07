import { Radio, Space, Typography } from "antd";

interface FilterBarProps {
  value: string;
  onFilterChange: (value: string) => void;
}

export default function FilterBar({
  value,
  onFilterChange,
}: FilterBarProps) {
  return (
    <Space orientation="vertical">
      <Typography.Text strong>
        Ordenar por:
      </Typography.Text>

      <Radio.Group
        value={value}
        onChange={(event) =>
          onFilterChange(event.target.value)
        }
      >
        <Radio value="desc" style={{ color: "#ffffff" }}>
          Mais recentes
        </Radio>

        <Radio value="asc" style={{ color: "#ffffff" }}>
          Mais antigos
        </Radio>
      </Radio.Group>
    </Space>
  );
}