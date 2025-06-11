// pages/index.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const CNPJS_VALIDOS = [
  '05.336.475/0001-77',
  '11.111.111/0001-11',
  '22.222.222/0001-22'
]

export default function Home() {
  const [cnpj, setCnpj] = useState('')
  const router = useRouter()

  const validarCnpj = (e: React.FormEvent) => {
    e.preventDefault()
    const v = cnpj.trim()
    if (CNPJS_VALIDOS.includes(v)) {
      router.push('/prosseguir')
    } else {
      router.push('/cnpj-nao-cadastrado')
    }
  }

  return (
    <>
      <Head>
        <title>Fit In Box – Área do Fornecedor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-white flex items-center justify-between px-8 py-4 shadow-md">
        <img src="/assets/logo.jpg" alt="Logo Fit In Box" className="h-16" />
        <Link href="/prosseguir" className="bg-secondary text-white px-6 py-2 rounded font-bold">
          MEUS PEDIDOS
        </Link>
      </header>

      <main className="bg-primary text-white min-h-screen">
        <section className="container mx-auto text-center py-20 px-4">
          <h1 className="text-5xl font-light mb-8">
            Sua <strong className="font-bold">Alimentação</strong><br />
            <strong className="font-bold">Nosso</strong> Compromisso
          </h1>
          <p className="text-lg mb-2">ÁREA DO FORNECEDOR</p>
          <p className="mb-8">Informe seu CNPJ para ter acesso à sua área exclusiva</p>

          <form onSubmit={validarCnpj} className="flex justify-center max-w-2xl mx-auto gap-2">
            <input
              type="text"
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
              placeholder="Informe o CNPJ"
              maxLength={18}
              required
              className="flex-1 p-4 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button type="submit" className="bg-secondary px-8 py-4 rounded-r-md font-bold">
              ACESSAR
            </button>
          </form>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-10">Informações</h2>
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {[
              {
                img: 'https://cdn-icons-png.freepik.com/256/7891/7891770.png',
                title: 'Cadastre-se',
                desc: 'para realizar pedidos'
              },
              {
                img: 'https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-shopping-on-mobile-png-image_2189444.jpg',
                title: 'Consulte seu CNPJ',
                desc: 'Visualize produtos disponíveis'
              },
              {
                img: 'https://img.lovepik.com/png/20231112/cheap-clipart-man-with-glasses-is-holding-a-grocery-shopping_566111_wh1200.png',
                title: 'Faça seu Pedido',
                desc: 'É prático e seguro'
              }
            ].map((card, i) => (
              <div key={i} className="w-56 bg-secondary-dark rounded-lg p-4 text-left">
                <img src={card.img} alt={card.title} className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}