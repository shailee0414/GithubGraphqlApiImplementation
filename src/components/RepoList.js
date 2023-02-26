import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import RepositoryList from "./RepositoryList";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer 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`,
  },
});

const RepoList = () => {
  return (
    <ApolloProvider client={client}>
      <RepositoryList username="Shaily10414" />
    </ApolloProvider>
  );
};
export default RepoList;
