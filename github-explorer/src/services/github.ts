export async function getRepositories(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error("Usuário não encontrado.");
    }

    const repositories = await response.json();

    return repositories;
  } catch (error) {
    throw error;
  }
}