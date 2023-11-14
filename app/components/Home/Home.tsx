import React from "react";

const Homes = ({ setUser }: any) => {
  return (
    <div>
      <nav>
        <div>Home Page</div>
        <button onClick={() => setUser(true)}>SignOut</button>
      </nav>
    </div>
  );
};

export default Homes;
