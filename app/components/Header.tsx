import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center  space-x-4 bg-white sticky top-0 border-b-2 p-4 z-30 dark:bg-inherit">
      <Logo />
      <SearchBar />
      <ThemeToggleButton />
    </div>
  );
};

export default Header;
