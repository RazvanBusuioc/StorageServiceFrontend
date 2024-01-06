import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Download from "@/views/Download.vue";
import Upload from "@/views/Upload.vue";
import Update from "@/views/Update.vue";
import Delete from "@/views/Delete.vue";
import FileInformation from "@/views/FileInformation.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/download",
    name: "Download",
    component: Download,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
  {
    path: "/delete",
    name: "Delete",
    component: Delete,
  },
  {
    path: "/fileinfo",
    name: "FileInformation",
    component: FileInformation,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;