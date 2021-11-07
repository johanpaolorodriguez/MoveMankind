import { useHistory } from "react-router-dom";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";

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
                    class="flex hover:text-blue-500 items-center"
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
                  <button>
                    <StarIcon className="w-6 h-6 text-blue-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex w-full space-y-2 overflow-hidden bg-white border border-transparent rounded-lg filter drop-shadow-xl hover:border-primary">
                  <img
                    src={startup.logo}
                    alt=""
                    className="object-contain object-center w-40 h-40 p-4"
                  />
                  <div className="p-4">
                    <p className="text-2xl font-bold">{startup.name}</p>
                    <p className="flex items-center space-x-1 text-base font-semibold">
                      <LocationMarkerIcon className="inline w-4 h-4" />
                      <span>
                        {startup.headQuarters}, {startup.country}
                      </span>
                    </p>
                    <p className="text-sm">{startup.description}</p>
                  </div>
                </div> */}
        {/* ); })} */}
      </div>
    </div>
  );
};

export default Table;
