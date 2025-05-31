import { Helmet } from 'react-helmet';

const LegalNoticePage = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | Houseplan</title>
        <meta name="description" content="Aviso Legal de Houseplan. Información sobre términos y condiciones de uso del sitio web y servicios." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-serif font-semibold mb-6">Aviso Legal</h1>
          
          <div className="prose prose-teal max-w-none">
            <p>Última actualización: 15 de agosto de 2024</p>
            
            <h2>1. Información general</h2>
            <p>
              El presente aviso legal regula el uso del sitio web www.houseplan.com, del que es titular Houseplan S.L. con CIF 44446938j, Av Castelao 13 Vigo
            </p>
            
            <h2>2. Términos y condiciones de uso</h2>
            <p>
              La navegación por el sitio web de Houseplan atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. Estas disposiciones pueden sufrir modificaciones, por lo que recomendamos su revisión periódica.
            </p>
            
            <h2>3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Houseplan o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
            </p>
            
            <h2>4. Condiciones de servicio</h2>
            <h3>4.1. Reservas</h3>
            <p>
              La realización de una reserva a través de nuestra web implica la aceptación de estas condiciones:
            </p>
            <ul>
              <li>Las reservas están sujetas a disponibilidad.</li>
              <li>Para confirmar la reserva es necesario el pago del importe total.</li>
              <li>Es obligatorio proporcionar datos personales verdaderos y actualizados.</li>
            </ul>
            
            <h3>4.2. Política de cancelación</h3>
            <p>
              Ofrecemos reembolso completo si cancelas hasta 7 días antes de la llegada. Después, se aplica un cargo del 50% hasta 48 horas antes. No hay reembolsos para cancelaciones con menos de 48 horas de antelación.
            </p>
            
            <h3>4.3. Check-in y check-out</h3>
            <p>
              El check-in es de 15:00 a 20:00 y el check-out es hasta las 11:00. Si necesitas horarios diferentes, consúltanos y haremos lo posible por adaptarnos.
            </p>
            
            <h2>5. Limitación de responsabilidad</h2>
            <p>
              Houseplan no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
            </p>
            <ul>
              <li>La falta de disponibilidad o accesibilidad al sitio web.</li>
              <li>La interrupción en el funcionamiento del sitio web o fallos informáticos.</li>
              <li>La presencia de virus o programas maliciosos en los contenidos.</li>
              <li>El uso ilícito, negligente, fraudulento o contrario a las presentes condiciones.</li>
              <li>La falta de veracidad, exactitud o actualidad de los contenidos.</li>
            </ul>
            
            <h2>6. Enlaces a terceros</h2>
            <p>
              En el sitio web pueden existir enlaces a sitios web de terceros. Houseplan no asume ninguna responsabilidad sobre la información contenida en dichos sitios web ni por los servicios o productos que en ellos se ofrecen.
            </p>
            
            <h2>7. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con el acceso o uso del sitio web, Houseplan y el usuario acuerdan someterse a los Juzgados y Tribunales de Granada, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
            
            <h2>8. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros a través del email hoseplanvigo@gmail.com o en la dirección postal indicada anteriormente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNoticePage;