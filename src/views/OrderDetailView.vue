<template>
 <div class="container">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3 buttondiv">
      <router-link to="/orderdetails/create" class="btn btn-dark mt-5 me-md-2" type="button">
        Add an Order Detail
      </router-link>
    </div>

    <table class="table table-bordered table-striped table-sm">
      <thead>
        <th>ID</th>
        <th>Order Number</th>
        <th>Customer Name</th>
        <th>Menu Item</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>

      </thead>
      <tbody>
        <tr v-for="orderDetail in orderDetails" :key="orderDetail.id">
          <td>{{ orderDetail.id }}</td>
          <td>{{ orderDetail.order.id }}</td>
          <td>{{ orderDetail.order.customer.first_Name}} {{ orderDetail.order.customer.last_Name}}</td>
          <td>{{ orderDetail.menuitem.item_name}}</td>
          <td>{{ orderDetail.quantity }}</td>
          <td>{{ orderDetail.totalprice}}</td>
          
          <td class="icon-cell">
            <button @click="deleteOrderDetail(orderDetail.id)" class="btn btn-danger">
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
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const orderDetails = ref([]);

const fetchOrderDetails = () => {
  fetch('http://localhost:8000/api/orderdetails')
    .then(response => response.json())
    .then(data => {
      orderDetails.value = data;
    })
    .catch(error => {
      console.error('Error fetching order details:', error);
    });
};

onMounted(() => {
  fetchOrderDetails();
});

const deleteOrderDetail = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/orderdetails/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Order detail deleted successfully');
      window.alert('Order detail deleted successfully');
      fetchOrderDetails();
    } else {
      console.error('Failed to delete order detail');
    }
  } catch (error) {
    console.error('Error deleting order detail:', error);
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