<template>
  <div class="container">
    <h1>Create Customer</h1>
    <div class="row"> 
        <div class="col-mid-6">
            <form @submit.prevent="createCustomer">
                <div class="form-group mt-2">
                    <label for="first_Name">First Name</label>
                    <input type="text" class="form-control" v-model="customer.first_Name">
                </div>

                <div class="form-group mt-2">
                    <label for="last_Name">Last Name</label>
                    <input type="text" class="form-control" v-model="customer.last_Name">
                </div>

                <div class="form-group mt-2">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" v-model="customer.phone">
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const customer = ref({});

const createCustomer = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/customers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer.value),
    });

    if (response.ok) {
      console.log('Customer created successfully');
      window.alert('Customer created successfully');

      router.push('/customers');
    } else {
      console.error('Failed to created customer');
    }
  } catch (error) {
    console.error('Error creating customer:', error);
  }
};

</script>

<style scoped>

.container{
  margin: 15vh auto;
}

</style>
