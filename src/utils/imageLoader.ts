// Dynamically load image files from the Images folder in Vite
const images = import.meta.glob<{ default: string }>(
  '../Images/*.{png,jpg,jpeg,webp}',
  { eager: true }
);

export const loadImage = (fileName: string) => {
  const imagePath = `../Images/${fileName}`;
  return images[imagePath]?.default || '';
};
