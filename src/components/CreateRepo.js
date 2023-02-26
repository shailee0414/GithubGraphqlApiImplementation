import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function CreateRepo() {
  const [repoName, setRepoName] = useState();
  const navigate = useNavigate();
  const onSubmit = () => {
    if (repoName) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "bearer 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"
      );
      const graphql = JSON.stringify({
        query: `mutation createRepo {\n createRepository(input:\n{\n  name: "${repoName}",\n  visibility: PUBLIC\n}){\n  repository\n  {\n    name\n    createdAt\n  }\n}\n}`,
        variables: {},
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };

      fetch("https://api.github.com/graphql", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          navigate("/");
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "3rem",
        fontSize: "1.5em",
      }}
    >
      <form>
        <label htmlFor="repo">Repository Name: </label>
        <input
          id="repo"
          placeholder="New Repo"
          type="text"
          onChange={(e) => {
            setRepoName(`${e.target.value}`);
          }}
        ></input>
        <br></br>
        <div
          onClick={() => {
            onSubmit();
          }}
          style={{
            border: "1px solid grey",
            alignSelf: "center",
            width: "70px",
          }}
        >
          Submit
        </div>
      </form>
    </div>
  );
}
