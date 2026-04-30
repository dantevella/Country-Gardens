import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Gallery — Photos from Country Gardens" };

const photos = [
  {
    src: "/images/gallery1.jpg",
    alt: "Country Gardens",
    hero: true,
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Country Gardens",
  },
  {
    src: "/images/gallery3.jpg",
    alt: "Country Gardens",
  },
  {
    src: "/images/gallery4.jpg",
    alt: "Country Gardens",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "Country Gardens",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        kicker="A Look Inside"
        title="Photos from Country Gardens"
        description="From our deli counter to the garden lot — a peek at what makes Country Gardens special."
        bgWord="GALLERY"
      />
      <section id="photos" className="section section-light">
        <div className="gg">
          {photos.map((p) => {
            const cls = `gi${p.hero ? " hero" : ""}`;
            return (
              <div key={p.src} className={cls}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.hero ? 1200 : 800}
                  height={p.hero ? 1600 : 600}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
