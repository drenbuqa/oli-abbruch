export type GalleryCategory = "Alle" | "Abbruch" | "Stahlträger" | "Asbestsanierung";

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Alle">;
};

export const galleryImages: GalleryImage[] = [
  // Abbruch
  { id: 1,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-01.jpg",        alt: "Abbrucharbeiten 1",  category: "Abbruch" },
  { id: 2,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02.jpg",        alt: "Abbrucharbeiten 2",  category: "Abbruch" },
  { id: 3,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02-2.jpg",      alt: "Abbrucharbeiten 3",  category: "Abbruch" },
  { id: 4,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02-3.jpg",      alt: "Abbrucharbeiten 4",  category: "Abbruch" },
  { id: 5,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02-4.jpg",      alt: "Abbrucharbeiten 5",  category: "Abbruch" },
  { id: 21, src: "https://res.cloudinary.com/drljgepgy/image/upload/v1786312743/IMG_0349_inru6e.jpg", alt: "Baustellenräumung", category: "Abbruch" },
  // Stahlträger
  { id: 6,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36.jpg",   alt: "Stahlträger 1",      category: "Stahlträger" },
  { id: 7,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-2.jpg", alt: "Stahlträger 2",      category: "Stahlträger" },
  { id: 8,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-3.jpg", alt: "Stahlträger 3",      category: "Stahlträger" },
  { id: 9,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-4.jpg", alt: "Stahlträger 4",      category: "Stahlträger" },
  { id: 10, src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-5.jpg", alt: "Stahlträger 5",      category: "Stahlträger" },
  { id: 11, src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-6.jpg", alt: "Stahlträger 6",      category: "Stahlträger" },
  { id: 12, src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-37.jpg",   alt: "Stahlträger 7",      category: "Stahlträger" },
  { id: 22, src: "https://res.cloudinary.com/drljgepgy/image/upload/v1786312347/0fe2350a-7ea9-4ad7-ac50-0534ba642de3_mzwwjr.jpg", alt: "Demontage", category: "Stahlträger" },
  // Asbestsanierung
  { id: 13, src: "/images/asbest/PHOTO-2026-07-13-22-38-16.jpg",         alt: "Asbestsanierung 1",  category: "Asbestsanierung" },
  { id: 14, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-2.jpg",       alt: "Asbestsanierung 2",  category: "Asbestsanierung" },
  { id: 15, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-3.jpg",       alt: "Asbestsanierung 3",  category: "Asbestsanierung" },
  { id: 16, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-4.jpg",       alt: "Asbestsanierung 4",  category: "Asbestsanierung" },
  { id: 17, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-5.jpg",       alt: "Asbestsanierung 5",  category: "Asbestsanierung" },
  { id: 18, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-6.jpg",       alt: "Asbestsanierung 6",  category: "Asbestsanierung" },
  { id: 19, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-7.jpg",       alt: "Asbestsanierung 7",  category: "Asbestsanierung" },
  { id: 20, src: "/images/asbest/PHOTO-2026-07-13-22-38-17.jpg",         alt: "Asbestsanierung 8",  category: "Asbestsanierung" },
];

// 10 preview images for the homepage — evenly spread across categories
export const previewIds = [1, 6, 13, 3, 8, 15, 21, 10, 17, 12];

export const galleryCategories: GalleryCategory[] = ["Alle", "Abbruch", "Stahlträger", "Asbestsanierung"];
