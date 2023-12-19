<template>
  <div class="container">
    <h1>Create Menu Item</h1>
    <div class="row">
      <div class="col-mid-3">
        <form @submit.prevent="createMenuItem">
          <div class="form-group mt-2">
            <label for="item_name">Item Name</label>
            <input v-model="menuItem.item_name" type="text" name="item_name" class="form-control">
            <p v-if="errors.item_name" class="text-danger">{{ errors.item_name }}</p>
          </div>

          <div class="form-group mt-2">
            <label for="description">Description</label>
            <input v-model="menuItem.description" type="text" name="description" class="form-control">
            <p v-if="errors.description" class="text-danger">{{ errors.description }}</p>
          </div>

          <div class="form-group mt-2">
            <label for="price">Price</label>
            <input v-model="menuItem.price" type="number" name="price" class="form-control">
            <p v-if="errors.price" class="text-danger">{{ errors.price }}</p>
          </div>

          <div class="form-group mt-2">
            <label for="img_link">Image Link</label>
            <input v-model="menuItem.img_link" type="text" name="img_link" class="form-control">
            <p v-if="errors.img_link" class="text-danger">{{ errors.img_link }}</p>
          </div>

          <div class="form-group mt-2">
            <label for="category">Category</label><br>
            <div class="form-check">
              <input v-model="menuItem.category" class="form-check-input" type="radio" name="category" id="drinkRadio" value="Drink">
              <label class="form-check-label" for="drinkRadio">Drink</label>
            </div>
            <div class="form-check">
              <input v-model="menuItem.category" class="form-check-input" type="radio" name="category" id="mealRadio" value="Meal">
              <label class="form-check-label" for="mealRadio">Meal</label>
            </div>
            <div class="form-check">
              <input v-model="menuItem.category" class="form-check-input" type="radio" name="category" id="dessertRadio" value="Dessert">
              <label class="form-check-label" for="dessertRadio">Dessert</label>
            </div>
            <p v-if="errors.category" class="text-danger">{{ errors.category }}</p>
          </div>

          <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
            <button class="btn btn-dark">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuItem = ref({});

const errors = ref({});

const createMenuItem = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/menuitems/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(menuItem.value),
    });

    if (response.ok) {
      console.log('Menu item created successfully');
      window.alert('Menu item created successfully');

      router.push('/menuitems');
    } else {
      console.error('Failed to create menu item');
    }
  } catch (error) {
    console.error('Error creating menu item:', error);
  }
};

</script>

<style scoped>

.container{
  margin: 15vh auto;
}

</style>
