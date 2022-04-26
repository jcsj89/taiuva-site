import React, { useState } from "react";

const FirstComponent = () => {
  const [teste, setTeste] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">
        {teste ? "true" : "false"}
      </h1>
      <button onClick={() => setTeste(!teste)}>teste</button>
    </div>
  );
};

export default FirstComponent;
