import { baseURL } from "@/app/resources";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Tonify";
  const description = "The first fully decentralized MUSIC platform on the TON blockchain with MUSIC-to-Earn model.";
  const fullBaseURL = `https://${baseURL}`;
  const ogImage = `${fullBaseURL}/og-image.png`;

  return {
    metadataBase: new URL(fullBaseURL),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: fullBaseURL,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}