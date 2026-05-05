import Image from "next/image";

type LogoProps = {
  size?: number;
  variant?: "navbar" | "footer";
  className?: string;
};

export default function Logo({
  size = 42,
  variant = "navbar",
  className,
}: LogoProps) {
  const src =
    variant === "footer"
      ? "/images/logo-ecoprorenove-white.webp"
      : "/images/logo-ecoprorenove.webp";

  const width = Math.round(size * (800 / 250));

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
