// import App from '@/App.vue'
import AddPostit from '@/views/addPostit.vue'
import EditPostit from '@/views/editPostit.vue'
import Homeview from '@/views/homeview.vue'
import Note from '@/views/note.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },
    {
      path: '/note/:id',
      name: 'note',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Note,
      props: true
    },
    {
      path: '/note/edit/:id',
      name: 'editnote',
      component: EditPostit,
      props : true
    },

    {
      path: '/note/add',
      name: 'addnote',

      component: AddPostit,
    },
  ],
})




export default router
