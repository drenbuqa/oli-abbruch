import { services } from "@/lib/services";
import ServicePageLayout from "@/components/ServicePageLayout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Validate the slug exists server-side; rendering is handled client-side via slug prop
  const exists = services.some((s) => s.slug === params.slug);
  if (!exists) notFound();
  return <ServicePageLayout slug={params.slug} />;
}
