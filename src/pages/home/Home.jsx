import "./home.css"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Home() {
  return (
   <div className="home">
        <Posts/>  
        <Sidebar/>
   </div>
  )
}
