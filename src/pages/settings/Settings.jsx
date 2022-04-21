import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
   <div className="settings">
                  <div className="settingsWrapper">
                                 <div className="settingsTitle">
                                 <span className="settingsUpdateTitle"></span>
                                                <span className="settingsDeleteTitle"></span>
                                 </div>
             <form className="settingsForm">
                            <label>Profile Picture</label>
                            <div className="settingsPP">
                                           <img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d" alt="" />
                                           <label htmlFor="fileInput">
                                           <i class="fa-solid fa-user"></i>
                                           </label>
                                           <input type="file" id="fileInput" style={{display:none}}/>
                            </div>
             </form>
                  </div>
                  <Sidebar/>
   </div>
  )
}
