"use client";

import { Button, Input } from "antd";
import { useState } from "react";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export default function SearchBar({
  onSearch,
  isLoading,
}: SearchBarProps) {
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
      <Input
        placeholder="Digite um usuário do GitHub"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <Button
        type="primary"
        htmlType="submit"
        loading={isLoading}
      >
        Buscar
      </Button>
    </form>
  );
}