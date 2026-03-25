const Interactivity = () => { 

    return (

        <>

            <h1> This is Interactivity... </h1>

            <button className="bg-blue-500 rounded-md p-2 m-4 text-white"> Login   </button>

            <button className="bg-blue-500 rounded-md p-2 m-4 text-white hover:bg-blue-800 "> Login   </button>


            <button className="bg-blue-500 rounded-md p-2 m-4 text-white focus:bg-amber-700"> Login   </button>

            <button className="bg-blue-600 rounded-md p-2 m-4 active:bg-red-400"> Login </button>

            <button className="bg-blue-500 rounded-md p-2 m-4 text-white
            
             hover:bg-blue-800 focus:bg-yellow-400 active:bg-red-500"

            > Login </button>

            {/* <div>

                <a className="group">

                    <h1 className="group-hover:bg-black group-hover:text-white "> Testing-1.... </h1>

                    <p className="group-hover:bg-black group-hover:text-white"> Testing-2.... </p>

                </a>
            </div> */}

            <div>

                <a className="group">

                    <h1 className="group-hover:bg-black group-hover:text-white "> Testing-1.... </h1>

                    <p className="group-hover:bg-black group-hover:text-white"> Testing-2.... </p>

                </a>
            </div>
        </>
    )
}

export default Interactivity