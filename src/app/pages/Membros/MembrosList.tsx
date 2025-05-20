import { useNavigate } from 'react-router';

const membros = [
  { id: 1, nome: 'João Silva' },
  { id: 2, nome: 'Maria Oliveira' },
  { id: 3, nome: 'Carlos Souza' },
];

export default function MembrosList() {
  const navigate = useNavigate();

  const handleVerMais = (id: number) => {
    navigate(`/membros/${id}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-medium tracking-tight mb-6">Membros</h1>
      <ul className="space-y-4">
        {membros.map((membro) => (
          <li
            key={membro.id}
            className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
          >
            <span className="text-gray-800 font-medium">{membro.nome}</span>
            <button
              onClick={() => handleVerMais(membro.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Ver mais
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
