import { Provider } from "react-redux";
import Calculator from "./components/Calculator";
import { store } from "./store";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Calculator></Calculator>
      <Auth></Auth>
    </Provider>
  );
}

export default App;
