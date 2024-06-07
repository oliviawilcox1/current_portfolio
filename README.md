## 🪜 Project structure

```bash
📦 root
├── 🗂️ components             # React files to customize the components for the site
├── 🗂️ css                    # Tailwind and Prisma CSS files
├── 🗂️ data                   # Files to change the content of pages
│ ├── 🗂️ authors              # Markdown files for authors of blog
│ ├── 🗂️ blog                 # Markdown files for blog posts
│ └── 🗂️ snippets             # Markdown files for code snippets
├── 🗂️ layouts                # Templates for pages
├── 🗂️ lib                    # Non-react modules
├── 🗂️ pages                  # Page files for website
├── 🗂️ public                 # Static files for images, rss, and assets
│ ├── 🗂️ static               # Holds images, favicons, and other assets
│ │ ├── 🗂️ favicon            # Favicon files
│ │ └── 🗂️ images             # Image Files
│ ├── 📝 feed.xml             # RSS feed
│ ├── 📝 robots.txt           # Helps crawlers to crawl your site
│ └── 📝 sitemap.xml          # Sitemap
├── 🗂️ scripts                # Scripts to run for different tasks
├── 📝 tailwind.config.js     # Contains tailwind stylesheet to change the look
└── 📝 next.config.js         # configuration related to Next.js
```

## 🚀 Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)
