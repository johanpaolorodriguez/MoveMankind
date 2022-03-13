import { withFirebase } from "../Firebase";

const SignInWithGroup = (props) => {
  const onSignIn = async (provider) => {
    try {
      switch (provider) {
        case "Google":
          await props.firebase.doSignInWithGoogle();
          break;
        case "Facebook":
          await props.firebase.doSignInWithFacebook();
          break;
        case "Twitter":
          await props.firebase.doSignInWithTwitter();
          break;
        case "Github":
          await props.firebase.doSignInWithGithub();
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid grid-cols-4 gap-4">
      <div className="flex items-center col-span-full">
        <div className="flex-grow bg bg-gray-400 h-0.5"></div>
        <div className="flex-grow-0 mx-5 font-normal text-blue-900 font-opensans">
          OR
        </div>
        <div className="flex-grow bg bg-gray-400 h-0.5"></div>
      </div>

      <button
        className="flex items-center justify-center w-full p-2 space-x-4 text-lg font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white col-span-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500"
        onClick={() => onSignIn("Google")}
      >
        <svg
          className=""
          viewBox="0 0 24 24"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
              fill="#4285F4"
              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
              fill="#34A853"
              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
              fill="#FBBC05"
              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
              fill="#EA4335"
              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
          </g>
        </svg>
        <span className="">Sign in with Google</span>
      </button>

      <button
        className="flex items-center justify-center w-full col-span-1 p-2 space-x-4 text-lg font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500"
        onClick={() => onSignIn("Apple")}
      >
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          {" "}
          <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
        </svg>
      </button>

      <button
        className="flex items-center justify-center w-full col-span-1 p-2 space-x-4 text-lg font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500"
        onClick={() => onSignIn("Facebook")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30px"
          height="30px"
        >
          <path fill="#3f51b5" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
          <path
            fill="#fff"
            d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
          />
        </svg>
      </button>

      <button
        className="flex items-center justify-center w-full col-span-1 p-2 space-x-4 text-lg font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500"
        onClick={() => onSignIn("Twitter")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30px"
          height="30px"
        >
          <path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
          <path
            fill="#fff"
            d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
          />
        </svg>
      </button>

      <button
        className="flex items-center justify-center w-full col-span-1 p-2 space-x-4 text-lg font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500"
        onClick={() => onSignIn("Github")}
      >
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          {" "}
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
        </svg>
      </button>
    </section>
  );
};

export default withFirebase(SignInWithGroup);
