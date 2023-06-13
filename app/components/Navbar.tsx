import Link from "next/link";
import { FC } from "react";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <div className="flex  ">
      <div className="flex flex-col bg-slate-800 w-full h-full min-h-screen">
        <Link href="../about/us">About us</Link>
        <Link href="../about/someone">About Someone</Link>
        <Link href="../about">About</Link>
        <Link href="../listofposts">Post</Link>
      </div>
    </div>
  );
};

export default Navbar;
