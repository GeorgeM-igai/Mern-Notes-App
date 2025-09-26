import Navbar from "../components/Navbar"
import Note from "../components/Note"

const Home = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="mt-10 px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Note title={"George Muigai"} content={"The owner of this application"}/>
        <Note title={"George Muigai"} content={"The owner of this application"}/>
        <Note title={"George Muigai"} content={"The owner of this application"}/>
        <Note title={"George Muigai"} content={"The owner of this application The owner of this application The owner of this application  The owner of this application "}/>
        <Note title={"George Muigai"} content={"The owner of this application"}/>
        <Note title={"George Muigai"} content={"The owner of this application"}/>

      </div>
    </div>
  );
}

export default Home