import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  async function submitSearchForm(formData: FormData) {
    "use server";
    const searchQuery = formData.get("searchQuery");
    if (searchQuery) {
      redirect(`/search/${searchQuery}`);
    }
  }

  return (
    <div className="w-full">
      <form action={submitSearchForm}>
        <div className="flex space-x-2 items-center justify-center max-w-xl mx-auto">
          <Input
            name="searchQuery"
            type="text"
            placeholder="Search products..."
          />
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
