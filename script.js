// The pitch video. Set ONE of these on the #pitch element in index.html:
//   data-youtube="VIDEO_ID"   the part after v= in a YouTube link
//   data-vimeo="VIDEO_ID"     the number in a Vimeo link
// Until one is set, a placeholder box shows.
(function () {
  var box = document.getElementById('pitch');
  if (!box) return;
  var yt = (box.getAttribute('data-youtube') || '').trim();
  var vm = (box.getAttribute('data-vimeo') || '').trim();
  var src = '';
  if (yt) src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(yt) + '?rel=0';
  else if (vm) src = 'https://player.vimeo.com/video/' + encodeURIComponent(vm);
  if (!src) return;
  var f = document.createElement('iframe');
  f.src = src;
  f.title = 'Draft value proposition pitch video';
  f.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  f.setAttribute('allowfullscreen', '');
  f.loading = 'lazy';
  box.replaceChildren(f);
})();
