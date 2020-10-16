import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase.config";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const getUsers = async () => {
    try {
      const query = await firestore.collection("users").get();
      const users = query.docs.map((user) => {
        return {
          id: user.id,
          ...user.data(),
        };
      });
  
      setUsers(users);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const agregar = async (e) => {
    e.preventDefault()

    if(!user.trim()){
      console.log("escriba un email")
      return
    }

    try {
      
      const newUser = {
        email: user,
        date: Date.now()
      };
      
      console.log(newUser);

      await firestore.collection("users").add(newUser);

      setUsers([...users, { ...newUser }]);
      
      setUsers('')
    
    } catch (error) {
      console.log(error)
    }
  } 

  // const eliminar = async (id) => {
  //   try {
  //     await firestore.collection("users").doc(id).delete();
       
  //     const arrayFiltrado = users.filter(item => item.id !== id )
  //     setUser(arrayFiltrado);

  //   } catch (error) {
      
  //   }
  // }


  return (
    <>
      <p>Bienvenidos a Usuarios</p>
      {users.map((user) => (
        <p key={user.id}>
          {user.email} {user.password}
        </p>
      ))}
      <h3>Formulario</h3>
      <form onSubmit={agregar}>
        <input
          type="text"
          id="email"
          placeholder="ingrese email"
          onChange={(e) => setUser(e.target.value)}
          value={user.email}
        />
        {/* <input
          type="text"
          id="password"
          placeholder="ingrese contraseña"
          onChange={(e) => setUser(e.target.value)}
          value={user.password}
        /> */}
        <button type="submit ">Agregar</button>
      </form>
    </>
  );
};

export default Home;
