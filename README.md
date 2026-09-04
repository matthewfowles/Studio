# Studio Matt Fowles

A clean, modern one-page agency site for Matthew Fowles — web and mobile builds for European SMEs.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel Analytics & Speed Insights**

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

## Deploy to Vercel

### Initial Setup

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy the project**:
   ```bash
   vercel
   ```

   Follow the prompts to link or create a new Vercel project.

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Custom Domain Configuration (studio.mattfowl.es)

After deploying to Vercel:

1. **Add the domain in Vercel Dashboard**:
   - Go to your project settings
   - Navigate to **Domains**
   - Add `studio.mattfowl.es`

2. **Configure DNS records**:

   Add the following DNS records at your domain registrar (mattfowl.es):

   | Type  | Name   | Value                          |
   |-------|--------|--------------------------------|
   | CNAME | studio | cname.vercel-dns.com           |

   **Alternative (if CNAME is not supported for subdomains):**

   | Type  | Name   | Value          |
   |-------|--------|----------------|
   | A     | studio | 76.76.21.21    |

3. **Wait for DNS propagation** (usually 5-60 minutes).

4. **Verify SSL**: Vercel automatically provisions an SSL certificate once DNS is configured.

### Environment Variables

No environment variables are required for the basic site. Vercel Analytics and Speed Insights work automatically when deployed to Vercel.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata and analytics
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and Tailwind directives
├── public/              # Static assets (add images, favicons here)
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Styling
- Modify colors, fonts, and spacing in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component styles use Tailwind utility classes in `app/page.tsx`

### Content
- Update copy directly in `app/page.tsx`
- Metadata and SEO in `app/layout.tsx`

### Analytics
- Vercel Analytics is enabled by default
- View analytics in the Vercel Dashboard after deployment

## License

Private project for Matthew Fowles.
