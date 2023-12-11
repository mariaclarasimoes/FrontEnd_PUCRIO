import React from "react";

const Testemonials = () => {
    return (
        <section class="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 text-gray-900 uppercase">Avaliações dos consumidores</h1>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg" />
                            <p class="leading-relaxed">É incrível! Encontrei roupas únicas e estilosas que refletem perfeitamente meu gosto. A equipe foi super atenciosa, proporcionando uma experiência de compra excepcional. Definitivamente, minha loja favorita para moda feminina.</p>
                            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Luciana Silva</h2>
                            <p class="text-gray-500">São Paulo, SP</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/fotos-gratis/homem-bonito-posando-e-sorrindo_23-2149396133.jpg?w=360&t=st=1701821490~exp=1701822090~hmac=948683a5babf14bd281b2b1c4ed31756fa41c6ec39fdfb42bc9da79a432c6b84" />
                            <p class="leading-relaxed">A loja tem uma variedade encantadora de peças modernas. Adorei o ambiente da loja, mas acho que poderiam expandir a gama de tamanhos disponíveis. Mesmo assim, a qualidade das roupas é excelente, e o design das peças é incrível.</p>
                            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">André Costa</h2>
                            <p class="text-gray-500">Recife, PE</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg" />
                            <p class="leading-relaxed">Essa loja é a minha escolha principal para encontrar as últimas tendências da moda. A coleção é sempre atualizada, e a qualidade das roupas é impressionante. A equipe é simpática e prestativa, tornando cada visita uma experiência positiva. Recomendo a todos os amantes da moda feminina!</p>
                            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Fernanda Oliveira</h2>
                            <p class="text-gray-500">Belo Horizonte, MG</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testemonials
