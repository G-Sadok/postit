<script setup>

import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePostitStore } from '@/stores/postit';
import Notes from '@/components/notes.vue';
import vuejsPaginateNextUmd from 'vuejs-paginate-next';


const store = usePostitStore();
const cont = ref('');
const router = useRouter();
const currentPage = ref(1);
const itemsPerPage = ref(16);


onMounted(() => {
    store.fetchPostits();
})

const paginatedPostits = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = (start + itemsPerPage.value)

    return (store.postits).slice(start, end)

})

const handlePageChange = (pageNum = Number) => {
    currentPage.value = pageNum
}

const showNote = (id) => {
    router.push({ name: 'note', params: { id } })
}

const deletepostits = (id) => {
    store.deletePostit(id);
    router.push({ name: 'home' });

}

</script>

<template>
    <main class="container">

        <div class="card mb-5">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h1>
                    Notes
                </h1>

                <h4 class="d-flex">
                    <router-link to="/note/add" class="add-postit btn btn-sm d-inline-flex zoom-effect float-end "
                        href="#"><i class="bi bi-plus-circle"></i> &nbsp; Add Post-it</router-link>
                </h4>
            </div>
        </div>
        <div class="all">

            <section class="row g-4 d-flex mb-5 ">
                <div v-for="postit in paginatedPostits" :key="postit._id"
                    class="col-12 col-md-6 col-lg-3 zoom-effect-note">
                    <!-- <article class="note-card p-3 overflow-auto">
                        <div class="pt-2 d-flex flex-column ">
                            <div @click="showNote(postit._id)" class="text-decoration-none text-black">
                                <h6 class="fw-semibold mb-1 text-truncate">{{ postit.title }}</h6>

                                <div class="d-flex gap-2 mb-2">
                                </div>
                                <div class="d-inline-block">
                                    <div
                                        class="mt-auto d-flex justify-content-between align-items-center text-truncate">
                                        <p class="description text-wrap text-truncate">{{ postit.content[0] }}...</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto d-flex justify-content-end align-items-center">


                                <router-link :to="`/note/edit/${postit._id}`"
                                    class="edit-postit btn btn-sm d-inline-flex zoom-effect mx-2"><i
                                        class="bi bi-pencil"></i></router-link>
                                <button @click="deletepostits(postit._id)"
                                    class="delete-postit btn btn-sm d-inline-flex zoom-effect" href="#"><i
                                        class="bi bi-trash"></i></button>
                            </div>

                        </div>
                    </article> -->
                    <Notes :postItId=postit._id :title=postit.title :content=postit.content />
                </div>
            </section>
            <vuejsPaginateNextUmd 
                :pageCount="Math.ceil(store.postits.length / itemsPerPage)" 
                :clickHandler="functionName" 
                :prevText="'<'" 
                :nextText="'>'"
                :containerClass="'pagination'" 
                :click-handler="handlePageChange"
                :page-class="'page-item'" />
        </div>

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

.note-card {
    background: #f0f976a6;
    border: 2.5px solid #deea37;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    /*width: 20vw;     */
    max-height: 150px;

}

/* .note-card :hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    background: #f0f976c9;
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

.zoom-effect {
    transition: all 0.5s;
}

.zoom-effect:hover {
    transform: scale(1.2);

}

/* 
.zoom-effect-note {
    transition: all 3s;
}

.zoom-effect-note :hover {
    transform: scale(1.1);

} */
</style>