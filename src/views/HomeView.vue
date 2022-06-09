<template>
<el-container>
  <el-header>
          <el-button type="warning" size="small" @click="centerDialogVisible = true">Añadir usuario</el-button>
  </el-header>
  <el-main>
    <div class="home">
      <el-table :data="state.users" border stripe style="width: 65%">
      <el-table-column prop="nombre" label="Nombre" width="180" />
      <el-table-column prop="username" label="Username" width="180" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="id" fixed="right" label="Operaciones" width="180">
        <template v-slot="scope">
          <el-button type="primary" size="small" @click="$router.push({ name: 'user', params: { id: scope.row.id } })">
            Detalle
          </el-button>

          <el-popconfirm 
            title="¿Estás seguro que quieres eliminar este usuario?"
            confirm-button-text="Sí"
            cancel-button-text="No"
            icon-color="#626AEF"
            @confirm="deleteUser(scope.row.id)">

            <template #reference>
              <el-button type="danger" size="small">Eliminar</el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    </div>

    <!-- New user form -->
    <el-dialog v-model="centerDialogVisible" title="Nuevo usuario" width="35%" center>
    <el-form :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="validateForm()"
          >Confirm</el-button
        >
      </span>
    </template>
    </el-dialog>
  </el-main>
</el-container>


</template>

<script>
// @ is an alias to /src
import { onMounted, ref, reactive } from 'vue'
import usercrud from '../modules/usercrud'

export default {
  components: {
  },
  setup() {
    const centerDialogVisible = ref(false)
    const formLabelWidth = '80px'
    

    const {state, fetchUsers, deleteUser, newUser} = usercrud()

    const form = reactive({
      name: '',
      username: '',
      email: '',
    })


    const validateForm = () =>{
      console.log('Form subtimed')
      console.log(form)
      newUser(form)
    }
    onMounted(()=>{
      fetchUsers()
    })
    
    return { state, deleteUser, form, formLabelWidth, centerDialogVisible, validateForm }
  }
}
</script>

<style>
.home{
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
