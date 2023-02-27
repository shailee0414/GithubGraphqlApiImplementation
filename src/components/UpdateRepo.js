import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateRepo() {
  const navigate = useNavigate();
  const [repoName, setRepoName] = useState();
  const [description, setDescription] = useState();
  const { state } = useLocation();

  const onSubmit = () => {
    if (state?.repoId) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "bearer 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"
      );

      var graphql = JSON.stringify({
        query: `mutation {\n    updateRepository(input: { repositoryId: "${state.repoId}", name: "${repoName}", description: "${description}" }) {\n      repository {\n        id\n        name\n        description\n      }\n    }\n  }`,
        variables: {},
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };

      fetch("https://api.github.com/graphql", requestOptions)
        .then((response) => response.text())
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
        <label htmlFor="desc">Repository Description: </label>
        <input
          id="desc"
          placeholder="New Description"
          type="text"
          onChange={(e) => {
            setDescription(`${e.target.value}`);
          }}
        ></input>
        <br></br>{" "} <br></br>
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
