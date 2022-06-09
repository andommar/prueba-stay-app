import { ref, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'

//Función compsable para el crud de los usuarios. Delete, get, post (faltaría update)
const getUsers = () =>{

    const route = useRoute();
    const userId = computed(() => route.params.id)

    //Creamos la constante state (de state management) donde guardar la información de los usuarios
    const state = ref({
        users:[]
    })

    //Hacemos fetch al endpoint de los users y mapeamos el resultado de la promesa
    //para adaptarlo al formato de la tabla de Element Plus
    const fetchUsers = async () =>{
        try{
          await fetch ('https://jsonplaceholder.typicode.com/users')
          .then(res=> res.json())
          .then(data => {
            const userData = data.map(el=> (
              {
                'id': el.id,
                'nombre': el.name,
                'username': el.username,
                'email': el.email
              }
            ))
            state.value.users = userData
          })
        }
        catch (error) {
          console.log(error)
        }
    }

    //Pasamos id del usuario como parametro y el método DELETE al endpoint para indicar que
    //queremos eliminar el usuario. Seguidamente se vuelve a hacer fetch de los usuarios
    //para actualizar la tabla
    const deleteUser = (id)=>{
        try{
          fetch('https://jsonplaceholder.typicode.com/users/'+id, { method: "DELETE"})
          .then (fetchUsers())
        } catch(error) {
          console.log(error)
        }
    }

    //Funcion método post que se le pasa el formulario de nuevo usuario
    const newUser = (form) =>{
        try{
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: form.name,
                    username: form.username,
                    email: form.email,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        } catch(error) {
            console.log(error)
        }
    }

    //Creamos el ref user donde guardamos la información del usuario que obtenemos del fetch
    //con el id especifico del usuario al que hemos accedido desde la tabla
    const user = ref({})
    const fetchUserById = async () =>{
        try{
            await fetch("https://jsonplaceholder.typicode.com/users/"+userId.value)
            .then(res=> res.json())
            .then(data=> {
                user.value = data
        })
        } catch (error) {
            console.log(error)
        }
    }

    return {
        state,
        fetchUsers,
        fetchUserById,
        deleteUser,
        newUser,
        user
    }

}

export default getUsers
