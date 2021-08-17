import Timer from "./components/Timer";
import Input from "./components/Input";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container className="App">
      <h1>Sorting Machine</h1>
      <Timer country="korea" />
      <Input />
      <Timer country="america" />
    </Container>
  );
}

export default App;
