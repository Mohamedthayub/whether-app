import logo  from "./logo.svg";
import settings from "./icon-units.svg";
import drop_icon from "./icon-dropdown.svg";
const Navbar = () => (
    <div className="md:flex md:justify-between md:p-10 md:px-40">
        <img src={logo} alt="" />
        <div className="md:flex bg-[hsl(243,23%,30%)] md:h-8.5 rounded-md md:px-1.5 md:py-1">
            <img src={settings} alt=""  className="md:w-4 md:h-4 md:mt-1.5"/>
            <p className="text-[hsl(0,0%,100%)] md:ml-2 md:text-sm md:mt-1 md:font-semibold">Units</p>
            <img src={drop_icon} alt="" className="md:w-4 md:h-4 md:mt-1.5 md:ml-2"/>
        </div>
    </div>
)
export default Navbar;