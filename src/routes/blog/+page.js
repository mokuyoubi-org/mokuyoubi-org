export async function load() {
  const posts = import.meta.glob('./posts/*.md', { eager: true });

  const list = Object.entries(posts).map(([path, post]) => ({
    slug: path.split('/').pop().replace('.md', ''),
    ...post.metadata
  }));

  // 日付の新しい順
  list.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { posts: list };
}