import Link from 'next/link';
import cursosData from './cursos.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from "lucide-react";


export default function ParceirosPage() {
    const parceirosUnicos = [...new Set(cursosData.map(curso => curso.partner))];

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            {/* Banner Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
                        Nossos <span className="text-orange-200">Parceiros</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Explore os cursos exclusivos oferecidos pelos nossos parceiros educacionais.
                    </p>
                </div>
            </section>

            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {parceirosUnicos.map(partnerName => {
                            const parceiroSlug = partnerName.toLowerCase().replace(/\s/g, '-');
                            return (
                                <li key={parceiroSlug} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                    <Link 
                                        href={`/courseparceiro/${parceiroSlug}`} 
                                        className="block text-center"
                                    >
                                        <h2 className="text-xl font-bold text-gray-800 mb-2">{partnerName}</h2>
                                        <div className="inline-flex items-center text-orange-600 font-medium mt-2">
                                            Ver Cursos
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}