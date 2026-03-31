const Transition_Transform = () => {
    return (

       <>

            <h1> This is Transition and Transform Component </h1>


            <button className="bg-blue-500 text-2xl  p-2 m-2 rounded  border-4 border-red-500  hover:bg-blue-900 hover:opacity-4  "> Button 1  </button>

            <br />
            <br />

            <button
                className="bg-blue-500 text-2xl p-2 m-2 rounded border-4 border-red-500 hover:bg-blue-900 hover:opacity-3
             transition duration-3000"
            >
                Button 2
            </button>

            <br />
            <br />

            <button
                className="bg-blue-500 text-2xl p-2 m-2 rounded border-4 border-red-500 hover:bg-blue-900  hover:opacity-2
             transition duration-1000"
            >
                Button 3
            </button>

            <br />
            <br />

            <button
                className=" bg-red-700 p-2 m-10 text-white rounded 
                
             hover:rotate-360 transition-transform duration-3000  "
            >
                Button 4
            </button>

        </>
    )

}

export default Transition_Transform


