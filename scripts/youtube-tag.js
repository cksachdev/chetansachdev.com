// Restores the built-in {% youtube VIDEO_ID [Title] %} tag removed in Hexo 6+
// Usage: {% youtube dQw4w9WgXcQ %}
//        {% youtube dQw4w9WgXcQ "How to fix the GPU issue" %}
hexo.extend.tag.register('youtube', function(args) {
  const id = args[0];
  const title = args.slice(1).join(' ').replace(/^["']|["']$/g, '') || 'YouTube video';
  return `<div class="video-container">
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/${id}"
    title="${title}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"></iframe>
</div>`;
});
