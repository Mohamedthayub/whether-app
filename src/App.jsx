import WhetherFinder from "./components/WhetherFinder";
import Hero from "./components/Hero";
import Location from "./components/Location";
import WhetherDetails from "./components/WhetherDetails";
import DailyForcast from "./components/DailyForcast";
const App = () => {
  return (
    <div className="bg-[hsl(243,96%,9%)] min-h-screen">
      <WhetherFinder/>
      <Hero/>
      <div className="md:ml-10l">
        <Location/>
        <WhetherDetails/>
        <DailyForcast/>
      </div>      
    </div>
  )
}
export default App;