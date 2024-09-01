<template>
    <ul>
        <li >
             <h2>{{ list }}</h2>
        </li>
    </ul>
    
    
</template>

<script>
    export default {
        name: 'AccordionComponent',
        props: {
            list: [String]
        },
        
    }
</script>

