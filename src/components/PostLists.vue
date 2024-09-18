<template>
    <div>
        <h2 class="title">Посты</h2>
        <ul class="item">
            <li class="lists" v-for="post in posts" :key="post.id">
                {{ post.title }} 
            </li>
        </ul>
    </div>

</template>

<script>
import axios from 'axios';

import axiosOption from '../axios';

const axiosApiInstance = axios.create(axiosOption);


export default {
    name: 'App',
    data() {
        return {
            posts: [],
    }
        },
        
    
   

    async created(){
        try{
            let response = await axiosApiInstance.get('blog/api/posts')
                this.posts = response.data.data
                console.log('posts:', this.posts)
        } catch(error) {
                console.error('Ошибка', error);
        }


        }
 
        
        
    
    
    
        
    }



</script>

<style scoped>
    .title {
        text-align: center;
        color: rgb(255, 180, 193);
        font-size: 30px;
    }
    .item {
        list-style-type: none;
        padding: 50px;
        color: rgb(255, 27, 171)
        
    }
    .lists {
        padding: 10px;
    }
</style>