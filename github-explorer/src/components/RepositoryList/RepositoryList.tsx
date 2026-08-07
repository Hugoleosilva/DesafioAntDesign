import type { Repository } from "@/types/repository";

import RepositoryCard from "@/components/RepositoryCard";

interface RepositoryListProps {
  repositories: Repository[];
}

export default function RepositoryList({
  repositories,
}: RepositoryListProps) {
  return (
    <div>
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
        />
      ))}
    </div>
  );
}