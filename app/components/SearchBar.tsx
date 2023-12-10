import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="flex w-full max-w-xl mx-auto space-x-2 items-center justify-center">
      <Input type="text" placeholder="Search products..." />
      <Button className="rounded-full px-3 bg-blue-500 hover:bg-blue-400">
        <SearchIcon className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default SearchBar;
