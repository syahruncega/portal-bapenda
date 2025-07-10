import Image from "next/image";
import Link from "next/link";

type HeaderProps = object;
const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/">
      {/* <div className="dark:hidden text-2xl font-bold">BAPENDA</div>
      <div className="dark:block hidden text-2xl font-bold">BAPENDA</div> */}
      <Image
        src="/images/logo/brand.png"
        alt="logo"
        width={100}
        height={34}
        // style={{ width: "auto", height: "auto" }}
        quality={100}
        priority={true}
        // className="dark:hidden"
      />

      {/* <Image
        src="/images/logo/bapenda-logo-dark.png"
        alt="logo"
        width={160}
        height={34}
        // style={{ width: "auto", height: "auto" }}
        quality={100}
        priority={true}
        className="dark:block hidden"
      /> */}
    </Link>
  );
};

export default Logo;
