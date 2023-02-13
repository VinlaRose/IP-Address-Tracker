import pic from "../patternbg.jpg";
import "./home.css";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';


function Home() {
  
  
  return (
    <div>
    <div className="container">
      <img src={pic} className="bg" alt="" />
      <div className="heading">IP Adress Tracker</div>
      
      <div className="search-wrapper">
      <input type="text" placeholder="Type IP address"  />
      <button type="submit"> > </button>

      </div>

      
      
   


      <div className="outputBox">
        <div className="subOutputs">
          <p className="smallheading">IP ADDRESS</p>
          <div className="output">192.145.175.123</div>
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">LOCATION</p>
          <div className="output">Brooklyun, New York, 100012</div>
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">TIMEZONE</p>
          <div className="output">UTC - 5:00</div>
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">ISP</p>
          <div className="output">SpaceX Starlink</div>
        </div>
        
      </div>
     
    </div>
     <div id="map">
     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
</MapContainer>
     </div>
     </div>
  );
}

export default Home;
