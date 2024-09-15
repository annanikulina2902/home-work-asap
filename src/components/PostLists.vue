<template>
    <div>
        <h2>Посты</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
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
    props: {
        posts: []
    },

    async created(){
        try{
            let response = await axiosApiInstance.get('blog/api/posts')
                this.post = response.data.data,
                console.log('posts:', this.posts)
        } catch(error) {
                console.error('Ошибка', error);
        }


        }
 
        
        
    
    
    
        
    }



</script>