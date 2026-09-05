const WhetherDetails = () => {
    return (
        <div className="md:flex md:ml-87 md:p-4 ">
            <div className="bg-[hsl(243,23%,30%)] md:p-3 md:w-36 rounded-lg">
                <p className="text-[hsl(240,6%,70%)]">Fells Like</p>
                <h1 className="text-[hsl(250,6%,84%)] md:mt-3 md:text-3xl md:font-extralight">18°</h1>
            </div>
            <div className="bg-[hsl(243,23%,30%)] ml-14 md:p-3 md:w-36 rounded-lg">
                <p className="text-[hsl(240,6%,70%)]">Humidity</p>
                <h1 className="text-[hsl(250,6%,84%)] md:mt-3 md:text-3xl md:font-extralight">46%</h1>
            </div>
            <div className="bg-[hsl(243,23%,30%)] ml-14 md:p-3 md:w-36 rounded-lg">
                <p className="text-[hsl(240,6%,70%)]">Wind</p>
                <h1 className="text-[hsl(250,6%,84%)] md:mt-3 md:text-3xl md:font-extralight">14 km/h</h1>
            </div>
            <div className="bg-[hsl(243,23%,30%)] ml-14 md:p-3 md:w-36 rounded-lg">
                <p className="text-[hsl(240,6%,70%)]">Precipitation</p>
                <h1 className="text-[hsl(250,6%,84%)] md:mt-3 md:text-3xl  md:font-extralight">0 mm</h1>
            </div>
        </div>
    )
}
export default WhetherDetails;