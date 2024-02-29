import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/images/logo.jpg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function MyNavbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      setMenuOpen(false); // Close menu after successful login
    }
  }, [status]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await signOut({ redirect: false });
      router.push("/"); // Redirect to homepage after logout
    }
  };

  return (
    <nav className="bg-cyan-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center mr-4">
              <Image src={logo} alt="logo" width={40} height={40} />
            </a>
          </Link>
          <Link href="/about" className="text-white hover:underline mr-4">
            About
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden container mx-auto mt-2">
          <ul className="flex flex-col">
            <NavItem href="/hospitals" text="Hospitals" />
            <NavItem href="/alternativemap" text="Map" />
            {session ? (
              <>
                <NavItem href={`/profile/`} text="Profile" />
                <button
                  onClick={logout}
                  className="text-white hover:underline my-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <div>
                <NavItem href="/login" text="Login" />
                <NavItem href="/signup" text="Signup" />
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

const NavItem = ({ href, text }) => (
  <li className="my-2">
    <Link href={href}>
      <a className="text-white hover:underline">{text}</a>
    </Link>
  </li>
);

export default MyNavbar;

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import logo from "@/images/logo.jpg";
// import Image from "next/image";
// import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// function MyNavbar() {
//   const { data: session, status, update } = useSession();
//   console.log("session :>> ", session);

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(session?.user);

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     if (session?.user) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [status]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const logout = async () => {
//     if (window.confirm("Are you sure you want to log out?")) {
//       await signOut({ redirect: false });
//       await router.push("/");
//       location.reload();
//     }
//   };

//   return (
//     <div className="bg-cyan-700 p-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="logo"
//               className="mr-2 w-10 h-10 rounded-full"
//             />
//           </Link>
//           <Link href="/about" className="text-white hover:underline mr-4">
//             About
//           </Link>
//           <Link href="/contact" className="text-white hover:underline mr-3">
//             Contact
//           </Link>
//         </div>

//         {/* Hamburger menu */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden">
//           <Link
//             href="/hospitals"
//             className="block text-white hover:underline my-2"
//           >
//             Hospitals
//           </Link>
//           {/* <Link href="/map" className="block text-white hover:underline my-2">
//             Map
//           </Link> */}
//           <Link
//             href="/alternativemap"
//             className="block text-white hover:underline my-2"
//           >
//             Map
//           </Link>
//           {isLoggedIn ? (
//             <>
//               <Link
//                 href={`/profile/`}
//                 className="mx-1 text-2xl text-white	 no-underline hover:font-semibold focus:font-semibold"
//               >
//                 Profile
//               </Link>
//               <button
//                 onClick={() => {
//                   logout();
//                 }}
//                 className="block text-white hover:underline my-2"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <div>
//               <Link
//                 href="/login"
//                 className="block text-white hover:underline my-2"
//               >
//                 Login
//               </Link>
//               <Link href="/signup">Signup</Link>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center ml-auto">
//         <Link
//           href="/alternativemap"
//           className="text-white hover:underline mr-4"
//         >
//           Map
//         </Link>
//         <Link href="/hospitals" className="text-white hover:underline mr-4">
//           Hospitals
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               href={`/profile/${session?.user?.image}`}
//               className="block text-white hover:underline mr-2 my-2"
//             >
//               Profile
//             </Link>
//             <button
//               onClick={() => {
//                 logout();
//               }}
//               className="block text-white hover:underline my-2"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <div className="flex flex-row">
//             <Link
//               href="/login"
//               className="block text-white hover:underline mr-2 my-2"
//             >
//               Login
//             </Link>
//             <Link
//               className="block text-white hover:underline mr-2 my-2"
//               href="/signup"
//             >
//               Signup
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyNavbar;
