<template>
    <header>
        
        <nav><router-link to="/posts">Название поста</router-link></nav>
 
            <ul class="item"> 
            <li class="lists" v-if="post">
                <h3>{{ post.title }} </h3> 
                <p>{{ post.description }} </p>  
            </li>
            <p v-else>Загрузка</p>
        </ul>
        
    </header>

</template>

<script>
import axios from 'axios';

import axiosOption from '../axios';

const axiosApiInstance = axios.create(axiosOption);


export default {
    name: 'PostsItem',
    props: ["id"],
    data() {
        return {
            post: [],
    }
        },
        created() {
        this.fetchPost();
    }, 
    
   
    methods: {
        async fetchPost(){
        try{
            let response = await axiosApiInstance.get('http://vseverske.ru/blog/api/post/{id}')
                this.posts = response.data.data;
                console.log('posts:', this.posts)
        } catch(error) {
                console.error('Ошибка при загрузки постоа', error);
        }


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