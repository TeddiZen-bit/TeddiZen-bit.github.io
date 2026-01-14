<template>
    <div class="now">
        <p>共{{ noteLists.length }}个任务</p>
        <button class="delAll">删除全部</button>
    </div>
</template>

<script>
export default {
    props: {
        noteLists: Array,
    },
};
</script>

<style scoped>
.now {
    position: relative;
    display: flex;
}

.now p {
    font-size: 14px;
}

.delAll {
    position: absolute;
    right: 5px;

    height: 30px;
    width: 100px;
    background-color: #e90707;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
