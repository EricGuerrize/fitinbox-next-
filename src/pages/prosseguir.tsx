// pages/prosseguir.tsx
import Link from 'next/link'
export default function Prosseguir() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <h2 className="text-2xl font-semibold">CNPJ validado com sucesso!</h2>
      <Link href="/produtos" className="bg-primary text-white px-6 py-2 rounded font-bold">
        Ir para Produtos
      </Link>
    </main>
  )
}