"use client";

import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <Loader />;
    </div>
  );
}

// "use client";

// import HomeButton from "@/components/HomeButton";
// import Loader from "@/components/Loader";

// export default function Loading() {
//   return (
//     <>
//       <nav className="invisible">
//         <HomeButton />
//       </nav>
//       <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
//         <Loader />;
//       </div>
//     </>
//   );
// }
