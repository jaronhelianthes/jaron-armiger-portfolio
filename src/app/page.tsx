import Crest from "@/components/shared/Crest";
import SectionDivider from "@/components/shared/SectionDivider";
import HeroSection from "@/components/sections/HeroSection";
import LibrarianSection from "@/components/sections/LibrarianSection";
import CapConnectSection from "@/components/sections/CapConnectSection";
import ProspectorSection from "@/components/sections/ProspectorSection";
import CarvizSection from "@/components/sections/CarvizSection";
import EarlierRolesSection from "@/components/sections/EarlierRolesSection";
import BerkeleySection from "@/components/sections/BerkeleySection";
import ContactSection from "@/components/sections/ContactSection";
import { IDENTITY } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-12"
        style={{
          backgroundColor: "rgba(250, 249, 246, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      > 
        
        
        <span
          className="text-md tracking-widest uppercase"
          style={{ color: "var(--color-fg)", letterSpacing: "0.15em" }}
        >
          {IDENTITY.name}
        </span>
        <div className="flex items-center gap-4">
          <Crest size={55} />
          <span
            className="hidden text-xs tracking-widest uppercase md:block"
            style={{ color: "var(--color-muted)", letterSpacing: "0.15em" }}
          >
            
            {IDENTITY.studioAccented}
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <SectionDivider />
        <LibrarianSection />
        <SectionDivider />
        <CapConnectSection />
        <SectionDivider />
        <ProspectorSection />
        <SectionDivider />
        {/* <CarvizSection />
        <SectionDivider />
        <EarlierRolesSection />
        <SectionDivider variant="line" />
        <BerkeleySection />
        <SectionDivider /> */}
        <ContactSection />
      </main>
    </>
  );
}
