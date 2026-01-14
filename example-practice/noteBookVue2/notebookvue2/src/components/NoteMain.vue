<template>
    <div class="todo">
        <ul class="todo-list" v-for="(item, index) in noteLists" :key="item.id">
            <li class="list-li">
                <div class="list-info">
                    <span class="info-index">{{ index }}</span
                    >{{ item.info }}
                </div>
                <button class="del" @click="delSelf(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        noteLists: Array,
    },
    methods: {
        delSelf(id) {
            this.$emit("delAList", id);
            console.log(id);
        },
    },
};
</script>

<style scoped>
.todo-list {
    list-style-type: none;
    font-family: fangsong;
}

.list-li {
    height: 30px;
    background-color: #33333321;
    padding: 5px 10px;
    margin: 10px;

    display: flex;
    align-items: center;
    position: relative;

    border-radius: 5px;
}

.info-index {
    color: #28a745;
    font-size: 30px;
    font-family: "Courier New", Courier, monospace;
}
.del {
    height: 25px;
    width: 40px;
    background-color: #e90707;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    position: absolute;
    right: 5px;
}
</style>
