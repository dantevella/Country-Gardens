import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { TwoColWithImage } from "@/components/TwoColWithImage";
import { GardenFeatureList } from "@/components/GardenFeature";
import { toastImages } from "@/lib/images";

export const metadata = { title: "Garden Center" };

const seasonalTags = [
  "Christmas Trees",
  "Holiday Wreaths",
  "Spring Bedding Plants",
  "Fall Decor",
  "Summer Annuals",
  "Mulch & Topsoil",
  "Firewood & Propane",
  "Poinsettias",
];

export default function GardenCenterPage() {
  return (
    <>
      <PageHeader
        kicker="Green Thumb HQ"
        title="Garden Center"
        description="From bedding plants to seasonal decor — everything your yard needs, season after season."
        bgWord="GARDEN"
      />
      <section className="section section-light">
        <div style={{ marginBottom: "2.5rem" }}>
          <TwoColWithImage
            imagePosition="left"
            image={{
              src: toastImages.gardenCenter,
              alt: "Country Gardens Garden Center in Robbinsville, NJ",
              aspect: "16/9",
            }}
          >
            <div>
              <span className="kicker">Your Hometown Garden Center</span>
              <h3 className="sh3">All Year Long!</h3>
              <p className="slead" style={{ maxWidth: "100%", marginBottom: "1.25rem" }}>
                Located in the heart of Robbinsville, our full-service retail
                garden center offers everything you need to keep your home and
                garden beautiful in every season. We provide professional
                landscape design and installation, along with lawn and garden
                maintenance services.
              </p>
              <GardenFeatureList
                features={[
                  {
                    code: "PLT",
                    id: "plants",
                    title: "Plants, Trees & Shrubs",
                    description:
                      "Seasonal bedding plants, poinsettias, Christmas trees, wreaths, and year-round landscape plants.",
                  },
                  {
                    code: "DSN",
                    id: "design",
                    title: "Landscape Design & Installation",
                    description:
                      "Professional design, hardscaping, patio installation, and full outdoor living transformations.",
                  },
                  {
                    code: "SUP",
                    id: "supplies",
                    title: "Lawn & Garden Supplies",
                    description:
                      "Mulch, topsoil, firewood, propane, and everything else your yard needs.",
                  },
                ]}
              />
            </div>
          </TwoColWithImage>
        </div>

        {/* IN BLOOM — seasonal photo strip showing real inventory */}
        <div id="in-bloom" style={{ marginBottom: "2.5rem" }}>
          <span className="kicker">In Bloom Now</span>
          <h3 className="sh3" style={{ marginBottom: "0.4rem" }}>
            Fresh Off the Tables
          </h3>
          <p className="slead" style={{ maxWidth: "60ch", marginBottom: "1.5rem" }}>
            A look at what&rsquo;s on our benches this season &mdash; hanging
            baskets, geraniums, begonias and everything else to bring your beds
            to life.
          </p>
          <div className="bloom-grid">
            {[
              {
                src: "/images/hanging-baskets.jpg",
                alt: "Colorful hanging flower baskets — begonias, petunias and calibrachoa",
                caption: "Hanging Baskets",
                objectPosition: "center 40%",
              },
              {
                src: "/images/geraniums.jpg",
                alt: "Rows of red, pink and magenta geraniums on display",
                caption: "Geraniums",
                objectPosition: "center",
              },
              {
                src: "/images/begonias.jpg",
                alt: "Trays of begonia starter plants at the garden center entrance",
                caption: "Begonia Trays",
                objectPosition: "center 70%",
              },
            ].map((item) => (
              <figure key={item.src} className="bloom-card">
                <div className="bloom-card-img">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: item.objectPosition }}
                  />
                </div>
                <figcaption className="bloom-card-caption">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div id="seasonal" className="info-card-dark">
          <span className="kicker kicker-moss">Seasonal Availability</span>
          <h3>Available Throughout the Year</h3>
          <div className="stags">
            {seasonalTags.map((t) => (
              <span key={t} className="stag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/inquire?type=landscape" className="btn btn-green">
            Request a Landscape Quote
          </Link>
        </div>
      </section>
    </>
  );
}
