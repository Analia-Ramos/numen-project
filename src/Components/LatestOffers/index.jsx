import React from "react";
import { productos } from "./constants";

import { handleModal2 } from './controller'

import * as styles from './styles'

const LatestOffers = ({ cart, setCart, list, setList }) => {
  return (
    <div className={styles.MAIN_CONTAINER}>
      <h2 className={styles.TITLE}>On Sale</h2>
      <div className={styles.CARD_CONTAINER}>
        <div className={styles.CARDS}>
          {productos.map((item) => (
            <div className="duration-500 transform bg-white rounded-xl hover:translate-y-2">
              <div className="flex flex-col p-4">
                <div className="overflow-hidden rounded-xl">
                  <img src={item.imagen} alt="" className="w-80 h-80" />
                </div>
                <p className="text-2xl text-center text-black text-bold">
                  {item.texto}
                </p>
                <h3 className="m-px text-lg text-center text-black">
                  {item.precio}
                </h3>
                <button
                  onClick={() => {
                    handleModal2(item, setCart, setList, cart, list);
                  }}
                  className="mx-6 px-1.5 h-10 mt-4 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-300 text-black"
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestOffers;
