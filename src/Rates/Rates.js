import TopBanner from '../TopBanner/TopBanner';

function Rates() {
  return (
    <div className="flex flex-col items-center relative w-screen h-screen mb-52">
      <TopBanner />
      <div className='w-full mb-16 p-5'>
        <h1 className="w-full text-4xl m-5 font-bold text-black">Rates:</h1>
        <p className='w-full'>Cras aliquam, leo at tincidunt sodales, orci nulla gravida sapien, sollicitudin ultricies elit nisl ac nisi. Donec magna risus, luctus sit amet justo in, convallis tristique dolor. Nam vulputate lacus ante, in accumsan enim efficitur ac. Nullam faucibus diam in diam ullamcorper malesuada. Nullam ut convallis nisi. Aenean interdum est in nunc vestibulum eleifend et vel libero. Morbi tellus turpis, dapibus ac sagittis nec, gravida ut dolor. Morbi arcu ligula, efficitur nec ullamcorper pharetra, euismod vel ex.</p>
      </div>
      <table className="w-5/6 h-5/6 text-center border-solid border-black border-2 mb-96">
        <tbody>
          <tr className='border-solid border-black border-2'>
            <td className="w-32 p-2 border-solid border-black border-2">1 Child</td>
            <td className="w-32 p-2 border-solid border-black border-2">2 Children</td>
            <td className="w-32 p-2 border-solid border-black border-2">3 Children</td>
          </tr>
          <tr className='border-solid border-black border-2'>
            <td className="w-32 p-2 border-solid border-black border-2">$20.00</td>
            <td className="w-32 p-2 border-solid border-black border-2">$30.00</td>
            <td className="w-32 p-2 border-solid border-black border-2">$40.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}  

export default Rates;