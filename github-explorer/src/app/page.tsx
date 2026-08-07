"use client";

import { Alert, Spin } from "antd";
import { useState } from "react";

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

  async function handleSearch(username: string) {
    setUsername(username);
    setError("");
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

  return (
    <main className={styles.container}>
      <Header />

      <SearchBar onSearch={handleSearch} />

      {error && (
        <Alert
          title={error}
          type="error"
        />
      )}

      {isLoading && <Spin />}

      {!isLoading && (
        <RepositoryList repositories={repositories} />
      )}
    </main>
  );
}