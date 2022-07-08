const Form = ({formData, handleOnChange, handleSubmit}) => {

    return (
    <div className="cart__form">
        <div><h3>Confirmar compra</h3></div>
        <form>
            <input name="nombre" 
            type="text"
            placeholder="Nombre" 
            onChange={handleOnChange}
            value={formData.value}/>

            <input name="email" 
            type="email" 
            placeholder="Email"
            onChange={handleOnChange}
            value={formData.value}/>
            
            <input name="telefono" 
            type="number" 
            placeholder="Telefono"
            onChange={handleOnChange}
            value={formData.value}/>

            <button onClick={handleSubmit}>Comprar</button>
        </form>
    </div>
  )
}

export default Form;