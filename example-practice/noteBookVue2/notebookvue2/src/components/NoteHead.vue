<template>
    <div class=".input-area">
        <input v-model="info" type="text" id="note-input" class="note-input" placeholder="请输入记事内容" />
        <button @click="add" id="add-button" class="add-button">添加事件</button>
    </div>
</template>

<script>
export default {
    name: "noteHead",
};
</script>

<style scoped>
.input-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.note-input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    padding: 10px 20px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #218838;
}
</style>
