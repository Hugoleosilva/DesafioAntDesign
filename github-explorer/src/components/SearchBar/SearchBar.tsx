"use client";

import { useState } from "react";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    onSearch(username);
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite um usuário do GitHub"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}