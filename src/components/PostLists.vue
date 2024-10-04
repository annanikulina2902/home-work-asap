<template>
    <div>

        <h1>Названия постов</h1>
        <ul > 
            <li v-for="post in posts" :key="post.id" class="item">
                <router-link to="{name: 'PostItem', params: {id: post.id}}">
                    {{ post.title }} 
                </router-link>
            </li>
        </ul>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'PostLists',
    data() {
        return {
            posts: []
        }
        },
    async created() {
        axios.get('http://vseverske.ru/blog/api/posts')
        .then(response => {
            this.posts = response.data.data;
            console.log(response.data);
        })
        .catch(error => {
            console.erroe('Ошибка:', error);
        }

        )

    
    }
    
    
    
 
       //'http://vseverske.ru/blog/api/posts 
        
    
    
    
        
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