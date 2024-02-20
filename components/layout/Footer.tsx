import Image from "next/image";
import MyButton from "../Button";
import Link from "next/link";
import IconText from "../IconText";
import { FiFacebook } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[url('/bg-footer.svg')] bg-no-repeat bg-bottom py-16 md:px-0 px-2">
      <section className="mx-auto max-w-[1140px] flex flex-col gap-y-14">
        <div className="grid md:grid-cols-3 justify-between gap-[51px]">
          <div>
            <Image src="/logo/logo.svg" alt="logo" width={150} height={40} />
            <p className="mt-6 mb-8">
              Cinta Quran Foundation adalah lembaga independen yang mendakwahkan
              Alquran sebagai solusi dan inspirasi untuk negeri.
            </p>
            <MyButton
              className="bg-accents-color text-white text-sm font-semibold w-full"
              leftIcon={
                <img
                  src="/icon/ic-arrow-right.svg"
                  alt="donation-button-icon"
                />
              }
            >
              Lihat Laporan CQ Foundation
            </MyButton>
          </div>
          <div className="flex gap-[51px]">
            <ul>
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
                <Link href={"/"}>Inspirasi</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"/"}>Volunteer</Link>
              </li>
              <li>
                <Link href={"/"}>Tentang Kami</Link>
              </li>
              <li>
                <Link href={"/"}>FAQ</Link>
              </li>
              <li>
                <Link href={"/"}>Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link href={"/"}>Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <IconText
              title="Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota Bogor 16153, Jawa Barat, Indonesia."
              iconSrc="/icon/ic-location.svg"
              direction="row"
              className="gap-4 items-start"
            />
            <IconText
              title="info@cintaquran.or.id"
              iconSrc="/icon/ic-email.svg"
              direction="row"
              className="gap-4 items-start"
            />
            <IconText
              title="(0251) 85 717 62"
              iconSrc="/icon/ic-phone.svg"
              direction="row"
              className="gap-4 items-start"
            />
            <div>
              <span className="text-sm font-semibold">Ikuti Kami di</span>
              <figure className="flex items-baseline gap-2">
                <Link href={"/"}>
                  <FaFacebook />
                </Link>
                <Link href={"/"}>
                  <FaYoutube />
                </Link>
                <Link href={"/"}>
                  <FaInstagram />
                </Link>
                <Link href={"/"}>
                  <FaLinkedin />
                </Link>
              </figure>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm">
            &copy; Copyright CintaQuran® Foundation All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
