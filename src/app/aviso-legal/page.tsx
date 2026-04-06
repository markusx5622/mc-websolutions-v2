import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | M&C Web Solutions",
  description:
    "Aviso legal de M&C Web Solutions. Información sobre el titular, condiciones de uso y normativa aplicable.",
};

export default function AvisoLegalPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
      {/* Mini nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "3rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid rgba(100,255,218,0.08)",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#f0f1f3",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#64FFDA" }}>M&C</span>
          <span style={{ color: "#8a8f98", fontWeight: 400 }}> Web Solutions</span>
        </Link>
        <Link
          href="/"
          style={{
            fontSize: "0.875rem",
            color: "#64FFDA",
            textDecoration: "none",
            border: "1px solid rgba(100,255,218,0.25)",
            padding: "0.45rem 1rem",
            borderRadius: "8px",
            transition: "all 0.2s",
          }}
        >
          ← Volver
        </Link>
      </nav>

      {/* Content */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#f0f1f3",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}
      >
        Aviso Legal
      </h1>
      <p style={{ color: "#64FFDA", fontSize: "0.8rem", marginBottom: "2.5rem", letterSpacing: 1 }}>
        Última actualización: abril 2026
      </p>

      <Section title="1. Identificación del titular">
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del
          Comercio Electrónico (LSSICE), se facilitan a continuación los datos de identificación del titular del sitio
          web:
        </p>
        <ul>
          <li><strong>Denominación:</strong> M&C Web Solutions</li>
          <li><strong>Actividad:</strong> Desarrollo y diseño de páginas web</li>
          <li><strong>Correo electrónico:</strong> mandcwebsolutions@gmail.com</li>
          <li><strong>Sede:</strong> Valencia, España</li>
        </ul>
      </Section>

      <Section title="2. Objeto">
        <p>
          El presente aviso legal regula el acceso y uso del sitio web de M&C Web Solutions, cuya actividad principal es
          la prestación de servicios de desarrollo, diseño y consultoría web para empresas y particulares.
        </p>
        <p>
          El acceso al sitio web es libre y gratuito. El usuario se compromete a hacer un uso adecuado de los contenidos
          y servicios ofrecidos, con sujeción a la ley, a las buenas costumbres y al presente aviso legal.
        </p>
      </Section>

      <Section title="3. Condiciones de uso">
        <p>
          El usuario se obliga a no utilizar el sitio web ni sus servicios con fines ilícitos o contrarios a lo
          establecido en estas condiciones. En particular, se prohíbe:
        </p>
        <ul>
          <li>Reproducir, copiar, distribuir o modificar los contenidos del sitio sin autorización expresa.</li>
          <li>Introducir o difundir contenidos que atenten contra los derechos de terceros.</li>
          <li>Realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio web.</li>
          <li>Intentar acceder a zonas restringidas del sistema sin autorización.</li>
        </ul>
        <p>
          M&C Web Solutions se reserva el derecho a modificar las presentes condiciones sin previo aviso, siendo
          responsabilidad del usuario su consulta periódica.
        </p>
      </Section>

      <Section title="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio web —incluyendo, sin carácter limitativo, textos, fotografías, logotipos,
          diseños gráficos, código fuente y elementos multimedia— son propiedad de M&C Web Solutions o de sus
          respectivos titulares, y están protegidos por la normativa española e internacional sobre propiedad
          intelectual e industrial.
        </p>
        <p>
          Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación sin
          autorización escrita de M&C Web Solutions.
        </p>
      </Section>

      <Section title="5. Limitación de responsabilidad">
        <p>
          M&C Web Solutions no garantiza la disponibilidad continua del sitio web, ni se responsabiliza de los daños
          que puedan derivarse de fallos técnicos, interrupciones del servicio o acceso a contenidos de terceros
          enlazados desde este sitio.
        </p>
        <p>
          Los contenidos del sitio tienen finalidad meramente informativa. M&C Web Solutions no asume responsabilidad
          alguna por decisiones tomadas por el usuario basándose en dicha información.
        </p>
      </Section>

      <Section title="6. Legislación aplicable y jurisdicción">
        <p>
          El presente aviso legal se rige por la legislación española vigente. Para la resolución de cualquier
          controversia derivada del acceso o uso del sitio web, las partes se someten, con renuncia expresa a
          cualquier otro fuero que pudiera corresponderles, a la jurisdicción de los Juzgados y Tribunales de la
          ciudad de Valencia, España.
        </p>
      </Section>

      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <Link href="/" style={{ color: "#64FFDA", fontSize: "0.875rem", textDecoration: "none" }}>
          ← Volver a la página principal
        </Link>
        <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#4a4d57" }}>
          · <Link href="/privacidad" style={{ color: "#4a4d57", textDecoration: "none" }}>Privacidad</Link>
          {" "}·{" "}
          <Link href="/cookies" style={{ color: "#4a4d57", textDecoration: "none" }}>Cookies</Link> ·
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.15rem",
          fontWeight: 600,
          color: "#f0f1f3",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(100,255,218,0.1)",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", lineHeight: 1.7, fontSize: "0.9375rem" }}>
        {children}
      </div>
    </section>
  );
}
