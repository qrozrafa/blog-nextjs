import { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export function Link({ children, href, ...rest }: LinkProps) {
  return (
    <>
      <a
        href={href}
        className="group text-xl text-link transition-all duration-300 ease-in-out"
      >
        <span className="bg-gradient-to-r from-link to-link bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
          {children}
        </span>
      </a>
    </>
  );
}
