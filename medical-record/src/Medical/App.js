import './App.css';
import Welcome from './Welcome';
function App() {
  
  return (

<div className="background">  
<Welcome/>
 
   <div >  
          <div >
            <section
              id="slider">
             <input type="radio" name="slider" className="radio1"id="s1" defaultChecked="false"/>
                <input type="radio" name="slider" id="s2" defaultChecked="true"/>
                <input type="radio" name="slider" id="s3" defaultChecked="false"/>
              <label htmlFor="s1" id="slide1">
                <h1>Mission</h1>
             <p>The Ethiopia Patient Recording system is all about creating centralized 
              database for each hospital health record system so it can be accessed
               easily and MoH can generate report whenever needed.</p>
              </label>
              <label htmlFor="s2" id="slide2">
              <h1>Vission</h1>
              <p>The Ethiopia Patient Recording system is all about creating centralized 
              database for each hospital health record system so it can be accessed
               easily and MoH can generate report whenever needed.</p>
              </label>
              <label htmlFor="s3" id="slide3">
              <h1>Goal</h1>
              <p>The Ethiopia Patient Recording system is all about creating centralized 
              database for each hospital health record system so it can be accessed
               easily and MoH can generate report whenever needed.</p></label>
            </section>
          </div>
           
        </div>
        </div>         
         
             );
}

export default App;
