import Link from 'next/link';
import { buttonVariants } from './ui/Button';

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <div className="container h-full mx-auto flex items-center justify-between gap--2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <p className="hidden text-[#5AF] font-bold md:block">Porum</p>
        </Link>

        {/* actions */}
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
