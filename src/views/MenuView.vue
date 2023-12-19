<template>
  <div class="container">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3 buttondiv">
      <router-link to="/menuitems/create" class="btn btn-dark mt-5 me-md-2" type="button">Add New Item in the Menu</router-link>
    </div>

    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="menuItem in menuItems" :key="menuItem.id" class="card m-3" style="width: 18rem;">
        <div class="ratio ratio-1x1">
          <img :src="menuItem.img_link" class="card-img-top img-fluid" style="object-fit: cover;" alt="An image of a food">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ menuItem.item_name }}</h5>
          <p class="card-text">{{ menuItem.description }}</p>
          <p class="card-text">{{ menuItem.price }}</p>
          <p class="card-text">{{ menuItem.category }}</p>
          <div class="icon-cell">
              <button @click="deleteOrder(menuItem.id)" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const menuItems = ref([]);

const fetchMenuItem = ()=> {
  fetch('http://localhost:8000/api/menuitems')
  .then(response => response.json())
  .then(data => {
    menuItems.value = data
  })
  .catch(error => {
    console.error('Error fetching menu items:', error);
  })
}

onMounted(() => {
  fetchMenuItem();
});

const deleteOrder = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/menuitems/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Menu item deleted successfully');
      window.alert('Menu item deleted successfully');
      fetchMenuItem();
    } else {
      console.error('Failed to delete menu item');
    }
  } catch (error) {
    console.error('Error deleting menu item:', error);
  }
};

</script>

<style scoped>

</style>