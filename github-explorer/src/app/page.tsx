"use client";

import { useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

import styles from "./page.module.scss";

export default function Home() {
  const [username, setUsername] = useState("");

  function handleSearch(username: string) {
    setUsername(username);
  }

  return (
    <main className={styles.container}>
      <Header />

      <SearchBar onSearch={handleSearch} />
    </main>
  );
}