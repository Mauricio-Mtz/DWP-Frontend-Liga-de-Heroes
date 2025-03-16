const Features = () => {
  return (
    <section className="mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12 comic-title">
        Características Asombrosas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="card bg-base-100 comic-border">
          <div className="card-body items-center text-center">
            <div
              className="comic-burst text-5xl"
              style={{ '--rotation': '5deg' }}
            >
              🚀
            </div>
            <h3 className="card-title text-2xl mt-4">Súper Rápido</h3>
            <p>
              Velocidad increíble que te dejará sin aliento. ¡Como un superhéroe
              digital!
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="card bg-base-100 comic-border">
          <div className="card-body items-center text-center">
            <div
              className="comic-burst text-5xl"
              style={{ '--rotation': '-3deg' }}
            >
              🎮
            </div>
            <h3 className="card-title text-2xl mt-4">Muy Divertido</h3>
            <p>
              Una experiencia tan divertida que olvidarás que estás usando una
              aplicación.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="card bg-base-100 comic-border">
          <div className="card-body items-center text-center">
            <div
              className="comic-burst text-5xl"
              style={{ '--rotation': '2deg' }}
            >
              🛡️
            </div>
            <h3 className="card-title text-2xl mt-4">Súper Seguro</h3>
            <p>
              Protección de nivel héroe para todos tus datos. ¡Nada se nos
              escapa!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
