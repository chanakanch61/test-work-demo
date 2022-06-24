
import "./App.css"
import Navbar from "./components/Navbar";
import NavbarSide from "./components/navbar_side";
import data from './data.json';

function App() {
    return ( 
    <div className="App">
        <Navbar/>
        <NavbarSide/>
        <div className="index_place">
        <h2>Place List</h2>
        </div>
        <div className="place_list" style={{height:"100px"}}>
            {

            data && data.map( data => {
                return (<div className="box" key={data.id}>
                    <div className="pic"><img src = {data.profile_image_url} alt="" width="50px" height="50px"/></div>
                    <div className="name_place">
                        {data.name}
                    </div>
                    <div className="rating">{data.rating}</div>
                    <div className="time">{data.operation_time.day}</div>
                  
                    <div className="pic_list"><img src = {data.images} alt="" width="150px" height="150px"/></div>
            


                </div>
               
                )
            })
            
            }
          
        </div>


    </div>

    );
}

export default App;