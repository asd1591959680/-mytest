import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home.vue");
const About = () => import("views/about/About.vue");
const Action = () => import("views/action/Action.vue");
const Service = () => import("views/service/Service.vue");
const HomeUser = () => import("views/home/childrenComp/HomeUser.vue");
const HomeData = () => import("views/home/childrenComp/HomeData.vue");
const UserBlog = () => import("views/home/childrenComp/UserBlog.vue");
const UserFriend = () => import("views/home/childrenComp/UserFriend.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "user",

        component: HomeUser,
        children: [
          {
            path: "blog",

            component: UserBlog,
          },
          {
            path: "friend",

            component: UserFriend,
          },
        ],
      },
      {
        path: "data",

        component: HomeData,
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/action",
    component: Action,
  },
  {
    path: "/service",
    component: Service,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
