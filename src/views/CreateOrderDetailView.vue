<template>
  <div class="container">
    <h1>Create New Order Detail</h1>
    <div class="row"> 
      <div class="col-mid-3">
        <form @submit.prevent="createOrderDetail">

          <div class="form-group">
              <label for="order_id">Select Order Number</label>
              <select v-model="orderdetails.order_id" class="form-select">
                  <option value="" disabled>Select Order Number</option>
                  <option v-for="order in orders" :key="order.id" :value="order.id">{{ order.id }} - {{ order.customer.first_Name }}</option>
              </select>
              <p v-if="errors.order_id" class="text-danger">{{ errors.order_id }}</p>
          </div>
          <div class="form-group">
              <label for="menuitem_id">Select Menu Item</label>
              <select v-model="orderdetails.menuitem_id" class="form-select">
                  <option value="" disabled>Select Menu Item</option>
                  <option v-for="menuitem in menuitems" :key="menuitem.id" :value="menuitem.id">{{ menuitem.id }} - {{ menuitem.item_name }}</option>
              </select>
              <p v-if="errors.order_id" class="text-danger">{{ errors.order_id }}</p>
          </div>
          
          <div class="form-group mt-2">
            <label for="quantity">Quantity</label>
            <input v-model="orderdetails.quantity" type="text" name="quantity" class="form-control">
            <p v-if="errors.quantity" class="text-danger">{{ errors.quantity }}</p>
          </div>

          <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
            <button class="btn btn-dark">Add Order</button>                    
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const orderdetails = ref({
  customer_id: '',
  order_id: '',
  first_Name:'',
  menuitem_id: '',
  item_name: ''
});

const errors = ref({ 
  customer_id: '', 
  order_id: '',
  menuitem_id: '',
  quantity: '',
});

const customers = ref([]);

const orders = ref([]);

const menuitems = ref([]);

const fetchCustomers = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/customers`);
    if (response.ok) {
      const data = await response.json();
      customers.value = data;
    } else {
      console.error('Failed to fetch customers');
    }
  } catch (error) {
    console.error('Error fetching customers:', error);
  }
};

const fetchOrders = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/orders`);
    if (response.ok) {
      const data = await response.json();
      orders.value = data;
    } else {
      console.error('Failed to fetch orders');
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

const fetchMenuItems = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/menuitems`);
    if (response.ok) {
      const data = await response.json();
      menuitems.value = data;
    } else {
      console.error('Failed to fetch menu items');
    }
  } catch (error) {
    console.error('Error fetching menu items:', error);
  }
};

const createOrderDetail = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/orderdetails/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderdetails.value),
    });

    if (response.ok) {
      console.log('Order created successfully');
      window.alert('Order created successfully');
      router.push('/orderdetails');
    } else {
      console.error('Failed to create order detail');
    }
  } catch (error) {
    console.error('Error creating order detail:', error);
  }
};

onMounted(() => {
  fetchCustomers();
  fetchOrders();
  fetchMenuItems();
});
</script>

<style scoped>

.container{
  margin: 15vh auto;
}

</style>
