import MyButton from "../Button";

export default function CallToAction() {
  return (
    <div className="mx-auto max-w-screen-lg py-20">
      <div className="h-[272px] bg-[url('/img/img11.jpg')] relative bg-no-repeat bg-right bg-cover rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-accents-color to-accent-green w-full h-full absolute opacity-70" />
        <div className="relative flex flex-col justify-between py-[39px] px-9 max-w-[718px]">
          <h1 className="text-3xl font-semibold mb-6 text-white">
            Mari bergabung menjadi keluarga Cinta Quran Foundation agar bisa
            berbagi dengan sesama
          </h1>
          <div>
            <MyButton
              rightIcon={
                <img src="/icon/ic-arrow-accent.svg" alt="register-now" />
              }
              className="w-1/2 justify-center bg-white border-0 text-accents-color py-2"
            >
              Daftar Sekarang
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
