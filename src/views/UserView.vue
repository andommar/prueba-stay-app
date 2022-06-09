<template>
  <div class="common-layout">
    <el-container>
      <el-header><router-link to="/">Users</router-link>
      </el-header>
      <el-main>
        <el-descriptions
            title="Información de usuario"
            direction="horizontal"
            :column="4"
            border
        >
        <template v-if="user.address">
          <el-descriptions-item label="id">{{user.id}}</el-descriptions-item>
          <el-descriptions-item label="Username">{{user.username}}</el-descriptions-item>
          <el-descriptions-item :span=2 label="Name">{{user.username}}</el-descriptions-item>
          <el-descriptions-item :span=4 label="Address"></el-descriptions-item>
          <el-descriptions-item label="Street">{{user.address.street}}</el-descriptions-item>
          <el-descriptions-item label="Suite">{{user.address.suite}}</el-descriptions-item>
          <el-descriptions-item label="City">{{user.address.city}}</el-descriptions-item>
          <el-descriptions-item label="Zipcode">{{user.address.zipcode}}</el-descriptions-item>
          <el-descriptions-item label="Latitude">{{user.address.geo.lat}}</el-descriptions-item>
          <el-descriptions-item label="Longitude">{{user.address.geo.lng}}</el-descriptions-item>
          <el-descriptions-item label="Phone">{{user.phone}}</el-descriptions-item>
          <el-descriptions-item label="Website">{{user.website}}</el-descriptions-item>
          <el-descriptions-item :span=4 label="Company"></el-descriptions-item>
          <el-descriptions-item label="Name">{{user.company.name}}</el-descriptions-item>
          <el-descriptions-item label="CatchPhrase">{{user.company.catchPhrase}}</el-descriptions-item>
          <el-descriptions-item label="Bs">{{user.company.bs}}</el-descriptions-item>
        </template>
        </el-descriptions>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import usercrud from '../modules/usercrud'
export default {
    setup(){

      const {fetchUserById, user} = usercrud()
      
      onMounted(async()=>{
          fetchUserById()
      })

      return {user}
    }
}
</script>

<style>
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple{
    background-color: rgb(153,169,191);
}
</style>