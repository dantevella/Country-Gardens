import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** CSS object-position value for the image (defaults to "center"). */
  objectPosition?: string;
  /** CSS object-fit value for the image (defaults to "cover"). */
  objectFit?: "cover" | "contain";
  /** CSS transform value for the image (e.g. "scale(1.2) translateX(5%)"). */
  imageTransform?: string;
};

export function OfferingCard({
  href,
  title,
  description,
  image,
  alt,
  objectPosition,
  objectFit,
  imageTransform,
}: Props) {
  return (
    <Link href={href} className="oc">
      <Image
        src={image}
        alt={alt}
        width={800}
        height={300}
        sizes="(max-width: 900px) 50vw, 300px"
        style={{
          width: "100%",
          height: 150,
          objectFit: objectFit ?? "cover",
          objectPosition: objectPosition ?? "center",
          transform: imageTransform,
          display: "block",
        }}
      />
      <div className="oc-body">
        <div className="oc-title">{title}</div>
        <p className="oc-desc">{description}</p>
      </div>
    </Link>
  );
}
