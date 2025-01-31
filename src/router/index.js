import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loggedout",
    name: "LoggedOut",
    component: () =>
      import(/* webpackChunkName: "loggedout" */ "../views/LoggedOut.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/amatool",
    name: "AMA-Tool",
    component: () =>
      import(
        /* webpackChunkName: "amatool" */ "../views/AMATool/AMA-main-view.vue"
      ),
  },
  {
    path: "/learnprogress",
    name: "Learn-Progress",
    component: () =>
      import(
        /* webpackChunkName: "learnprogress" */ "../views/LearnProgress/LP-main-view.vue"
      ),
  },
  {
    path: "/rotitool",
    name: "ROTI-Tool",
    component: () =>
      import(
        /* webpackChunkName: "rotitool" */ "../views/ROTITool/ROTI-main-view.vue"
      ),
  },
  {
    path: "/lessonrecordings",
    name: "Lesson-Recordings",
    component: () =>
      import(
        /* webpackChunkName: "lessonrecordings" */ "../views/LessonRecordings/LR-main-view.vue"
      ),
  },
  {
    path: "/studentprofile",
    name: "Student-Profile",
    component: () =>
      import(
        /* webpackChunkName: "studentprofile" */ "../views/StudentProfile/SP-main-view.vue"
      ),
  },
  {
    path: "/teacherhub",
    name: "Teacher-Hub",
    component: () =>
      import(
        /* webpackChunkName: "teacherhub" */ "../views/TeacherHub/TH-main-view.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
