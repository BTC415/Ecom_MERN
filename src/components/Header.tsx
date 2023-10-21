import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

type Props = {};

const Header = (props: Props) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-fast_blue p-1 flex-grow py-2">
        <div className="h-12 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer overflow-hidden mt-2"
            src="/fastlogo.svg"
            width={150}
            height={40}
            alt="Fast marketplace"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#01C4CC] hover:bg-[#03a1a7]">
          <input
            type="text"
            className="bg-white p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* right menu */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="link"
          >
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div
            onClick={() => session && router.push("/orders")}
            className="cursor-pointer link"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 -right-2 md:right-10 w-4 h-4 bg-[#01C4CC] text-center rounded-full text-black font-bold">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-fast_blue-light text-white text-sm">
        <p className="flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Movies & TV</p>
        <p className="link">Sports & Outdoors</p>
        <p className="link">Deals Store</p>
        <p className="link hidden md:inline-flex">Buy Again</p>
        <p className="link hidden md:inline-flex">Beauty & Personal Care</p>
        <p className="link hidden lg:inline-flex">Health & Household</p>
        <p className="link hidden lg:inline-flex">Grocery</p>
        <p className="link hidden lg:inline-flex">Work Supplies</p>
        <p className="link hidden lg:inline-flex">Books</p>
      </div>
    </header>
  );
};

export default Header;
