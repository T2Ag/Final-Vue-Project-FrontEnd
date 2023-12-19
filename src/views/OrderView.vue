<template>
  <div class="container">

    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3 buttondiv">
      <RouterLink :to="{ path: '/orders/create' }" class="btn btn-dark me-md-2 mt-5" type="button">
        Add New Order Number
      </RouterLink>
        
    </div>

    <div class="tablecontainer">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer.first_Name }}</td>
            <td>{{ order.orderdate }}</td>

            <td class="icon-cell">
              <button @click="deleteOrder(order.id)" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const orders = ref([]);

const fetchOrders = ()=> {
  fetch('http://localhost:8000/api/orders')
  .then(response => response.json())
  .then(data => {
    orders.value = data
  })
  .catch(error => {
    console.error('Error fetching orders:', error);
  })
}

onMounted(() => {
  fetchOrders();
});

const deleteOrder = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/orders/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Customer deleted successfully');
      window.alert('Customer deleted successfully');
      fetchOrders();
    } else {
      console.error('Failed to delete customer');
    }
  } catch (error) {
    console.error('Error deleting customer:', error);
  }
};

</script>

<style scoped>
.tablecontainer{
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.icon-cell {
  width: 18px; 
}
.icon-cell a{
  color: black;
}
</style>