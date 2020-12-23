import Head from "next/head";
import Header from "parts/Header";

export default function index() {
	return (
    <>
    <Head>
      <title>Inscripción</title>
    </Head>
      <Header
        title="Inscripción"
        paragraph="Sigue los pasos para inscribirte en uno de nuestros cursos."
      />

      <section className="bg-white py-10">
        <div className="container px-4">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <h2>Procedimiento</h2>
              <ol className="small mb-5" style={{ paddingLeft: "1rem" }}>
                <li>Llena y envía el formulario de inscripción.</li>
                <li>
                  Dentro de 24 horas recibirás un correo con instrucciones para
                  acceder al curso.
                </li>
                <li>
                  Tendrás hasta la segunda clase, para realizar el pago a
                  una de las cuentas indicadas abajo.
                </li>
                <li>
                  Envía tu recibo de pago a{" "}
                  {process.env.NEXT_PUBLIC_PAYMENTS_EMAIL}
                </li>
              </ol>
              <h3>Cuentas</h3>
              <p className="lead">
                Para hacer el pago puedes usar una de estas dos vías.
              </p>
              <ul>
                <li>
                  <b>Banco Popular</b>: {process.env.NEXT_PUBLIC_BANK_ACCOUNT} <br/>(Jean Alexander Perez Reinoso)
                </li>
                <li>
                  <b>PayPal</b>: {process.env.NEXT_PUBLIC_PAYMENTS_EMAIL}
                </li>
              </ul>
            </div>
            <div className="col-lg-8 p-0 p-lg-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScLYcdwsmAFgx0ctff6E43ZDgxXhVM4LH-eEww2yl4AAV2KpQ/viewform?embedded=true"
                width="640"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                style={{
                  width: "100%",
                }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="var(--dark)"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </section>
    </>
  );
};