import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import CreateCustomer from '../views/CreateCustomerView.vue'
import OrderView from '../views/OrderView.vue'
import CreateOrder from '../views/CreateOrderView.vue'
import MenuItemView from '../views/MenuView.vue'
import CreateMenuItem from '../views/CreateMenuView.vue'
import OrderDetailsView from '../views/OrderDetailView.vue'
import CreateOrderDetails from '../views/CreateOrderDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomerView
    },
    {
      path: '/customers/create',
      name: 'create-customers',
      component: CreateCustomer
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/orders/create',
      name: 'create-orders',
      component: CreateOrder
    },
    {
      path: '/menuitems',
      name: 'menuitems',
      component: MenuItemView
    },
    {
      path: '/menuitems/create',
      name: 'create-menuitems',
      component: CreateMenuItem
    },
    {
      path: '/orderdetails',
      name: 'orderdetails',
      component: OrderDetailsView
    },
    {
      path: '/orderdetails/create',
      name: 'create-orderdetails',
      component: CreateOrderDetails
    },
  ]
})

export default router
