"use client";

import { useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { getRepositories } from "@/services/github";
import type { Repository } from "@/types/repository";

import styles from "./page.module.scss";

export default function Home() {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleSearch(username: string) {
    setUsername(username);

    const repositories = await getRepositories(username);

    setRepositories(repositories);
  }

  return (
    <main className={styles.container}>
      <Header />

      <SearchBar onSearch={handleSearch} />
    </main>
  );
}