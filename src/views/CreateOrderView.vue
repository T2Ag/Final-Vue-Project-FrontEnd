<template>
  <div class="container">
    <h1>Create Order</h1>
    <div class="row"> 
        <div class="col-mid-6">
            <form @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="customer_id">Select Customer</label>
                    <select v-model="order.customer_id" class="form-select">
                        <option value="" disabled>Select Customer</option>
                        <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{ customer.id }}</option>
                    </select>
                    <p v-if="errors.customer_id" class="text-danger">{{ errors.customer_id }}</p>
                </div>

                <div class="form-group mt-2">
                    <label for="status">Status</label><br>
                    <div v-for="status in ['Pending', 'InProgress', 'Completed']" :key="status" class="form-check">
                        <input v-model="order.status" :id="`${status}Radio`" class="form-check-input" type="radio" :value="status">
                        <label :for="`${status}Radio`" class="form-check-label">{{ status }}</label>
                    </div>
                    <p v-if="errors.status" class="text-danger">{{ errors.status }}</p>
                </div>
                
                <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
  
                <button type="submit" class="btn btn-dark" >
                    Create Customer
                </button>                    
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

const order = ref({
  customer_id: '',
  status: '',
});

const customers = ref([]);

const errors = ref({
  customer_id: '',
  status: '',
});

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

const createOrder = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order.value),
    });

    if (response.ok) {
      console.log('Order Number created successfully');
      window.alert('Order Number created successfully');

      router.push('/orders');
    } else {
      console.error('Failed to create order');
    }
  } catch (error) {
    console.error('Error creating order:', error);
  }
};

onMounted(() => {
  fetchCustomers();
});

</script>

<style scoped>

.container{
  margin: 15vh auto;
}

</style>
