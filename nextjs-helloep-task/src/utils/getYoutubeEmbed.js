export function getYoutubeEmbed(url) {
  if (!url) return null;

  // shorts
  let match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  // youtu.be
  match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  // watch?v=
  match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  // embed
  match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  return null;
}
