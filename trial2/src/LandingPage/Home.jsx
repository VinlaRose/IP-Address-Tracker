import "/node_modules/leaflet/dist/leaflet.css";
import pic from "../patternbg.jpg";
import "./home.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from "react";


function Home() {
  const [address,setAddress] = useState(null);
  const [ipAddress,setIpAddress] = useState("");

  useEffect(() => {
    try{
      const getInitialData = async () => {
        const res = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_h5UqOB1ikdPNHXgXoCZukP78y4JeD&ipAddress=8.8.8.8');
        const data = await res.json();
        setAddress(data);
      }
      getInitialData();
    }
    catch(error){
      console.trace(error);
    }
  },[])
  
  return (
    <div className="entireContainer">
    <div className="container">
      <img src={pic} className="bg" alt="" />
      <div className="heading">IP Adress Tracker</div>
      
      <div className="search-wrapper">
      <input type="text" placeholder="Type IP address"  />
      <button type="submit"> > </button>

      </div>

      
      
   


      <div className="outputBox" style={{zIndex: 10000}}>
        <div className="subOutputs">
          <p className="smallheading">IP ADDRESS</p>
          <div className="output">{address.ip}</div>
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">LOCATION</p>
          <div className="output">{address.location.region}, {address.location.city}, {address.location.country}</div>
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">TIMEZONE</p>
          <div className="output">UTC {address.location.timezone}</div>
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">ISP</p>
          <div className="output">{address.isp}</div>
        </div>
        
      </div>
     
    </div>
     

    <div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
    style = {{height:"500px", width:"100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
    
  
  

    
     </div>
  );
}

export default Home;
