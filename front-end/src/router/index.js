import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunckName: Home */ "../views/Home")
  },
  {
    path: "/createUser",
    name: "Create",
    component: () => import(/*webpackChunckName: Create */ "../views/Create")
  },
  {
    path: "/readUser",
    name: "Read",
    component: () => import(/*webpackChunckName: Read */ "../views/Read")
  },
  {
    path: "/updateUser",
    name: "Update",
    component: () => import(/*webpackChunckName: Update */ "../views/Update")
  },
  {
    path: "/deleteUser",
    name: "Delete",
    component: () => import(/*webpackChunckName: Delete */ "../views/Delete")
  } 
];

const router = new VueRouter({
  routes
});

export default router;
