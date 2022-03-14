import { useHistory } from "react-router-dom";
import FollowButton from "../Follow";
import RegisterInterestButton from "../RegisterInterest";

const Table = ({ startups }) => {
  const history = useHistory();
  const handleClick = (uid) => {
    history.push(`/startups/${uid}`);
  };
  return (
    <div className="w-full">
      {/* mobile */}
      <div className="flex flex-col divide-y divide-solid max-w-[90rem] w-full mx-auto mb-24 ">
        {startups.map((startup, key) => (
          <div
            key={startup.uid}
            className="flex min-h-[14rem] p-5 space-x-2 | md:min-h-0"
          >
            <div className="flex-none w-24 | md:w-10 md:hidden">
              <img
                src={startup.logo}
                alt=""
                className="object-contain | md:pt-2"
              />
            </div>
            <div
              className="flex flex-col space-y-2.5 w-full | md:grid md:grid-cols-10 md:gap-2"
              style={{ minWidth: 0 }}
            >
              <div className="hidden pt-2 | md:flex w-full md:justify-evenly">
                <FollowButton startupUid={startup.uid} />

                <img
                  src={startup.logo}
                  alt=""
                  className="hidden object-contain | md:block md:h-auto md:w-10 col-span-1"
                />
              </div>

              <div className="flex justify-between w-full | md:col-span-2 md:flex-col lg:col-span-2">
                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {startup.name}
                  </h3>
                  <h4 className="text-sm">
                    {startup.city ? `${startup.city}, ` : ""}
                    {startup.country}
                  </h4>
                </div>
                <span className="md:hidden">
                  <FollowButton startupUid={startup.uid} />
                </span>

                <div className="hidden text-[0.6rem] space-x-2 | md:flex md:flex-wrap">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline px-2 py-1 my-1 rounded-md bg-slate-200 font-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 lg:col-span-6 md:flex md:flex-col md:justify-between md:justify-self-start">
                <p className="text-sm line-clamp-2">{startup.description}</p>
                {startup.investors ? (
                  <p className="text-sm">Investors: {startup.investors}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="text-xs space-x-2 flex flex-wrap | md:hidden">
                {startup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline px-2 py-1 my-1 rounded-md bg-slate-200 font-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="md:col-span-2 | lg:col-span-1">
                <RegisterInterestButton startupUid={startup.uid} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* tablet/ laptop */}
      {/* <div className="hidden max-w-6xl mx-auto | md:block">
        <table
          className="text-left border-separate"
          style={{ borderSpacing: "0px 1rem" }}
        >
          <tbody className="">
            {startups.map((startup) => (
              <tr key={startup.uid} className="h-20 px-6 py-4 my-2 bg-white">
                <td className="p-2 border border-gray-300 rounded-tl-lg rounded-bl-lg">
                  <div className="flex items-center space-x-2 font-semibold">
                    <FollowButton startupUid={startup.uid} />
                    <div className="flex-none w-8">
                      <img
                        src={startup.logo}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                    <span
                      className="underline hover:text-blue-500 text-primary"
                      onClick={() => handleClick(startup.uid)}
                    >
                      {startup.name}
                    </span>
                  </div>
                </td>
                <td className="p-2 border-t border-b border-r border-gray-300">
                  {startup.categories}
                </td>
                <td className="p-2 border-t border-b border-r border-gray-300">
                  {startup.description}
                </td>
                <td className="p-2 border-t border-b border-r border-gray-300 rounded-tr-lg rounded-br-lg">
                  {startup.headQuarters}, {startup.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Table;
