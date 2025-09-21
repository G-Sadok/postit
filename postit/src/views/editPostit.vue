<script setup>

import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'
import { usePostitStore } from '@/stores/postit';

const store = usePostitStore();

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const title = ref('');
const content = ref('');
const createdAt = ref('');
const createdHour = ref('');
const postit = ref([]);
const cont = ref('')

onMounted(async () => {
    
    await store.fetchPostitID(id);
    postit.value = store.selectedPostit;
    postit.value.content.forEach(element => {
        cont.value = element
    });
    title.value = postit.value.title;
    content.value = cont.value;
    createdAt.value = new Date(postit.value.createdAt.slice(0, 10)).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    createdHour.value = postit.value.createdAt.slice(11, 19).toLocaleString('fr-FR')
    

})
const characterCount = computed(() => content.value.length)



const updatePostit = async () => {
    try {
    await store.updatePostit(id, {
        title: String(title.value),
        content: [String(content.value)]
    })
        router.push({ name: 'home' })

    } catch (e) {
        console.error(e)
        alert('Une erreur est survenue.')
    }
}

const deletepostits = (id) => {
    store.deletePostit(id);
    router.push({ name: 'home' });

}


const retourPage = () => {
    window.history.back()
}

</script>

<template>
    <main class="container ">

        <button class="btn btn-outline-secondary border-0" @click="retourPage"> <i class="bi bi-arrow-left"></i> &nbsp
            Retour</button>


        <form @submit.prevent="updatePostit">
            <div>
                <div class="card-header-note h-100 mx-5 mt-5 p-3">

                    <div class="mb-3 ">
                        <label for="title" class="form-label ">Title</label>
                        <input v-model="title" type="text" class="form-control content-note py-1 px-2" id="title"
                            name="title" placeholder="Here is your title...">
                        <span class="small text-secondary"><i class="bi bi-clock"></i> Créé le {{ createdAt }} à
                            {{ createdHour }} </span>

                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Content</label>
                        <textarea v-model="content" class="form-control content-note py-1 px-2" id="content"
                            name="content" placeholder="Here is the content..." rows="10"></textarea>
                        <span class="small text-secondary float-end"><i class="bi bi-clock"></i> {{ characterCount }} caractères </span>
                    </div>

                </div>
            </div>

            <div class="card mt-3 mx-5">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h1>

                    </h1>


                    <div class="d-flex gap-3">
                        <button type="submit" class="save-postit btn btn-sm d-inline-flex zoom-effect float-end "
                            href="#"><i class="bi bi-floppy"></i> &nbsp; Save</button>
                        <button @click="deletepostits(id)" class="delete-postit btn btn-sm d-inline-flex zoom-effect"
                            href="#"><i class="bi bi-trash"></i>
                            &nbsp; Delete</button>
                    </div>
                </div>
            </div>

        </form>

    </main>



</template>

<style scoped>
.card {
    background-color: #ffffff00;
    border-color: #04c60100;

}

.card-header {
    background-color: #fff;
    border: 2.5px solid #fafaf3;
    border-radius: 10px;
    border-color: #04c60100;
    box-shadow: 0px 4px 6px rgba(180, 177, 177, 0.3);
}

.card-header-note {
    background-color: #edfa307b;
    border: 2px solid #deea37cd;
    border-radius: 10px;
    border-color: #deea37;
    box-shadow: 0px 4px 6px rgba(180, 177, 177, 0.3);
}

.content-note {
    background-color: #ffffff59;
    border-radius: 10px;
    border: 1px solid #ffffff4d;

}

.note-card {
    background: #f0f976a6;
    border: 2.5px solid #deea37;
    border-radius: 10px;
    /* width: 20vw;     */
}

/* .note-card :hover {
    background: #f0f976c9;
    border: 2.5px solid #deea37;
    border-radius: 10px;
    

} */

/* .all{
    background-color: black;
 } */

.delete-postit {
    background-color: #ffffff;
    color: #fe0303;
    border-color: #fe0303;
    transition: all 0.5s;
}

.delete-postit:hover {
    background-color: #fe0303;
    color: #fff;
    border-color: #fe0303;
}

.edit-postit {
    background-color: #ffffff;
    color: #04c601;
    border-color: #04c601;
    transition: all 0.5s;
}

.edit-postit:hover {
    background-color: #04c601;
    color: #fff;
    border-color: #04c601;
}

.add-postit {
    background-color: #7C3AED;
    color: #ffffff;
    border-color: #7C3AED;
    transition: all 0.5s;
}

.add-postit:hover {
    background-color: #ffffff;
    color: #7C3AED;
    border-color: #7C3AED;
}

.save-postit {
    background-color: #14be17;
    color: #ffffff;
    border-color: #14be17;
    transition: all 0.5s;
}

.save-postit:hover {
    background-color: #ffffff;
    color: #14be17;
    border-color: #14be17;
}

.zoom-effect {
    transition: all 0.5s;
}

.zoom-effect:hover {
    transform: scale(1.2);

}
</style>