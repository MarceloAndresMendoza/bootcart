export const AppNotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  }
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col gap-4 justify-start">
          <h1 className="text-5xl">Error 404</h1>
          <h2 className="text-lg">No se ha encontrado el recurso solicitado.</h2>
          <button className="max-w-3xl bg-blue-500 text-white px-4 py-2 shadow-md hover:bg-blue-600" onClick={handleGoHome}>Volver al inicio</button>
          <img className="max-w-3xl" src="https://http.cat/404" alt="" />
        </div>
      </div>
    </>
  )
}
