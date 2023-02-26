import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GET_REPOSITORIES = gql`
  query {
    repositoryOwner(login: "Shaily10414") {
      repositories(first: 100, privacy: PUBLIC) {
        nodes {
          id
          name
          description
          createdAt
        }
      }
    }
  }
`;

const RepositoryList = () => {
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: { language: "english" },
  });
  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      <p>Please reload after create and update repo......</p>
      <div style={{ fontSize: "1.3em", paddingLeft: "2em" }}>
        <a href="/create">Create New Repository</a>
        <ol>
          {data?.repositoryOwner?.repositories?.nodes?.map(
            (repository, index) => (
              <li key={repository?.id}>
                <h3>
                  {repository?.name}
                  {"   "}
                  <button
                    onClick={() => {
                      navigate("/details", { state: { repository, index } });
                    }}
                  >
                    Details
                  </button>
                  {"  "}
                </h3>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};
export default RepositoryList;
