import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | M&C Web Solutions",
  description:
    "Política de cookies de M&C Web Solutions. Información sobre los tipos de cookies que utilizamos y cómo desactivarlas.",
};

export default function CookiesPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
      {/* Mini nav */}
      {/* Content */}

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
        Política de Cookies
      </h1>
      <p style={{ color: "#64FFDA", fontSize: "0.8rem", marginBottom: "2.5rem", letterSpacing: 1 }}>
        Última actualización: abril 2026
      </p>

      <Section title="1. ¿Qué son las cookies?">
        <p>
          Una cookie es un pequeño archivo de texto que los sitios web almacenan en el dispositivo del usuario (ordenador,
          smartphone, tablet) cuando este los visita. Las cookies permiten que el sitio web recuerde información sobre su
          visita, como sus preferencias de idioma u otras configuraciones, lo que facilita su próxima visita y hace que el
          sitio web le resulte más útil.
        </p>
        <p>
          Las cookies no pueden dañar su dispositivo y no contienen ningún tipo de información personal que permita
          identificarle directamente, salvo que usted así lo haya consentido previamente.
        </p>
      </Section>

      <Section title="2. Cookies que utiliza este sitio web">
        <p>
          Este sitio web hace uso de los siguientes tipos de cookies:
        </p>

        <div
          style={{
            background: "rgba(100,255,218,0.04)",
            border: "1px solid rgba(100,255,218,0.1)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginTop: "0.5rem",
          }}
        >
          <h3 style={{ color: "#64FFDA", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.95rem" }}>
            🔧 Cookies técnicas (necesarias)
          </h3>
          <p style={{ margin: 0 }}>
            Son aquellas imprescindibles para el correcto funcionamiento del sitio web. Permiten al usuario navegar por
            la web y utilizar sus funciones básicas, como la gestión de la sesión. Sin estas cookies, algunos servicios
            del sitio no podrían prestarse. Estas cookies no requieren el consentimiento del usuario.
          </p>
        </div>

        <div
          style={{
            background: "rgba(100,255,218,0.04)",
            border: "1px solid rgba(100,255,218,0.1)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginTop: "1rem",
          }}
        >
          <h3 style={{ color: "#64FFDA", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.95rem" }}>
            📊 Cookies analíticas (Google Analytics)
          </h3>
          <p style={{ margin: 0 }}>
            Este sitio web utiliza <strong>Google Analytics</strong>, un servicio de analítica web proporcionado por
            Google LLC. Las cookies analíticas permiten cuantificar el número de visitantes y analizar de forma
            estadística y anónima cómo navegan por el sitio (páginas consultadas, tiempo de permanencia, tipo de
            dispositivo, país de acceso, etc.). La información generada por estas cookies se transmite a servidores de
            Google y se almacena conforme a su política de privacidad. Los datos recogidos son anónimos y no permiten
            identificar al usuario de forma individual.
          </p>
        </div>
      </Section>

      <Section title="3. Cómo deshabilitar las cookies">
        <p>
          Usted puede configurar su navegador para que no acepte cookies, o para que le avise cuando se instale una
          cookie. A continuación le indicamos cómo hacerlo en los principales navegadores:
        </p>

        <BrowserInstructions
          browser="Google Chrome"
          steps={[
            'Haga clic en el icono de los tres puntos (⋮) en la esquina superior derecha.',
            'Seleccione "Configuración" y luego "Privacidad y seguridad".',
            'Haga clic en "Cookies y otros datos de sitios".',
            'Seleccione la opción deseada: bloquear todas las cookies, bloquear cookies de terceros, etc.',
          ]}
        />

        <BrowserInstructions
          browser="Mozilla Firefox"
          steps={[
            'Haga clic en el menú (☰) y seleccione "Ajustes".',
            'Acceda a "Privacidad & Seguridad".',
            'En el apartado "Protección contra el rastreo mejorada", elija el nivel deseado.',
            'También puede gestionar las cookies individualmente en "Cookies y datos del sitio".',
          ]}
        />

        <BrowserInstructions
          browser="Safari (macOS / iOS)"
          steps={[
            'En macOS: acceda a "Safari" > "Preferencias" > "Privacidad".',
            'Active la opción "Bloquear todas las cookies" si así lo desea.',
            'En iOS: vaya a "Ajustes" > "Safari" > "Privacidad y seguridad".',
            'Active "Bloquear todas las cookies".',
          ]}
        />

        <BrowserInstructions
          browser="Microsoft Edge"
          steps={[
            'Haga clic en el menú (…) y seleccione "Configuración".',
            'Acceda a "Privacidad, búsqueda y servicios".',
            'En "Cookies y permisos del sitio", seleccione el nivel de bloqueo deseado.',
          ]}
        />

        <p>
          Tenga en cuenta que deshabilitar las cookies puede afectar al correcto funcionamiento de algunos servicios del
          sitio web.
        </p>
        <p>
          Para desactivar específicamente Google Analytics, puede instalar el complemento oficial de inhabilitación
          disponible en:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#64FFDA" }}
          >
            tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>
      </Section>

      <Section title="4. Información de contacto">
        <p>
          Si tiene cualquier duda sobre el uso de cookies en este sitio web, puede ponerse en contacto con M&C Web
          Solutions a través del correo electrónico:{" "}
          <a href="mailto:mandcwebsolutions@gmail.com" style={{ color: "#64FFDA" }}>
            mandcwebsolutions@gmail.com
          </a>
          .
        </p>
      </Section>

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

function BrowserInstructions({ browser, steps }: { browser: string; steps: string[] }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ color: "#c5c8ce", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>
        {browser}
      </h3>
      <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.3rem", margin: 0 }}>
        {steps.map((step, i) => (
          <li key={i} style={{ fontSize: "0.875rem", color: "#8a8f98" }}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
