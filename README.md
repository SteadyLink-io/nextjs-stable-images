# Stable images in Next.js

This example shows how to use one SteadyLink asset URL in a Next.js application and replace the image later without changing the component or deploying the application again.

## Run the example

```sh
git clone https://github.com/SteadyLink-io/nextjs-stable-images.git
cd nextjs-stable-images
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Use your own image

Upload a public image to [SteadyLink](https://steadylink.io), copy its stable asset URL, and set it in `.env.local`.

```text
NEXT_PUBLIC_STEADYLINK_ASSET_URL=https://cdn.steadylink.io/a/YOUR_ASSET_ID
```

The application reads the URL in `app/page.tsx` and renders it with `next/image`.

```tsx
<Image
  src={imageUrl}
  alt="Image delivered through a stable SteadyLink URL"
  width={1200}
  height={630}
  priority
  unoptimized
/>
```

Using `unoptimized` keeps image delivery on SteadyLink instead of adding the Next.js image optimizer cache in front of the stable URL.

## Replace the image

Replace the file in the SteadyLink dashboard, or install the [SteadyLink CLI](https://github.com/SteadyLink-io/cli) and run:

```sh
steadylink replace ./hero-v2.webp \
  --bucket YOUR_BUCKET_ID \
  --key campaign/hero.webp
```

The component and environment variable remain unchanged. After the stable delivery cache refreshes, the same page serves the current revision.

## Learn more

- [How to replace an image without changing its URL](https://steadylink.io/blog/replace-image-without-changing-url)
- [Stable asset URLs](https://steadylink.io/features/stable-asset-urls)
- [SteadyLink documentation](https://steadylink.io/docs/users/getting-started)

## License

MIT
