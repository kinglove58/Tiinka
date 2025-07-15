const fs = require('fs');
const axios = require('axios');
const { SitemapStream, streamToPromise } = require('sitemap');

// Fetch blog posts
axios.get('https://api.tinkahealthservices.com/api/blogs')
  .then(response => {
    const posts = response.data;

    const smStream = new SitemapStream({ hostname: 'https://tinkahealthservices.com/' });
    const writeStream = fs.createWriteStream('public/sitemap.xml');

    smStream.pipe(writeStream);

    smStream.write({ url: '/', changefreq: 'weekly', priority: 0.8 });

    posts.forEach(post => {
      smStream.write({ url: `/blogs/${post.slug}`, lastmod: post.updated_at, changefreq: 'weekly', priority: 0.5 });
    });

    smStream.end();

    streamToPromise(smStream).then(() => {
      console.log('Sitemap generated successfully.');
    });
  })
  .catch(error => {
    console.error('Error fetching blog posts:', error);
  });
