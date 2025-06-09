export const getMeta = ({ title, description, keywords, image }) => ({
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    images: [image],
  },
});
