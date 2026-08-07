import { Col, Row } from "antd";

import RepositoryCard from "@/components/RepositoryCard";
import type { Repository } from "@/types/repository";

interface RepositoryListProps {
  repositories: Repository[];
}

export default function RepositoryList({
  repositories,
}: RepositoryListProps) {
  return (
    <Row gutter={[16, 16]}>
      {repositories.map((repository) => (
        <Col
          key={repository.id}
          xs={24}
          sm={12}
          lg={8}
        >
          <RepositoryCard repository={repository} />
        </Col>
      ))}
    </Row>
  );
}