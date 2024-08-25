<template>
    <div class="container">
        <ul v-show="isActive">
            <button class="button" @click="toggle">Show {{ item.title }}</button>
        </ul>
        <div v-show="isActive" class="content">
            <AccordionItem v-for="item in lists" v-bind:key="item.title" :item="item" :list="lists.list" :title="lists.title"/>
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
        item: String,
        list: String,
        title: String,
    },
    data() {
        return{
            isActive:true,
        }
    },
    methods:{
        toggle(){
            this.isActive = !this.isActive
        }
    }
}
</script>

