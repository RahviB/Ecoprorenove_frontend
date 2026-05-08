import Image from "next/image";

type LogoProps = {
  size?: number;
  variant?: "navbar" | "footer";
  className?: string;
};

const NAV = { src: "/images/logo-ecoprorenove-final.png", ratio: 800 / 130 };
const FOOTER = { src: "/images/logo-ecoprorenove-white.webp", ratio: 800 / 250 };

export default function Logo({
  size = 42,
  variant = "navbar",
  className,
}: LogoProps) {
  const { src, ratio } = variant === "footer" ? FOOTER : NAV;
  const width = Math.round(size * ratio);

  return (
    <Image
      src={src}
      alt="ECOPRORENOVE — expert de la transition énergétique"
      width={width}
      height={size}
      priority
      className={`logo ${className ?? ""}`}
    />
  );
}
