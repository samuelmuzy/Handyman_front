import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Chat from "../Chat";
import { Modal } from "../Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FornecedorProps {
  id: string
  nome: string;
  media_avaliacoes: string;
  descricao: string;
  sub_descricao: string;
  valor: string;
  imagemPerfil: string;
  imagemFornecedor: string;
  local: string;
  imagensServicos: string[];
  categoria_servico: string[];
}
export const PerfilFornecedor = ({ id, local, nome, media_avaliacoes, descricao, sub_descricao, valor, imagemPerfil, imagemFornecedor, imagensServicos, categoria_servico }: FornecedorProps) => {

  const images = imagensServicos.map((imagem) => ({
    original: imagem,
    thumbnail: imagem,
  }));
  const [isChatOpen, setIsChatOpen] = useState(false);

  const categorias = categoria_servico.map((fornecedor) => (
    <button className="border border-orange-400 rounded px-3 py-1 text-sm hover:bg-orange-100" key={fornecedor}>
      {fornecedor}
    </button>
  ));
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-col md:flex-row justify-around w-full  bg-white rounded-lg  p-6 gap-6">
        {/* Perfil do profissional */}
        <div className="flex items-center gap-4">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src={imagemPerfil}
            alt="Imagem do Fornecedor"
          />
          <div>
            <h2 className="text-xl font-semibold text-orange-700">{nome}</h2>
            <p className="text-lg text-gray-700">⭐ {media_avaliacoes}</p>
            <p className="text-gray-600">{local}</p>
            <div className="mt-2">
              <h3 className="font-semibold text-orange-700">Especialidades:</h3>
              <p className="text-gray-700">
                {descricao}
              </p>
            </div>
          </div>
        </div>

        {/* Card lateral com valor */}
        <div className="flex flex-col border border-orange-400 rounded-lg p-4 w-72">
          <div className="flex items-center gap-2 mb-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={imagemPerfil}
              alt="Imagem Ilustrativa"
            />
            <h2 className="font-semibold text-orange-600">{nome}</h2>
          </div>
          <p className="text-xl font-bold text-gray-900 mb-1">R$ {valor},00</p>
          <p className="text-xs text-gray-500 mb-2">* Valor cobrado por hora</p>
          <p className="text-xs text-gray-500 mb-4">Finalização em 2 dias</p>
       
          <button onClick={() => setIsChatOpen(true)} className="bg-green-500 mb-3 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Me contate
          </button>
          <button onClick={() => navigate(`/pagamento/${id}`)} className="bg-orange-500 text-white text-sm px-4 pt-2 rounded hover:bg-orange-500-600 transition-colors">
            Fazer chamado
          </button>
        </div>
      </div>

      {/* Serviços oferecidos */}
      <div className="mt-6 w-full max-w-5xl bg-orange-50 rounded-lg p-4 shadow-lg">
        <h3 className="text-orange-700 font-semibold mb-2">
          Este serviço é oferecido por um profissional.
        </h3>
        <div className="flex gap-4">
          {categorias}
        </div>
      </div>
      {/*imagem ilustrativa */}
      <div className="mt-6 w-full max-w-4xl rounded-lg p-4">
        <h2 className="text-orange-700 font-semibold mb-5">Imagens do serviço:</h2>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          showThumbnails={true}
          thumbnailPosition="bottom" // top, bottom, left, right
        />

      </div>

      {/* Sobre o profissional */}
      <div className="mt-6 w-full max-w-5xl rounded-lg p-4">
        <p className="text-orange-700 font-semibold mb-2">sobre-min:</p>
        <p>textkjjhkjhjkkj jkhkjhkjhjkhk hjkhkjhjkhjkhj hkjhkjhkjh</p>
        <p>{sub_descricao}</p>
        <p>{imagemFornecedor}</p>
      </div>
      
      <Modal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div onClick={() => setIsChatOpen(false)} className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-[1000px] w-[90vw] h-[80vh] max-h-[600px] flex flex-col">
            <Chat idFornecedor={id} />
          </div>
        </div>
      </Modal>
    </div>

  )
}