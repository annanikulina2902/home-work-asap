<template>
    <ul class="list">
        <li >
             <h2>{{ list }}</h2>
        </li>
    </ul>
    
    
</template>

<script>
    export default {
        name: 'AccordionComponent',
        props: {
            list: String
        },
        
    }
</script>

<style scoped>
    .list {
        list-style-type: none;
        color: #E8A8EB;

    }
</style>
