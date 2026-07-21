import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPinned,
  MessageCircle,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import { COMPANY } from "@/constants/company";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_45%),linear-gradient(to_bottom,#ffffff,#f8fbff)] py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="CONTACT"
          title="Let's Talk About Your Project"
          description="Need AC installation, preventive maintenance, or electronic repair? Contact our team and we'll be happy to assist you."
          align="center"
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
          {/* Left */}
          <div className="grid gap-5">
              <ContactCard
                icon={<MessageCircle size={22} />}
                title="WhatsApp"
                value={COMPANY.phoneDisplay}
                description="Fast response from our technician."
                href={COMPANY.whatsappUrl}
              />

              <ContactCard
                icon={<FaInstagram size={20} />}
                title="Instagram"
                value="@project.id.services"
                description="Latest project updates."
                href={COMPANY.social.instagram || "#"}
              />

              <ContactCard
                icon={<Mail size={22} />}
                title="Email"
                value={COMPANY.email}
                description="Business inquiry."
                href={`mailto:${COMPANY.email}`}
              />
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg shadow-slate-100">
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-slate-200 px-8 py-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
                  <MapPinned size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Our Location
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {COMPANY.address.city}, {COMPANY.address.province},{" "}
                    {COMPANY.address.country}
                  </p>
                </div>
              </div>

              {COMPANY.google.embed ? (
                <iframe
                  title={`Peta lokasi ${COMPANY.legalName}`}
                  src={COMPANY.google.embed}
                  width="100%"
                  height="460"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              ) : (
                <div className="flex h-[460px] flex-col items-center justify-center px-8 text-center">
                  <MapPinned size={56} className="mb-6 text-sky-500" />

                  <h3 className="text-2xl font-semibold text-slate-900">
                    Google Maps
                  </h3>

                  <p className="mt-3 max-w-md text-slate-500">
                    Add your Google Maps Embed URL inside{" "}
                    <strong>COMPANY.google.embed</strong>.
                  </p>
                </div>
              )}

              <div className="border-t border-slate-200 p-5">
                <Link
                  href={COMPANY.google.maps || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          inline-flex
          items-center
          gap-2

          rounded-xl

          bg-sky-50

          px-4
          py-2

          text-sm
          font-semibold

          text-sky-700

          transition-all

          hover:bg-sky-100
        "
                >
                  <MapPinned size={17} />
                  Open in Google Maps
                  <ArrowUpRight size={16} />
                </Link>
              </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-100 backdrop-blur">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Clock3 size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Business Hours
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Our support team is available during the following hours.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 text-sm md:min-w-[420px]">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-3">
                  <span className="font-medium text-slate-600">
                    Monday – Friday
                  </span>

                  <span className="font-semibold text-slate-900">
                    {COMPANY.businessHours.mondayFriday}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-3">
                  <span className="font-medium text-slate-600">Saturday</span>

                  <span className="font-semibold text-slate-900">
                    {COMPANY.businessHours.saturday}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-3">
                  <span className="font-medium text-slate-600">Sunday</span>

                  <span className="font-semibold text-slate-900">
                    {COMPANY.businessHours.sunday}
                  </span>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
