import { useHistory } from "react-router-dom";
import FollowButton from "../Follow";

const Table = ({ startups }) => {
  const history = useHistory();
  const handleClick = (uid) => {
    history.push(`/startups/${uid}`);
  };
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <table
          className="text-left border-separate"
          style={{ borderSpacing: "0px 1rem" }}
        >
          <thead className="">
            <tr>
              <th scope="col" className="">
                Companies
              </th>
              <th scope="col" className="">
                Industry
              </th>
              <th scope="col" className="">
                Description
              </th>
              <th scope="col" className="">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="">
            {startups.map((startup) => (
              <tr key={startup.uid} className="h-20 px-6 py-4 my-2 bg-white">
                <td className="p-2 border border-gray-300 rounded-tl-lg rounded-bl-lg">
                  <div
                    className="flex items-center hover:text-blue-500"
                    onClick={() => handleClick(startup.uid)}
                  >
                    <img
                      src={startup.logo}
                      alt=""
                      className="object-contain object-center w-12 h-12 p-4 rounded-full"
                    />
                    {startup.name}
                  </div>
                </td>
                <td className="p-2 border-t border-b border-r border-gray-300">
                  {startup.categories}
                </td>
                <td className="p-2 border-t border-b border-r border-gray-300">
                  {startup.description}
                </td>
                <td className="p-2 border-t border-b border-gray-300">
                  {startup.headQuarters}, {startup.country}
                </td>
                <td className="p-2 border-t border-b border-r border-gray-300 rounded-tr-lg rounded-br-lg">
                  <FollowButton startupUid={startup.uid} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
