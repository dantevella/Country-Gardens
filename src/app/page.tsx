import Image from "next/image";
import Link from "next/link";
import { OfferingCard } from "@/components/OfferingCard";
import { business } from "@/lib/nav";
import { toastImages } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="hero-wrap">
        <Image
          className="hero-bg"
          src="/images/hero.jpg"
          alt="Country Gardens Farm Market — Robbinsville, NJ"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "contain", objectPosition: "right center" }}
        />
        <div className="hero-scrim" />
        <div className="hero-body">
          <span className="hero-eyebrow">
            Robbinsville, NJ &nbsp;·&nbsp; Est. {business.established}
          </span>
          <h1 className="hero-h1">
            Fresh. Local.
            <em>Family-made.</em>
          </h1>
          <p className="hero-desc">
            Robbinsville&rsquo;s beloved farm market, gourmet deli, bakery, and
            full-service garden center — all in one. Serving Mercer County
            families since {business.established}.
          </p>
          <div className="hero-actions">
            <a
              href={business.toastOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Order Online via Toast
            </a>
            <Link href="/inquire" className="btn-ghost">
              Inquire Now
            </Link>
          </div>
          <div className="hero-trust">
            <div>
              <div className="trust-num">40+</div>
              <div className="trust-label">Years Serving NJ</div>
            </div>
            <div>
              <div className="trust-num">100%</div>
              <div className="trust-label">Family Owned</div>
            </div>
            <div>
              <div className="trust-num">Local</div>
              <div className="trust-label">Fresh Ingredients</div>
            </div>
          </div>
          <span className="hero-pill">
            Open Daily · Mon–Sat 8am–6pm · Sun 8am–5pm
          </span>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="section section-light">
        <span className="kicker">Everything You Need</span>
        <h2 className="sh2">
          A little bit of everything,
          <br />
          made with a lot of heart.
        </h2>
        <p className="slead">
          Your one-stop shop since {business.established}.
        </p>
        <div className="og">
          <OfferingCard
            href="/farm-market"
            title="Farm Market"
            description="Jersey Fresh produce, local dairy, fresh breads and seasonal specialty goods."
            image="/images/farm-market.jpg"
            alt="Country Gardens Farm Market"
          />
          <OfferingCard
            href="/deli"
            title="Deli"
            description="Homemade soups and salads."
            image={toastImages.sandwich}
            alt="Boar's Head sandwich from the Deli"
            imageTransform="scale(1.25) translateX(7%)"
          />
          <OfferingCard
            href="/bakery"
            title="Bakery"
            description="Deep-dish pies, donuts, muffins and cakes baked fresh on-site every day."
            image="/images/donuts.jpg"
            alt="Fresh apple cider donuts dusted in sugar"
          />
          <OfferingCard
            href="/catering"
            title="Catering & Events"
            description="Holiday dinners, cold platters, hot entrées and custom party packages."
            image="/images/catering.jpg"
            alt="Catering spread from Country Gardens"
            objectPosition="center 45%"
          />
          <OfferingCard
            href="/fundraising"
            title="Fundraising"
            description="Pies, poinsettias, wreaths and more — easy seasonal programs for schools and nonprofits."
            image="/images/fundraising.jpg"
            alt="Country Gardens fundraising"
          />
          <OfferingCard
            href="/landscape"
            title="Landscaping & Hardscaping"
            description="Professional design, patios, stonework, installation and lawn maintenance."
            image="/images/landscaping.jpg"
            alt="Country Gardens landscaping project"
          />
          <OfferingCard
            href="/garden-center"
            title="Garden Center"
            description="Trees, shrubs, bedding plants, mulch, topsoil, firewood and propane."
            image="/images/garden-center.jpg"
            alt="Country Gardens Garden Center"
            objectFit="contain"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section section-sky" style={{ textAlign: "center" }}>
        <span className="kicker" style={{ justifyContent: "center" }}>
          What People Are Saying
        </span>
        <div className="stars-hero">★★★★★</div>
        <h2 className="sh2">Loved by our community.</h2>
        <p className="stars-sub">Rated 4.5+ stars across Google &amp; Facebook</p>
        <div className="rv-grid">
          {[
            {
              badge: "Google",
              text: "The sandwiches here are absolutely incredible — Boar's Head meats piled high and always made fresh. The apple cider donuts are worth the trip alone.",
              author: "Sarah M.",
              source: "Mercer County, NJ",
            },
            {
              badge: "Google",
              text: "We've been coming here for over 15 years. Their holiday catering packages saved Thanksgiving more than once. Truly a family institution.",
              author: "Tom & Linda R.",
              source: "Central NJ",
            },
            {
              badge: "Facebook",
              text: "The garden center is fantastic — great plant selection and the staff knows what they're talking about. Will always be a local staple.",
              author: "Kevin D.",
              source: "Mercer County, NJ",
            },
          ].map((r) => (
            <div className="rv" key={r.author}>
              <div className="rv-badge">{r.badge}</div>
              <div className="rv-stars">★★★★★</div>
              <p className="rv-text">{r.text}</p>
              <div className="rv-author">{r.author}</div>
              <div className="rv-source">{r.source}</div>
            </div>
          ))}
        </div>
        <p className="rv-cta">
          <a href={business.reviewsUrl} target="_blank" rel="noreferrer">
            Leave us a review on Google →
          </a>
        </p>
      </section>
    </>
  );
}
