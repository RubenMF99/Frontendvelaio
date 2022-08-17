import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    nombre:"",
    email: "",
    password: ""
  });
  const { email,password,nombre} = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email,password,nombre].includes("")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son Obligatorios",
      });
      return;
    }
    insertUser();
    setUser({
      email:"",password:"",nombre:""
    });
  };

  const insertUser = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_RUTA}/user/`;
      const result = await axios.post(url, data);
      Swal.fire({
        icon: "success",
        title: "Exitoso",
        text: "registro exitoso",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-auto p-5">
          <h1 className="text-center text-color mb-5 mt-5 ">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center ">
            <div className="col-md-6 m-3">
                
                <label className="text-color">Nombre </label>
                <input
                  className="form-control secundary-color"
                  type="text"
                  value={nombre}
                />
              </div>
              <div className="col-md-6 m-3">
                
                <label className="text-color">Correo </label>
                <input
                  name="email"
                  className="form-control secundary-color"
                  type="text"
                  placeholder="example@email.com"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6  m-3">
                <label className="text-color">Contraseña</label>
                <input
                  name="password"
                  className="form-control secundary-color mb-5"
                  type="password"
                  maxLength="10"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className=" form-group col-md-6">
                <button
                  className="btn primary-color text-white btn-tam btn-lg btn-block "
                  type="submit"
                >
                  Enviar Datos
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
