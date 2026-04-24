
function RegisterForm() {
    return (
        <div className="w-full max-w-120 h-auto min-h-150 mx-4 px-6 py-3 flex flex-col justify-between shadow-cards border-2 border-neutral-700 bg-neutral-900 space-y-7 rounded-3xl">

            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Crie sua conta</h1>
                <span className="text-gray-400 block mt-2">Somente maiores de 18</span>
            </div>

            <div id="input-group" className="flex flex-col space-y-4 mb-8">
                
                <div className="flex flex-col space-y-1">
                    <label htmlFor="nameInput" id="nameInput" className="text-white text-lg font-bold">Nome</label>
                    <input type="text" placeholder="Seu username" required className="bg-neutral-800 h-12 px-4 rounded-2xl text-white font-bold hover:bg-neutral-700 w-full" />
                </div>
                
                <div className="flex flex-col space-y-1">
                    <label htmlFor="emailInput" id="emailInput" className="text-white text-lg font-bold">Email</label>
                    <input type="email" placeholder="seu@email.com" required className="bg-neutral-800 h-12 px-4 rounded-2xl text-white font-bold hover:bg-neutral-700 w-full"/>    
                </div>
                
                <div className="flex flex-col space-y-1">
                    <label htmlFor="dataNascimento" id="dataNascimentoInput" className="text-white text-lg font-bold">Data de nascimento</label>
                    <input type="date" required className="bg-neutral-800 h-12 px-4 rounded-2xl text-white font-bold hover:bg-neutral-700 w-full" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="senhaInput" id="senhaInput" className="text-white text-lg font-bold">Senha</label>
                    <input type="password" placeholder="Informe uma senha forte" required className="bg-neutral-800 h-12 px-4 rounded-2xl text-white font-bold hover:bg-neutral-700 w-full" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="CoonfirmaSenhaInput" id="ConfirmaSenhaInput" className="text-white text-lg font-bold">Confirme sua senha</label>
                    <input type="password" placeholder="As duas senhas devem corresponder" required className="bg-neutral-800 h-12 px-4 rounded-2xl text-white font-bold hover:bg-neutral-700 w-full" />
                </div>
                
            </div>


            <div className="flex justify-center font-bold text-lg">
                <button className="bg-amber-100 w-full py-3 rounded-2xl hover:bg-secondary hover:text-white hover:cursor-pointer transition-transform hover:scale-103 active:scale-98">Criar conta</button>
            </div>
            <div className="text-center">
                <span className="text-gray-400 block">Já possui conta?<a href="cadastro" className="text-bold text-secondary underline">Entrar</a></span>
            </div>
        </div>
    );
}

export default RegisterForm