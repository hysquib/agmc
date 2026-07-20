interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/agmc/agmc-logo.png"
      alt="AGMC"
      width={size}
      height={size}
      className={`rounded-lg object-contain ${className}`}
    />
  );
}
