import Image from "next/image";

const fallbackUrl = "https://cdn.steadylink.io/a/c4219d55-710a-48bb-b4c9-58daa2458b68";
const imageUrl = process.env.NEXT_PUBLIC_STEADYLINK_ASSET_URL || fallbackUrl;

function BrandMark() {
  return (
    <span className="mark" aria-hidden="true">
      <i className="markLine" />
      <i className="markRing markRingA" />
      <i className="markRing markRingB" />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <a className="brand" href="https://steadylink.io">
          <BrandMark />
          <span>SteadyLink</span>
        </a>
        <a href="https://github.com/SteadyLink-io/nextjs-stable-images">View source</a>
      </header>

      <section className="hero">
        <div className="copy">
          <h1>Replace the image without changing this page</h1>
          <p>
            This Next.js page uses one SteadyLink asset URL. Publish a new revision and the page follows it without a code change or deployment.
          </p>
          <code>{imageUrl}</code>
          <div className="actions">
            <a className="primary" href="https://steadylink.io/signup">Create a workspace</a>
            <a href="https://steadylink.io/blog/replace-image-without-changing-url">Read the guide</a>
          </div>
        </div>

        <figure>
          <Image
            src={imageUrl}
            alt="Image delivered through a stable SteadyLink URL"
            width={1200}
            height={630}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
          <figcaption>SteadyLink resizes the current revision for each screen width.</figcaption>
        </figure>
      </section>

      <section className="steps">
        <article><strong>1</strong><h2>Publish the URL</h2><p>Use the stable asset address in the component and commit it once.</p></article>
        <article><strong>2</strong><h2>Replace the file</h2><p>Upload a replacement in the dashboard or use the SteadyLink CLI.</p></article>
        <article><strong>3</strong><h2>Keep the component</h2><p>The same source begins serving the current revision after cache refresh.</p></article>
      </section>

      <footer>
        <span>Next.js stable image example</span>
        <a href="https://steadylink.io/features/stable-asset-urls">How stable asset URLs work</a>
      </footer>
    </main>
  );
}
