"use client";

import { Alert, Spin } from "antd";
import { useState } from "react";

import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import RepositoryList from "@/components/RepositoryList";

import { getRepositories } from "@/services/github";
import type { Repository } from "@/types/repository";

import styles from "./page.module.scss";

export default function Home() {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  async function handleSearch(username: string) {
    setUsername(username);
    setError("");
    setRepositories([]);
    setIsLoading(true);

    try {
      const repositories = await getRepositories(username);

      setRepositories(repositories);
    } catch {
      setRepositories([]);
      setError("Usuário não encontrado.");
    } finally {
      setIsLoading(false);
    }
  }

  const filteredRepositories = [...repositories].sort(
    (a, b) => {
      if (sortOrder === "asc") {
        return (
          new Date(a.updated_at).getTime() -
          new Date(b.updated_at).getTime()
        );
      }

      return (
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
      );
    }
  );

  return (
    <main className={styles.container}>
      <Header />

      <section className={styles.content}>
        <SearchBar
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        {repositories.length > 0 && (
        <FilterBar
          value={sortOrder}
          onFilterChange={setSortOrder}
       />
        )}

        {error && (
          <Alert
            title={error}
            type="error"
          />
        )}

        {isLoading && <Spin />}

        {!isLoading &&
          !error &&
          username &&
          repositories.length === 0 && (
            <Alert
              title="Este usuário não possui repositórios públicos."
              type="info"
            />
          )}

        {!isLoading && filteredRepositories.length > 0 && (
          <RepositoryList repositories={filteredRepositories} />
        )}
      </section>
    </main>
  );
}