<script setup>

defineProps({
    postItId: String,
    title: String,
    content: Array,
    dateCreate: String,
    hourCreate: String,
    characters: Number
})

const deletepostits = (id) => {
    store.deletePostit(id);
    router.push({ name: 'home' });

}

</script>

<template>
            <div class="card-header-note h-100 mx-5 mt-5 p-3">

                <div class=" py-1 px-2">
                    <h3>{{ title }}</h3>
                    <span class="small text-secondary"><i class="bi bi-clock"></i> Créé le {{dateCreate}} à
                        {{ hourCreate }} | </span>

                    <span class="small text-secondary"><i class="bi bi-clock"></i> {{ characters }} caractères </span>

                </div>

                <div v-for="cont in content" class=" pt-4 px-2">
                    <p>{{ cont }}</p>

                </div>
                <div>
                    <div class="d-flex gap-3 justify-content-end">
                        <router-link :to="`/note/edit/${postItId}`"
                            class="add-postit btn btn-sm d-inline-flex zoom-effect float-end " href="#"><i
                                class="bi bi-pencil"></i> &nbsp; Edit</router-link>
                        <button @click="deletepostits(postItId)"
                            class="delete-postit btn btn-sm d-inline-flex zoom-effect" href="#"><i
                                class="bi bi-trash"></i>
                            &nbsp; Delete</button>
                    </div>
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