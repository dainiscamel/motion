import useTab from "./hooks/useTab";

type Content = {
  tab: string;
  content: string;
};

const App = () => {
  const contents: Content[] = [
    {
      tab: "tab1",
      content: "content1",
    },
    {
      tab: "tab2",
      content: "content2",
    },
    {
      tab: "tab3",
      content: "content3",
    },
  ];

  /* //hooks playground */
  const tabHook = useTab(0, contents);

  // undefined인 경우 조건부 렌더링
  if (!tabHook) {
    return <div>Error: Invalid tab data</div>;
  }

  const { currentItem, changeItem } = tabHook;
  return (
    <div className="App">
      <h1>useInput</h1>
      {contents.map((content, index) => (
        <button type="button" onClick={() => changeItem(index)}>
          {content.tab}
        </button>
      ))}

      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
