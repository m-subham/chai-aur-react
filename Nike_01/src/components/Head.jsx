
const Head = () => {
    return(
        <div className='bg-cyan-100 drop-shadow-sm p-2 backdrop-blur' >
        <nav className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className="flex items-center justify-between">
                <img src="\images\logo.png" alt="logo" className='max-h-12 w-auto' />
                <div className="flex gap-10">
                    <a href="#" className="text-lg font-semibold leading-8 text-gray-900">Menu</a>
                    <a href="#" className="text-lg font-semibold leading-8 text-gray-900">Features</a>
                    <a href="#" className="text-lg font-semibold leading-8 text-gray-900">About Us</a>
                    <a href="#" className="text-lg font-semibold leading-8 text-gray-900">Contact Us</a>
                </div>
                <button type='button' className='p-2  rounded-md text-lg  text-white bg-gray-900'>Login</button>
            </div>
        </nav>
    </div>
    
                 
    )
}

export default Head