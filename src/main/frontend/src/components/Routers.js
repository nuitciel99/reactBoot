import '../assets/css/style.scss'
import Header from './Header'
import { BrowserRouter, Route } from "react-router-dom";

function Routers(){

    return (

        <BrowserRouter>
        <Header></Header>
            {/* <Route path="/" exact component={}></Route>
            <Route path="/movie" exact component={}></Route>
            <Route path="/movie/popular" exact component={}></Route>
            <Route path="/movie/now-playing" exact component={}></Route>
            <Route path="/movie/upcoming" exact component={}></Route>
            <Route path="/movie/top-rated" exact component={}></Route>
            <Route path="/tv" exact component={}></Route>
            <Route path="/tv/airing-today" exact component={}></Route>
            <Route path="/tv/on-the-air" exact component={}></Route>
            <Route path="/tv/top-rated" exact component={}></Route>
            <Route path="/search" component={}></Route>
            <Route path="/movie/:id" component={}></Route>
            <Route path="/tv/:id" component={}></Route> */}
        </BrowserRouter>


    )

}

export default Routers