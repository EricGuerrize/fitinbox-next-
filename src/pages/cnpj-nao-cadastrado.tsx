// pages/cnpj-nao-cadastrado.tsx
import Link from 'next/link'
export default function CnpjNaoCadastrado() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <h2 className="text-2xl font-semibold text-secondary">CNPJ não cadastrado</h2>
      <p>Verifique o número e tente novamente.</p>
      <Link href="/" className="bg-secondary text-white px-6 py-2 rounded font-bold">
        Voltar
      </Link>
    </main>
  )
}