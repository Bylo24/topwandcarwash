/**
 * SECTION: MobileStickyBar
 * PURPOSE: Persistent mobile call-to-action and tap-to-call.
 * REMIX: Optional. Remove for product/SaaS sites where tap-to-call is irrelevant.
 */
import { Phone } from "lucide-react";
import { site } from "@/config/site";

const MobileStickyBar = () => {
  return (
    <div
      className="sm:hidden fixed inset-x-0 z-50 px-3"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 6px)" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md">
        <a
          href={site.cta.primary.href}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-background transition-opacity hover:opacity-90"
        >
          {site.cta.primary.label}
        </a>
        <a
          href={site.contact.phoneHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted"
        >
          <Phone size={16} strokeWidth={2} />
          Call
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
