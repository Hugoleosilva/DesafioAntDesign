### Porque usar o index.ts?
Utilizei um index.ts como ponto de entrada de cada componente. Assim, o restante da aplicação importa apenas a pasta do componente, sem depender da estrutura interna. Isso deixa os imports mais limpos e facilita a manutenção.
Em projetos pequenos isso não faz muita diferença, mas conforme a aplicação cresce, um componente pode passar a ter vários arquivos (testes, hooks, tipos, utilitários, etc.). Com o index.ts, toda essa organização fica encapsulada e, se a estrutura interna mudar, não preciso alterar os imports espalhados pelo projeto. Basta atualizar o index.ts.

      {isLoading && <Spin />}

      {!isLoading && (
        <RepositoryList repositories={repositories} />
      )}



"Se isLoading for false (ou seja, !isLoading for true), mostre a lista de repositórios"