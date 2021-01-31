import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import { Home, About, Posts, Contact, LogIn, Post1, Post2, Post3, Post4 } from "./pages/index";

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts/:postId?" component={Posts} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LogIn} />
          <Route path="/post/1" component={Post1} />
          <Route path="/post/2" component={Post2} />
          <Route path="/post/3" component={Post3} />
          <Route path="/post/4" component={Post4} />
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
