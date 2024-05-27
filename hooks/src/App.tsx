import { useState } from "react";

// TODO: input update
const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const App = () => {
  const input = useInput("test");
  {
    /* //hooks playground */
  }
  return (
    <div className="App">
      <h1>useInput</h1>
      <input placeholder="이름을 작성하세요" {...input} />
    </div>
  );
};

export default App;
