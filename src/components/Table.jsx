export const Table = () => {
  return (
    <table className="w-full mt-6 bg-[#292E36] rounded-lg text-center text-gray-300">
      <thead className="uppercase text-sm">
        <tr className="h-10 border-b-2">
          <th>Usuario</th>
          <th>Forma</th>
          <th>MA/FSN</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td>Carlos</td>
          <td>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </td>
          <td>1321</td>
        </tr>
      </tbody>
    </table>
  );
};
