// Google Ads (gtag) + Meta Pixel, pre-configured.
// Set VITE_GOOGLE_ADS_ID (e.g. "AW-123456789"), optional VITE_GOOGLE_ADS_LEAD_LABEL
// (conversion label) and VITE_META_PIXEL_ID. Nothing loads while they are empty.
type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; fbq?: any; _fbq?: any };

const GADS = import.meta.env['VITE_GOOGLE_ADS_ID'] as string | undefined;
const GADS_LEAD = import.meta.env['VITE_GOOGLE_ADS_LEAD_LABEL'] as string | undefined;
const META = import.meta.env['VITE_META_PIXEL_ID'] as string | undefined;

let started = false;

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initTracking() {
  if (started || typeof window === "undefined") return;
  started = true;
  const w = window as W;

  if (GADS) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GADS}`);
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", GADS, { send_page_view: false });
  }

  if (META) {
    const fbq: any = function (...args: unknown[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    w.fbq = w._fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    w.fbq("init", META);
  }
}

export function trackPageView(path: string) {
  const w = window as W;
  if (GADS) w.gtag?.("event", "page_view", { page_path: path, send_to: GADS });
  if (META) w.fbq?.("track", "PageView");
}

export function trackLead(data: { product?: string } = {}) {
  const w = window as W;
  if (GADS) {
    w.gtag?.("event", "generate_lead", data);
    if (GADS_LEAD) w.gtag?.("event", "conversion", { send_to: `${GADS}/${GADS_LEAD}` });
  }
  if (META) w.fbq?.("track", "Lead", data);
}
