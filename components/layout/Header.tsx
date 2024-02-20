"use client";

import Image from "next/image";
import Link from "next/link";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import MyButton from "../Button";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-white py-3 sticky top-0 z-10 px-2 md:px-0">
      <nav className="mx-auto max-w-[1140px] flex items-center justify-between">
        <figure>
          <Image src="/logo/logo.svg" alt="logo" width={150} height={40} />
        </figure>
        <button
          className="md:hidden block"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiAlignJustify size={32} />
        </button>
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } md:flex md:flex-row flex-col md:items-center gap-x-6 fixed md:static top-0 left-0 bottom-0 right-0 bg-white py-6 md:py-0`}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden block absolute top-4 right-4"
          >
            <MdClose size={32} />
          </button>
          <ul className="flex md:flex-row flex-col items-center gap-6 justify-center md:justify-normal">
            <li>
              <Link href={"/"}>Program</Link>
            </li>
            <li>
              <Link href={"/"}>Kajian</Link>
            </li>
            <li>
              <Link href={"/"}>Donasi</Link>
            </li>
            <li>
              <Link href={"/"}>Kemitraan</Link>
            </li>
            <li>
              <Link href={"/"}>Update</Link>
            </li>
            <li>
              <Link href={"/"}>Kontak</Link>
            </li>
          </ul>
          <div className="flex items-center gap-6 justify-center md:mt-0 mt-6">
            <FiSearch />
            <MyButton className="border-accents-color text-accents-color">
              Masuk
            </MyButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
