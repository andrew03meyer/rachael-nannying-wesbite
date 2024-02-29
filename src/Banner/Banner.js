function Banner(){
    return (
        <>
        {/* <div className="h-20 w-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-300"></div> */}
        <div className="flex justify-center h-20 w-full bg-gradient-to-t from-orange-300 to-orange-100 font-serif text-md italic items-center p-2 text-white">
        {/* bg-gradient-to-bl from-orange-300 via-orange-200 to-orange-300 */}
            <table className="w-5/6 h-5/6 text-center">
                <tbody>
                    <tr>
                        <td className="w-32"><a href="/" className="hover:underline text-gray-400 hover:text-gray-500 items-center">Home</a></td>
                        <td className="text-orange-300">|</td>
                        <td className="w-32"><a href="/about" className="hover:underline text-gray-400 hover:text-gray-500 items-center">About</a></td>
                        <td className="text-orange-300">|</td>
                        <td className="w-32"><a href="/rates" className="hover:underline text-gray-400 hover:text-gray-500 items-center">Rates</a></td>
                        <td className="text-orange-300">|</td>
                        <td className="w-32"><a href="/contact" className="hover:underline text-gray-400 hover:text-gray-500 items-center">Contact Us</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Banner;