import { Helmet } from 'react-helmet';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Houseplan</title>
        <meta name="description" content="Política de Privacidad de Houseplan. Información sobre el tratamiento de datos personales y derechos de los usuarios." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-serif font-semibold mb-6">Política de Privacidad</h1>
          
          <div className="prose prose-teal max-w-none">
            <p>Última actualización: 15 de agosto de 2024</p>
            
            <h2>1. Información general</h2>
            <p>
              En Houseplan, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona al utilizar nuestro sitio web o servicios.
            </p>
            
            <h2>2. Responsable del tratamiento</h2>
            <p>
              <strong>Responsable:</strong> Houseplan<br />
              <strong>Dirección:</strong> Av castelao 13  Vigo 36209<br />
              <strong>Email:</strong> privacidad@houseplan.com<br />
              <strong>Teléfono:</strong> +34 609352757
            </p>
            
            <h2>3. Datos que recopilamos</h2>
            <p>Podemos recopilar los siguientes tipos de información personal:</p>
            <ul>
              <li>Información de identificación (nombre, DNI/pasaporte)</li>
              <li>Información de contacto (email, teléfono, dirección)</li>
              <li>Información de pago (no almacenamos datos completos de tarjetas)</li>
              <li>Preferencias y solicitudes especiales relacionadas con su estancia</li>
              <li>Información de uso del sitio web (mediante cookies y tecnologías similares)</li>
            </ul>
            
            <h2>4. Finalidad del tratamiento</h2>
            <p>Utilizamos su información personal para:</p>
            <ul>
              <li>Gestionar su reserva y estancia</li>
              <li>Procesar pagos</li>
              <li>Cumplir con obligaciones legales (registro de huéspedes)</li>
              <li>Proporcionar información sobre nuestros servicios</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Enviar comunicaciones relacionadas con su reserva</li>
              <li>Enviar comunicaciones promocionales (solo con su consentimiento)</li>
            </ul>
            
            <h2>5. Base legal</h2>
            <p>El tratamiento de sus datos se realiza en base a:</p>
            <ul>
              <li>Ejecución de un contrato (gestión de reservas)</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Interés legítimo</li>
              <li>Su consentimiento (para comunicaciones comerciales)</li>
            </ul>
            
            <h2>6. Plazo de conservación</h2>
            <p>
              Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos, incluido el cumplimiento de obligaciones legales, fiscales y de información.
            </p>
            
            <h2>7. Destinatarios</h2>
            <p>
              Podemos compartir su información con:
            </p>
            <ul>
              <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>Autoridades competentes cuando sea legalmente requerido</li>
              <li>Entidades financieras para la gestión de pagos</li>
            </ul>
            
            <h2>8. Sus derechos</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Limitar el tratamiento de sus datos</li>
              <li>Portabilidad de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactarnos en privacidad@houseplan.com o en la dirección postal indicada anteriormente.
            </p>
            
            <h2>9. Medidas de seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la divulgación, alteración o destrucción.
            </p>
            
            <h2>10. Modificaciones de la política de privacidad</h2>
            <p>
              Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas de información. La versión actualizada estará siempre disponible en nuestro sitio web.
            </p>
            
            <h2>11. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo tratamos sus datos personales, por favor contáctenos en hoseplanvigo@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;