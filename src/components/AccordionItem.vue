<template>
    <li>
        <h2 @click="toggle">{{ title }}</h2>
        <div v-show="isActive">
            <h3 v-for="item in list" v-bind:key="item" id="list">{{ item }}</h3>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'AccordionComponent',
        props: {
            list: [String],
            title: String
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

