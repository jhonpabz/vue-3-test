import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
