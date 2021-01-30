import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import { Home, About, Posts, Dashboard } from "./pages/index";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          render={() => <About newTestProps={{ name: "Sherzodbek" }} />}
          path="/about"
        />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/admin" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
