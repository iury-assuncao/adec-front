export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl text-center px-4">
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
        <p className="text-3xl mt-4 text-gray-700 font-semibold">
          Página não encontrada
        </p>
        <p className="text-lg mt-2 text-gray-500">
          A página que você está procurando pode ter sido removida ou nunca
          existiu.
        </p>
      </div>
    </div>
  );
}
