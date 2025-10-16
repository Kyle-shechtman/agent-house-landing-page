export default function TermsOfServicePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-foreground">Terms of Service</h1>
      <p className="text-sm text-foreground/70">Last updated: October 2025</p>
      <p className="text-base leading-relaxed text-foreground/80">
        These Terms of Service (&quot;Terms&quot;) describe the agreement between you and Emet Global LLC doing
        business as Data Buddies Solutions (&quot;Data Buddies Solutions,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) regarding your use of our website and services. By accessing or using our website, you agree
        to be bound by these Terms.
      </p>
      <div className="space-y-4 text-base leading-relaxed text-foreground/80">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Use of Services</h2>
          <p>
            You agree to use our website and services only for lawful purposes and in accordance with these Terms.
            You are responsible for ensuring that any information you provide is accurate and complete.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p>
            All content, trademarks, and materials on this site are owned by Emet Global LLC d/b/a Data Buddies
            Solutions or our licensors and are protected by applicable intellectual property laws. You may not copy,
            reproduce, or distribute our content without prior written consent.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
          <p>
            Our website and services are provided &quot;as is&quot; without warranties of any kind, either express or
            implied. We do not guarantee that the website will be uninterrupted or error-free.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Data Buddies Solutions is not liable for any indirect, incidental,
            or consequential damages arising from your use of our website or services.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The updated version will be indicated by an updated &quot;Last
            updated&quot; date and will be effective as soon as it is accessible.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For questions about these Terms, contact Emet Global LLC d/b/a Data Buddies Solutions at{" "}
            <a href="mailto:databuddiessolutions@gmail.com" className="text-accent hover:underline">
              databuddiessolutions@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
