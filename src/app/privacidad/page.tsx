import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | M&C Web Solutions",
  description:
    "Política de privacidad de M&C Web Solutions. Información sobre el tratamiento de sus datos personales conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
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
        Política de Privacidad
      </h1>
      <p style={{ color: "#64FFDA", fontSize: "0.8rem", marginBottom: "2.5rem", letterSpacing: 1 }}>
        Última actualización: abril 2026
      </p>

      <Section title="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:
        </p>
        <ul>
          <li><strong>Denominación:</strong> M&C Web Solutions</li>
          <li><strong>Correo electrónico:</strong> mandcwebsolutions@gmail.com</li>
          <li><strong>Sede:</strong> Valencia, España</li>
        </ul>
      </Section>

      <Section title="2. Datos que se recogen">
        <p>
          A través del formulario de briefing disponible en este sitio web, M&C Web Solutions recoge los siguientes
          datos de carácter personal:
        </p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Nombre del negocio o marca</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información sobre el proyecto (tipo de web, objetivos, presupuesto, etc.)</li>
        </ul>
        <p>
          No se recogen datos especialmente protegidos. El usuario garantiza que los datos facilitados son verídicos y
          se compromete a comunicar cualquier modificación de los mismos.
        </p>
      </Section>

      <Section title="3. Finalidad del tratamiento">
        <p>
          Los datos personales facilitados por el usuario se tratan con las siguientes finalidades:
        </p>
        <ul>
          <li>Gestionar y responder a las solicitudes de presupuesto y consultas recibidas a través del formulario de briefing.</li>
          <li>Establecer comunicación comercial con el usuario en relación con los servicios ofrecidos por M&C Web Solutions.</li>
          <li>El seguimiento de proyectos en curso y la relación contractual derivada de los mismos.</li>
        </ul>
      </Section>

      <Section title="4. Base legal del tratamiento">
        <p>
          La base legal para el tratamiento de los datos es el <strong>consentimiento del interesado</strong>, otorgado
          de forma libre, específica e inequívoca mediante el envío voluntario del formulario de briefing.
        </p>
        <p>
          El usuario puede retirar su consentimiento en cualquier momento dirigiéndose a mandcwebsolutions@gmail.com,
          sin que ello afecte a la licitud del tratamiento previo a dicha retirada.
        </p>
      </Section>

      <Section title="5. Destinatarios de los datos">
        <p>
          Los datos personales del usuario <strong>no se ceden ni se comunican a terceros</strong>, salvo obligación
          legal.
        </p>
        <p>
          Las respuestas del formulario de briefing se almacenan en <strong>Google Sheets</strong>, un servicio de hoja
          de cálculo en la nube de Google LLC. Google LLC está acogido al marco EU-US Data Privacy Framework, lo que
          garantiza un nivel de protección adecuado para las transferencias internacionales de datos con arreglo al
          RGPD.
        </p>
      </Section>

      <Section title="6. Plazo de conservación de los datos">
        <p>
          Los datos personales se conservarán durante el tiempo necesario para la gestión de la solicitud y,
          posteriormente, mientras dure la relación comercial con el usuario. Una vez finalizada dicha relación, se
          conservarán durante los plazos legalmente establecidos.
        </p>
      </Section>

      <Section title="7. Derechos del usuario">
        <p>
          Usted tiene derecho a ejercitar, en cualquier momento, los derechos reconocidos por el Reglamento General de
          Protección de Datos (RGPD) y la normativa española vigente:
        </p>
        <ul>
          <li><strong>Derecho de acceso:</strong> conocer qué datos suyos se están tratando.</li>
          <li><strong>Derecho de rectificación:</strong> corregir datos inexactos o incompletos.</li>
          <li><strong>Derecho de supresión:</strong> solicitar la eliminación de sus datos.</li>
          <li><strong>Derecho a la portabilidad:</strong> recibir sus datos en formato estructurado.</li>
          <li><strong>Derecho de limitación:</strong> solicitar la restricción del tratamiento.</li>
          <li><strong>Derecho de oposición:</strong> oponerse al tratamiento de sus datos.</li>
        </ul>
        <p>
          Puede ejercitar estos derechos enviando un correo electrónico a{" "}
          <a href="mailto:mandcwebsolutions@gmail.com" style={{ color: "#64FFDA" }}>
            mandcwebsolutions@gmail.com
          </a>{" "}
          indicando el derecho que desea ejercitar. Asimismo, tiene derecho a presentar una reclamación ante la Agencia
          Española de Protección de Datos (aepd.es) si considera que el tratamiento de sus datos no es conforme al RGPD.
        </p>
      </Section>

      <Section title="8. Cookies">
        <p>
          Este sitio web puede utilizar cookies propias y de terceros. Para más información, consulte nuestra{" "}
          <Link href="/cookies" style={{ color: "#64FFDA" }}>
            Política de Cookies
          </Link>
          .
        </p>
      </Section>

      <Section title="9. Google Analytics">
        <p>
          Este sitio web utiliza <strong>Google Analytics</strong>, un servicio de analítica web de Google LLC. Google
          Analytics emplea cookies para recopilar información anónima sobre el comportamiento de los usuarios en la web
          (páginas visitadas, tiempo de permanencia, tipo de dispositivo, etc.) con fines estadísticos y de mejora del
          servicio.
        </p>
        <p>
          Los datos recogidos por Google Analytics son anónimos y no permiten identificar personalmente al usuario.
          Puede desactivar Google Analytics instalando el complemento de inhabilitación disponible en:{" "}
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
