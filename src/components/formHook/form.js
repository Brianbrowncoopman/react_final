import { useForm } from "react-hook-form";
import style from './style.css';


const Form = () => {

  const { register, formState: { errors }, watch, handleSubmit } = useForm()
  
  const onSubmit = (data) => {
    console.log(data);
  }

  const incluirTelefono = watch('incluirTelefono');

  return <div className="form">
    <h2>Formulario de contacto</h2>
    {/*<div className="info">
      <p>Nombre: {watch('name')}</p>
      <p>Apellido: {watch('lastName')}</p>
      <p>Email: {watch('email')}</p>
    </div>*/}
    <form className="formu" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre: </label>
        <input type="text" {...register('name', {
          required: true,
          maxLength: 15,
          minLength:5,
        })} />
        {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
        {errors.name?.type === 'maxLength' && <p>El nombre debe ser de maximo 15 digitos</p>}
        {errors.name?.type === 'minLength' && <p>El nombre debe ser de minimo 5 digitos</p>}
      </div>
      <br></br>
      <div>
        <label>Apellido: </label>
        <input type="text" {...register('lastName', {
          required: true,
          maxLength: 15,
          minLength:3,
        })} />
        {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
        {errors.name?.type === 'maxLength' && <p>El Apellido debe ser de maximo 15 digitos</p>}
        {errors.name?.type === 'minLength' && <p>El Apellido debe ser de minimo 3 digitos</p>}
      </div>
      <br></br>
      <div>
        <label>Email: </label>
        <input type="text" {...register('email', {
          required: true,
          pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/i ,
        })} />
        {errors.email?.type === 'pattern' && <p>el formato del email es incorrecto</p>}
      </div>
      <br></br>
      <div>
        <label>Pais: </label>
        <select {...register('pais', {
          required: true,
        })}>
          <option value="Ch">Chile</option>
          <option value="Arg">Argentina</option>
          <option value="Pe">Peru</option>
          <option value="Br">Brasil</option>
        </select>
      </div>
      <br></br>
      <div className="tel">
        <label>incluir telefono</label>
        <input type="checkbox" {...register('incluirTelefono')}/>
      </div>
      { incluirTelefono && (
        <div>
        <label>Telefono: </label>
        <input type="text" {...register('telefono')}/>
      </div>
      )}
      <br></br>
      <button type="submit" value="Enviar">Enviar</button>
      
    </form>
  </div>
}

export default Form;