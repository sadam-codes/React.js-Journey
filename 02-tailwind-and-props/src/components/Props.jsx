import React from "react";

const Props = ({username = 'Sadam as default name'}) => {
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};

export default Props;
