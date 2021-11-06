import { Link } from "react-router-dom";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Table = ({ startups }) => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        {startups.map((startup) => {
          return (
            <article className="max-w-2xl" key={startup.uid}>
              <Link to={`/startups/${startup.uid}`}>
                <div className="flex w-full space-y-2 overflow-hidden bg-white border border-transparent rounded-lg filter drop-shadow-xl hover:border-primary">
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
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
