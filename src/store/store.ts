import { create } from "zustand";

import data from "../../data.json";

export type GalleryFilter =
  | "wrap-vinyl"
  | "auto-detailing"
  | "car-wash"
  | "painting"
  | "all";

type GalleryStore = {
  images: (typeof data)["gallery"];
  filteredImages: (typeof data)["gallery"];
  setImageFilter: (filter: GalleryFilter) => void;
};

export const useGalleryStore = create<GalleryStore>((set) => ({
  images: data["gallery"],
  filteredImages: data["gallery"],
  setImageFilter: (filter) => {
    set((state) => ({
      ...state,
      filteredImages:
        filter === "all"
          ? state.images
          : state.images.filter((image) => image.category === filter),
    }));
  },
}));
