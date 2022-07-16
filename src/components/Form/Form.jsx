const Form = ({formData, handleOnChange, handleSubmit}) => {
   
    return (
    <div className="cart__form">
      
        
        <div><p>Para confirmar su compra por favor complete el siguiente formulario, y asi obtener su 
            numero de envio. Nuestro equipo de post-venta se pondra en contacto a la brevedad para corroborar sus datos</p></div>
        

        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <input name="nombre" 
            type="text"
            placeholder="Nombre" 
            onChange={handleOnChange}
            value={formData.value}
            required/>
            </div>

            <div>
            <input name="email" 
            type="email" 
            placeholder="Email"
            onChange={handleOnChange}
            value={formData.value}
            required/>
            </div>
            
            <div>
            <input name="email2" 
            type="email" 
            placeholder="Confirme su Email"
            onChange={handleOnChange}
            value={formData.value}
            required/>
            </div>

            <div>
            <input name="telefono" 
            type="number" 
            placeholder="Telefono"
            onChange={handleOnChange}
            value={formData.value}
            required/>
            </div>

            <div>
            <button>Comprar</button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default Form;