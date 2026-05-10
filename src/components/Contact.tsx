/**
 * SECTION: Contact
 * PURPOSE: Lead capture form + contact info.
 * REMIX: Almost always kept. TODO: wire form submission to Lovable Cloud
 * (or an email service) — currently just shows a success toast.
 */
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { site, contact } from "@/config/site";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;

    try {
      // TODO: wire form submission to Lovable Cloud or an email service.
      await new Promise((r) => setTimeout(r, 400));
      toast({
        title: "Message received",
        description: "Thanks, we will be in touch shortly.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-card scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 sm:mb-4 block font-sans">
              {contact.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1] mb-5 sm:mb-6 text-balance">
              {contact.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
              {contact.intro}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                <a href={site.contact.phoneHref} className="text-sm text-foreground hover:opacity-70 transition-opacity">
                  {site.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${site.contact.email}`} className="text-sm text-foreground hover:opacity-70 transition-opacity">
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground">{site.contact.location}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 bg-background p-6 sm:p-8 md:p-10 rounded-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="c-name" label="Name" name="name" required />
                <Field id="c-email" label="Email" name="email" type="email" required />
              </div>
              <Field id="c-subject" label="Subject" name="subject" required />
              <div>
                <label htmlFor="c-message" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-foreground text-background px-10 py-4 text-sm font-semibold font-sans tracking-[0.15em] uppercase rounded-sm transition-opacity duration-200 hover:opacity-85 disabled:opacity-50 mt-2"
              >
                {submitting ? "Sending" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  name,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={id} className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
    />
  </div>
);

export default Contact;
