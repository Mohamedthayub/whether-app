const Hero =  () => {
    return (
        <div className="md:mt-6">
            <h1 className="text-white md:text-5xl md:font-semibold md:text-center">How's the sky looking today</h1>
            <div className="md:flex md:justify-center md:mt-8">
                <input type="text" placeholder="Search for a place" className="bg-[hsl(243,23%,30%)] md:w-1/4 md:p-3 rounded-md outline-0 md:text-lg placeholder:text-white font-semibold text-white"/>
                <button className="text-white md:ml-5 bg-blue-700 font-bold p-4 md:rounded-md">Search</button>
            </div>
        </div>
    )
}
export default Hero;