import Swal from "sweetalert2";

export const handleModal2 = (item, setCart, setList, cart, list) => {
    Swal.fire({
      title: "Querés confirmar tu compra?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Agregar al carrito",
      denyButtonText: `No, gracias`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart + 1);
        setList([...list, item]);
        Swal.fire(`Agregado al carrito!`, "", "success");
      } else if (result.isDenied) {
        Swal.fire("Eliminado del carrito", "", "info");
      }
    });
  };