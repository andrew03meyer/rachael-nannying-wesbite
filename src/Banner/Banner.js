function Banner(){
    return (
        <>
        {/* <div className="h-20 w-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-300"></div> */}
        <div className="flex justify-center h-24 w-full bg-gradient-to-b from-white via-gray-200 to-gray-200 font-roboto text-md italic items-center p-3 text-white">
        {/* bg-gradient-to-bl from-orange-300 via-orange-200 to-orange-300 */}
            <table className="w-5/6 h-5/6 text-center text-gray-400 text-sm">
                <tbody>
                    <tr>
                        <td className="w-32">@ Copyright Rachael Nannying 2024/2025</td>
                    </tr>
                    <tr>
                        <td className="w-32">Material used with consent</td>
                    </tr>
                    <tr>
                        <td className="w-32">Built by Andrew Meyer</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Banner;