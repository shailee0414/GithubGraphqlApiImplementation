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
