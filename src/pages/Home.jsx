import "../styles/home.css"

import Taskboard from "../components/Taskboard"

function Home() {
  return (
    <main className="main">
        <h2 className="headline">Hello there!</h2>
        <p className="subheading">Here's what you have in plan: </p>
        
        <Taskboard/>

    </main>
  )
}

export default Home