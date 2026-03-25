const Container = () => {

    return (

        <>

            <div className='bg-amber-300'>

                <ul className='flex justify-end [&>*]:p-4'>

                    <li> <a href=""> Home </a></li>
                    <li> <a href=""> About  </a></li>
                    <li> <a href=""> Contact  </a></li>
                    <li> <a href=""> Login </a></li>

                </ul>

            </div>

            <div className='text-7xl bg-amber-600 container m-auto '>
                container class
            </div>

            <div className='text-7xl bg-amber-500 container m-auto '>
                Main  Page
            </div>

            <div className='text-7xl bg-amber-400 container m-auto '>
                Demo  class
            </div>

        </>
    )
}

export default Container 