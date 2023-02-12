import pic from "../patternbg.jpg";
import "./home.css";

function Home() {
  return (
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
  );
}

export default Home;
