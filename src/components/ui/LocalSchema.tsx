export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pro-Tech Sales & Service",
    "description": "North West Ontario’s premier authority on water and power solutions. Largest regional stocking supplier of Canadian-made pumps and electric motors. Authorized Excalibur, Pompco, and Leeson dealer.",
    "image": "https://www.pro-techsales.ca/logo.png",
    "@id": "https://www.pro-techsales.ca",
    "url": "https://www.pro-techsales.ca",
    "telephone": "807-346-8324",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "541 Tenth Ave",
      "addressLocality": "Thunder Bay",
      "addressRegion": "ON",
      "postalCode": "P7B 2R3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.4284,
      "longitude": -89.2461
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.pagesjaunes.ca/bus/Ontario/Thunder-Bay/Pro-Tech-Sales-and-Service/6460593.html"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Northwestern Ontario"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
