import SearchBar from "./SearchBar";
import { ProfileDropdown } from "./ProfileDropdown";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center  space-x-4 bg-white sticky top-0 border-b-2 p-4">
      <Logo />
      <SearchBar />
      <ProfileDropdown />
    </div>
  );
};

export default Header;
