// app/(pages)/contact/page.tsx
import ContactMeComp from "@/app/components/ContactComp";

export async function generateMetadata() {
  return {
    title: "Contact | Pranta's Portfolio",
    description:
      "Get in touch with Pranta. Fill out the form to discuss new opportunities.",
  };
}

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact | Pranta's Portfolio",
    description:
      "Get in touch with Pranta. Fill out the form to discuss new opportunities.",
    url: "https://protfolio-ivory-iota.vercel.app/contact",
    mainEntity: {
      "@type": "Person",
      name: "Pranta",
      jobTitle: "Web Developer",
      description:
        "A skilled MERN Stack and Web Developer available for new opportunities.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General Inquiry",
        email: "your-email@example.com", // Replace with your email if applicable
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div>
        <div className="text-center py-26 my-10">
          <p className="text-9xl font-bold uppercase tracking-wide">
            Say Hello
          </p>
          <p className="text-lg max-w-xl mx-auto mt-6 text-gray-700">
            Fill out the form below to get in touch with me. I am always excited
            to hear about new opportunities and I will do my best to respond to
            your inquiry within 24 hours.
          </p>
        </div>
        <div className="mb-20">
          <ContactMeComp />
        </div>
      </div>
    </>
  );
}