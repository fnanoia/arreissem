const Form = () => {

    //const [data, setData] = useState();

    /*const handleClick = (e) =>{

    console.log(e.event.target);

   }*/

  return (
    <div className="cart__form">
        <h3>Confirmar compra</h3>
        <form>
            <input type="text" name="name" placeholder="Nombre" />
            <input type="email" name="email" placeholder="Email" />
            <input type="number" name="phone" placeholder="Telefono" />
            <input type="button" value="Confirmar" /*onClick={handleClick}*/ ></input>
        </form>
    </div>
  )
}

export default Form;