import { useMemo, useState } from "react";
import type { GalleryFilter } from "../../store";
import { useGalleryStore } from "../../store";
import FilterButton from "./FilterButton";

import "../../styles/global.css";

export default function Gallery() {
  const gallery = useGalleryStore();

  const handleFilter = (filter: GalleryFilter) => {
    gallery.setImageFilter(filter);
  };

  return (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap ">
        <FilterButton
          handleFilter={handleFilter}
          category="All Categories"
          filter="all"
        />
        <FilterButton
          handleFilter={handleFilter}
          category="Wrap Vinyl"
          filter="wrap-vinyl"
        />

        <FilterButton
          handleFilter={handleFilter}
          category="Auto Detailing"
          filter="auto-detailing"
        />
        <FilterButton
          handleFilter={handleFilter}
          category="Car Wash"
          filter="car-wash"
        />
        <FilterButton
          handleFilter={handleFilter}
          category="Painting"
          filter="painting"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {gallery.filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative hover:scale-105 transition-transform duration-300 ease-in-out w-full h-80 "
            role="button"
            id="gallery-image"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
}
