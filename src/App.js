import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./components/home/Homepage";
import ArtistProfile from "./components/artistProfile/Profile"
import 'react-dropzone-uploader/dist/styles.css'
import DetailSong from './components/detailSong/DetailSong'
import ArtistLaunchpad from "./components/artistsLaunchpad/ArtistLaunchpad"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
    <div className="bg-white font-roboto h-screen text-black">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/launchpad-artists" component={ArtistLaunchpad}/>
        <Route path="/user/:profile/:action" component={ArtistProfile}/>
        <Route path="/detail/:artist/:songTitle" component={DetailSong}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
