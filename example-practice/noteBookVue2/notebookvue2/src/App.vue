<template>
    <div class="container">
        <h1 class="title">记事本</h1>
        <NoteHead></NoteHead>
        <NoteMain :noteLists="List" @delAList="delSelf"></NoteMain>
        <NoteFoot :noteLists="List"></NoteFoot>
    </div>
</template>

<script>
import NoteFoot from "./components/NoteFoot.vue";
import NoteHead from "./components/NoteHead.vue";
import NoteMain from "./components/NoteMain.vue";
export default {
    data() {
        return {
            List: [
                { id: 1, info: "test1" },
                { id: 2, info: "test2" },
                { id: 3, info: "test3" },
            ],
        };
    },
    components: {
        NoteHead,
        NoteMain,
        NoteFoot,
    },
    methods: {
        delSelf(id) {
            this.List = this.List.filter((item) => item.id != id);
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}
</style>
>
