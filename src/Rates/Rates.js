function Rates() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <table className="table-fixed m-10">
        <thead className="border-solid border-2 border-black">
        <tr>
          <th>Service</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody className="border-solid border-2 border-black">
        <tr>
          <td className="border-solid border-2 border-black">Hourly Rate</td>
          <td className="border-solid border-2 border-black">£10</td>
        </tr>
        <tr>
          <td className="border-solid border-2 border-black">Half Day Rate</td>
          <td className="border-solid border-2 border-black">£40</td>
        </tr>
        <tr>
          <td className="border-solid border-2 border-black">Full Day Rate</td>
          <td className="border-solid border-2 border-black">£80</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}  

export default Rates;