// Keep the bare domain canonical, matching the site's existing metadata.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.rabbitriversystems.com') {
      url.hostname = 'rabbitriversystems.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    // Cloudflare's asset binding retains the existing headers and path redirects.
    return env.ASSETS.fetch(request);
  },
};
