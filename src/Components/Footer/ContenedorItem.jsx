import Item from "./Item";
import {categorias, preguntasFrecuentes, sobreNosotros} from "./Menus"

const ItemsContainer = () => {
    return (
        <div className="grid grid-cols-1 gap-6 px-10 py-16 sm:grid-cols-4 sm:px-8">
            <img src="/images/logo.png" alt="Logo" className="w-32"></img>
            <Item Links={categorias} title="Categorías" />
            <Item Links={preguntasFrecuentes} title="Preguntas Frecuentes" />
            <Item Links={sobreNosotros} title="Sobre Nosotros" />
        </div>
    );
};

export default ItemsContainer;