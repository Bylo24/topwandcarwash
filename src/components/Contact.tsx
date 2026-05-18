import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contact, site } from "@/config/site";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    try {
      console.log("Form submission:", formData);
      await new Promise((r) => setTimeout(r, 400));

      toast({
        title: "Message received",
        description: "The team can also be reached at 403 223 0397.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call 403 223 0397.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-card scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-normal tracking-[0.25em] uppercase text-foreground mb-4 block font-sans">
              {contact.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 text-balance">
              {contact.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              {contact.intro}
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground leading-relaxed">{site.contact.location}</p>
              </div>
              <div className="pt-5 border-t border-border">
                <a href={site.contact.phoneHref} className="flex items-center gap-3 group">
                  <Phone size={16} className="text-foreground shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground group-hover:text-foreground transition-colors">
                    {site.contact.phone}
                  </span>
                </a>
              </div>
              <div className="pt-5 border-t border-border">
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 group">
                  <Mail size={16} className="text-foreground shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground group-hover:text-foreground transition-colors">
                    {site.contact.email}
                  </span>
                </a>
              </div>
              <div className="pt-5 border-t border-border">
                <div className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <Clock size={16} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                  <p>
                    Wash Bays Open Daily<br />
                    Store Hours Vary on Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 bg-background text-foreground p-6 sm:p-8 md:p-10 rounded-sm border border-border shadow-[0_25px_80px_-50px_rgba(0,0,0,0.18)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-display text-3xl text-foreground leading-none">
                Send a message
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <Field id="c-name" label="Name" name="name" placeholder="Name" required />
                <Field id="c-phone" label="Phone" name="phone" type="tel" placeholder="Phone" required />
              </div>
              <Field id="c-email" label="Email" name="email" type="email" placeholder="Email" required />
              <div>
                <label htmlFor="c-message" className="block text-xs font-normal text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Message or fleet inquiry"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#005EC3] text-white px-10 py-4 text-sm font-normal font-sans tracking-[0.15em] uppercase rounded-sm transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
              >
                {submitting ? "Sending." : "Send Inquiry"}
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
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={id} className="block text-xs font-normal text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
