import "/node_modules/leaflet/dist/leaflet.css";
import pic from "../patternbg.jpg";
import "./home.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from "react";
import icon from "./icon";


function Home() {
  const [address,setAddress] = useState(null);
  const [ipAddress,setIpAddress] = useState("");

 
useEffect(() => {
  try {
    const getInitialData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "3umY4AyoFvz9sleRNLewjoFLW0TrZmNT");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const ipAddress = "8.8.8.8"; // replace with the IP address you want to look up
      const url = `https://api.apilayer.com/ip_to_location/${ipAddress}`;

      const res = await fetch(url, requestOptions);
      const data = await res.json();
      setAddress(data);
    }
    getInitialData();
  } catch (error) {
    console.trace(error);
  }
}, []);

  
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
          <div className="output">{address && address.ip}</div>
          {/* <div className="output">8.8.8.8</div> */}
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">LOCATION</p>
          <div className="output">{address && address.region_name}, {address && address.city}, {address && address.country_code}</div>
          {/* <div className="output">Manhatten, US</div> */}
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">TIMEZONE</p>
          <div className="output">UTC {address && address.timezone}</div>
          {/* <div className="output">UTC 8:00</div> */}
        </div>
        <div class="vl"></div>
        <div className="subOutputs">
          <p className="smallheading">CURRENCY</p>
          <div className="output">{address && address.currencies[0].code}</div>
          {/* <div className="output">Skylink</div> */}
        </div>
        
      </div>
     
    </div>

    
     
    <div className="map">
<MapContainer center={[50, -39]} zoom={13} scrollWheelZoom={true} style = {{height:"500px", width:"100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={icon} position={[50, -39]}>
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
