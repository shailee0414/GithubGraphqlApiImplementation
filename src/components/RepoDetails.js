import React, { useEffect, useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";

const RepoDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { state } = useLocation();
  useEffect(() => {
    setData(state?.repository);
    
  }, [state?.repository]);
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "3rem",
        fontSize: "2em",
      }}
    >
      <div>
        <p>
          <b>Repository Name : </b>
          {data?.name}
        </p>
        <p>
          <b>Repository ID : </b>
          {data?.id}
        </p>
        <p>
          <b>Description : </b>
          {data?.description}
        </p>
        <p>
          <b>Date : </b>
          {data?.createdAt}
        </p>
        <button
          onClick={() => {
            navigate("/update", { state: { repoId:data?.id } });
          }}
        >
          Update Repo
        </button>
      </div>
    </div>
  );
};
export default RepoDetails;
