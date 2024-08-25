<template>
    <div class="container">
        <div v-for="item in lists" v-bind:key="item.title" class="content">
            <AccordionItem :list="item.list" :title="item.title"/>
        </div>
    </div>
</template>

<script>
import AccordionItem from './AccordionItem.vue';

export default {
    name: 'AccordionList',
    components: {
        AccordionItem,
    },
    props: {
        lists: [{ 
            title: String, 
            list: [String]}], 
    },
}
</script>

