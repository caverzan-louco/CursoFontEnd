import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-teal-50 to-purple-50 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-teal-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-orange-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-md w-full space-y-8 p-8 relative z-10">
        {/* Main floating card */}
        <div className="relative group">
          {/* Shadow layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-teal-300/20 rounded-3xl transform rotate-1 scale-105 group-hover:rotate-2 group-hover:scale-110 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300/20 to-purple-300/20 rounded-3xl transform -rotate-1 scale-105 group-hover:-rotate-2 group-hover:scale-110 transition-all duration-500"></div>

          {/* Main card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-200/50 group-hover:shadow-3xl transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-teal-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            <div className="text-center relative">
              {/* Animated logo */}
              <div className="mb-6 relative">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 via-teal-500 to-purple-600 rounded-3xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                  <svg className="w-12 h-12 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                {/* Floating particles */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-6 right-3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-2 left-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-500"></div>
              </div>

              <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-teal-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
                EasyEstoque
              </h1>
              <p className="text-gray-700 text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                Gestão Inteligente de Estoque para Empresas Modernas
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <Link
                href="/login"
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Entrar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/signup"
                className="w-full flex justify-center py-4 px-6 border-2 border-orange-300 rounded-xl text-sm font-semibold text-orange-700 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Criar Conta</span>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">
              Gerencie produtos, acompanhe o estoque e otimize operações com facilidade
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
