import { Card, Space, Typography } from "antd";

import type { Repository } from "@/types/repository";

interface RepositoryCardProps {
  repository: Repository;
}

export default function RepositoryCard({
  repository,
}: RepositoryCardProps) {
  return (
    <Card>
      <Typography.Link
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repository.name}
      </Typography.Link>

      <Typography.Paragraph>
        {repository.description}
      </Typography.Paragraph>

      <Space>
        <span>⭐ {repository.stargazers_count}</span>
        <span>🍴 {repository.forks_count}</span>
      </Space>

      <Typography.Text>
        Atualizado em{" "}
        {new Date(repository.updated_at).toLocaleDateString("pt-BR")}
      </Typography.Text>
    </Card>
  );
}