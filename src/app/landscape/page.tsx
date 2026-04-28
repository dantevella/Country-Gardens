import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { TwoColWithImage } from "@/components/TwoColWithImage";
import { GardenFeatureList } from "@/components/GardenFeature";
import { toastImages } from "@/lib/images";

/**
 * Bulk material cards. Copy lifted verbatim from the live Toast site so the
 * voice matches what customers already see today. Every card funnels into the
 * landscape inquiry form where the team can quote delivery.
 */
const bulkMaterials = [
  {
    title: "Black Mulch",
    image: toastImages.mulchBlack,
    blurb:
      "Our premium black mulch is engineered to retain its deep color longer, helping your landscape look sharp while also supporting moisture retention and weed control.",
  },
  {
    title: "Brown Mulch",
    image: toastImages.mulchBrown,
    blurb:
      "Our premium brown mulch offers long-lasting, natural color while helping retain soil moisture, regulate temperature, and reduce weed growth.",
  },
  {
    title: "Screened Topsoil",
    image: toastImages.topsoil,
    blurb:
      "Start with the right foundation. Our screened topsoil is clean, easy to work with, and ideal for seeding, sodding, and prepping any landscape project.",
  },
  {
    title: "Compost",
    image: toastImages.compost,
    blurb:
      "Give your soil a serious upgrade. Our compost is packed with nutrients to bring life back to tired beds and supercharge flowering and fruit and vegetable production.",
  },
];

export const metadata = { title: "Landscaping & Hardscaping" };

export default function LandscapePage() {
  return (
    <>
      <PageHeader
        kicker="Outdoor Living"
        title="Landscaping & Hardscaping"
        description="Professional landscape design, installation, hardscaping, and maintenance — transforming your outdoor space into something beautiful."
        bgWord="LANDSCAPE"
      />
      <section className="section section-light">
        <div style={{ marginBottom: "2.5rem" }}>
          <TwoColWithImage
            imagePosition="left"
            image={{
              src: "/images/landscape-walkway.jpg",
              alt: "Stamped paver walkway flanked by mulched beds and river rock — Country Gardens hardscape work",
            }}
          >
            <div>
              <span className="kicker">Our Services</span>
              <h3 className="sh3">From Design to Installation</h3>
              <GardenFeatureList
                features={[
                  {
                    code: "DSN",
                    id: "design",
                    title: "Landscape Design",
                    description:
                      "Custom design plans tailored to your property, vision, and budget.",
                  },
                  {
                    code: "INS",
                    id: "install",
                    title: "Planting & Installation",
                    description:
                      "Trees, shrubs, perennials, annuals, and full garden bed installations.",
                  },
                  {
                    code: "PAT",
                    id: "hardscape",
                    title: "Patios & Hardscaping",
                    description:
                      "Natural stone, pavers, retaining walls, walkways and outdoor living spaces.",
                  },
                  {
                    code: "MNT",
                    id: "maintenance",
                    title: "Lawn & Garden Maintenance",
                    description:
                      "Seasonal cleanups, mulching, pruning, and ongoing maintenance programs.",
                  },
                  {
                    code: "SUP",
                    id: "supplies",
                    title: "Bulk Supplies",
                    description:
                      "Mulch, topsoil, gravel and stone available for delivery or pickup.",
                  },
                ]}
              />
            </div>
          </TwoColWithImage>
        </div>

        {/* PREMIUM SOIL & MULCH — bulk materials available for delivery or pickup */}
        <div id="bulk-materials" style={{ marginBottom: "2.5rem" }}>
          <span className="kicker">Premium Soil &amp; Mulch</span>
          <h3 className="sh3" style={{ marginBottom: "0.4rem" }}>
            Bulk Materials &amp; Delivery
          </h3>
          <p className="slead" style={{ maxWidth: "60ch", marginBottom: "1.5rem" }}>
            From the ground up, we do it all. Bulk materials, expert design,
            and full installation &mdash; ready when you are. Book your spring
            clean-up or upgrade project today.
          </p>

          <div className="og">
            {bulkMaterials.map((m) => (
              <article key={m.title} className="offering-card">
                <div className="offering-card-img-wrap">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="offering-card-body">
                  <h4 className="offering-card-title">{m.title}</h4>
                  <p className="offering-card-desc">{m.blurb}</p>
                  <Link
                    href="/inquire?type=landscape"
                    className="offering-card-link"
                  >
                    Request a Delivery Quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="quote" className="info-card">
          <h3>Ready to Transform Your Outdoor Space?</h3>
          <p>
            Tell us about your project and we&rsquo;ll get back to you within
            one business day to discuss your vision.
          </p>
          <div className="btn-row">
            <Link href="/inquire" className="btn btn-green">
              Request a Landscape Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
