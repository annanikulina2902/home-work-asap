<template>
    <div class="container">
        <h2 @click="toggle"> {{ item.title }}</h2>
        <ul v-show="isActive">
            <AccordionItem v-for="list in item.list" v-bind:key="list" :list="list" />
        </ul>
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
        list: [{ 
            title: String, 
            list: [String]}], 
    },
    data() {
            return{
                isActive:true,
            }
        },
    
}
</script>

