import { useInput } from "./hooks/useInput/useInput";

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
