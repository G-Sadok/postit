import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
//const postitLocalData = ref(localStorage.getItem('postitLocalData'));

export const usePostitStore = defineStore('postit', {

    state: () => ({
        postits: [],
        selectedPostit: null,
    }),

    actions: {

        async fetchPostits() {


            if (navigator.onLine) {
            console.log("je suis bien en ligne");
            try {
                const response = await axios.get('https://post-it.epi-bluelock.bj/notes');
                this.postits = response.data.notes;
                console.log(this.postits)
                
            } catch (e) {
                console.error(e)
                alert('Une erreur est survenue.')

            }
            } else{
                let postitLocalData = JSON.parse(localStorage.getItem('postitLocalData'));
                let postitsLocal = postitLocalData.postits

                this.postits = postitsLocal;
                console.log("je suis pas en ligne")
            }


        },

        async addPostit(userInput) {
            try {
                const contentStr = String(userInput.content);
                const contentTrim = contentStr.trim();
                const condition = !(userInput.title) || (userInput.title).trim() === "" || !(userInput.content) || contentTrim === ""

                if (condition) {
                    alert("Title & Content must not be empty !!!")
                    return
                }
                
                

                const cleanedUserInput = {
                    title: (userInput.title).trim(),
                    content: [contentTrim]
                }



                await axios.post('https://post-it.epi-bluelock.bj/notes', cleanedUserInput);
            } catch (e) {
                console.error(e)
                alert('Une erreur est survenue.')
            }
        },

        async deletePostit(id) {

            await axios.delete("https://post-it.epi-bluelock.bj/notes/" + id);
            this.fetchPostits()
        },

        async fetchPostitID(id) {
            const response = await axios.get("https://post-it.epi-bluelock.bj/notes/" + id);
            this.selectedPostit = response.data
        },

        async updatePostit(id, updatedData) {
            await axios.put(`https://post-it.epi-bluelock.bj/notes/${id}`, updatedData)
            this.fetchPostits()
        }
    },

    persist: { key: 'postitLocalData', storage: localStorage }

})