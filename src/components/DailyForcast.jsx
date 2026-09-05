import icon_rain from "./icon-rain.webp";
const DailyForcast = () => {
    return (
        <div className="">
            <h4 className="font-bold md:text-start text-white md:ml-92">Daily forecast</h4>
            <div className="md:flex  md:flex-row md:ml-90 md:mt-4">
                <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md">
                    <p className="md:text-center text-[hsl(250,6%,84%)] ">Tue</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md md:ml-4">
                    <p className="md:text-center text-[hsl(250,6%,84%)]">Wed</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                   <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md md:ml-4">
                    <p className="md:text-center text-[hsl(250,6%,84%)] ">Thu</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                   <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md md:ml-4 ">
                    <p className="md:text-center text-[hsl(250,6%,84%)] ">Fri</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                   <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md md:ml-4">
                    <p className="md:text-center text-[hsl(250,6%,84%)] ">Sat</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                   <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md md:ml-4">
                    <p className="md:text-center text-[hsl(250,6%,84%)] ">Sun</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                   <div className="bg-[hsl(243,23%,24%)] md:w-23  md:p-2 md:rounded-md md:ml-4">
                    <p className="md:text-center text-[hsl(250,6%,84%)] ">Mon</p>
                    <div className="md:flex  md:justify-center">
                        <img src={icon_rain} alt=""  className="md:w-13 md:h-13"/>
                    </div>
                    <div className="md:flex md:justify-between">
                        <p className="text-[hsl(250,6%,84%)] md:text-sm">20°</p>
                        <p className="text-[hsl(240,6%,70%)] md:text-sm">14°</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default DailyForcast;