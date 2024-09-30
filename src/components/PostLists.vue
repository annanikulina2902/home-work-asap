<template>
    <header>

        <h2>Названия постов</h2>
        <ul class="item" v-if="posts.length" > 
            <li class="lists" v-for="post in posts" :key="post.id">
                <router-link to="{name: 'PostItem', params: {id: post.id}}">
                <h3>{{ post.title }} </h3> 
            </router-link>
            </li>
        </ul>
        <p v-else>Загрузка</p>
    </header>

</template>

<script>
import axios from 'axios';

import axiosOption from '../axios';

const axiosApiInstance = axios.create(axiosOption);


export default {
    name: 'PostLists',
    data() {
        return {
            posts: [],
    }
        },
    created() {
        this.fetchPosts();
    }, 
    
   
    methods: {
        async fetchPosts(){
        try{
            let response = await axiosApiInstance.get('http://vseverske.ru/blog/api/posts');
                this.posts = response.data.data
                console.log('posts:', this.posts)
        } catch(error) {
                console.error('Ошибка при загрузки постои', error);
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