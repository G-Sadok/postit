<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { usePostitStore } from '@/stores/postit';

const store = usePostitStore();
const router = useRouter();
const cont = ref('')

defineProps({
    postItId: String,
    title: String,
    content: Array

})

onMounted(() => {
    store.fetchPostits();
})

const showNote = (id) => {
    router.push({ name: 'note', params: { id } })
}

const deletepostits = (id) => {
    store.deletePostit(id);
    router.push({ name: 'home' });

}


</script>

<template>
    <div class="note-card-wrap">
        <article class="note-card p-3 overflow-auto">
            <div class="pt-2 d-flex flex-column ">
                <div @click="showNote(`${postItId}`)" class="text-decoration-none text-black">
                    <h6 class="fw-semibold mb-1 text-truncate">{{ title }}</h6>

                    <div class="d-flex gap-2 mb-2">
                    </div>
                    <div class="note-content">
                        <div v-for="cont in content"
                            class="mt-auto d-flex justify-content-between align-items-center text-truncate">
                            <p class="description text-wrap text-truncate">{{ cont }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <div class="note-actions">
            <router-link :to="`/note/edit/${postItId}`" class="edit-postit btn btn-sm d-inline-flex zoom-effect mx-2"><i
                    class="bi bi-pencil"></i></router-link>
            <button @click="deletepostits(`${postItId}`)" class="delete-postit btn btn-sm d-inline-flex zoom-effect"
                href="#"><i class="bi bi-trash"></i></button>
        </div>
    </div>


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

.note-card-wrap {
    position: relative;
    overflow: visible;
    margin-bottom: 28px;
}

.note-card {
    position: relative;
    background: #f0f976a6;
    border: 2.5px solid #deea37;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 150px;
    display: flex;
    flex-direction: column;
}


.note-content {
    max-height: 100px;
    overflow: auto;
    flex: 1;
    padding-bottom: 8px;
}

.note-actions {
    position: absolute;
    right: 12px;
    bottom: 0;
    transform: translateY(50%);
    display: flex;
    gap: 8px;
    z-index: 10;
    pointer-events: auto;
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