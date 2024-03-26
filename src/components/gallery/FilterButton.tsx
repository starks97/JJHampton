import type { GalleryFilter } from "../../store";

export type FilterButtonType = {
  handleFilter: (filter: GalleryFilter) => void;
  category: string;
  filter: GalleryFilter;
};

export default function FilterButton({
  handleFilter,
  category,
  filter,
}: FilterButtonType) {
  return (
    <>
      <button
        type="button"
        className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        onClick={() => handleFilter(filter)}
      >
        {category}
      </button>
    </>
  );
}
