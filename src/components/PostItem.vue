<template>
    <div>
        <nav><router-link to="/posts">Название поста</router-link></nav>
        <div class="item" v-if="post"> 
            <li>
                <h3>{{ post.title }} </h3> 
                <p>{{ post.description }} </p>  
            </li>
            
        </div>
        <p v-else>Загрузка</p>
    </div>
        
</template>

<script>
import axios from 'axios';




export default {
    name: 'PostsItem',
    props: ['id'],
    data() {
        return {
            post: null
    }
        },
   
    
   
    async created() {
        axios.get(`http://vseverske.ru/blog/api/post/${this.id}`)
        .then(response => {
            this.posts = response.data.data;
            console.log(response.data);
        })
        .catch(error => {
            console.erroe('Ошибка:', error);
        }

        )

    
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