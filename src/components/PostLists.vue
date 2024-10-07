<template>
    <div>

        <h1 class="title">Названия постов</h1>
        <ul class="post_list"> 
            <li class="post__item" v-for="post in posts" :key="post.id" >
                <router-link class="item__link" :to="{ name: 'PostItem', params: {id: post.id}}">
                  {{ post.title }} 
                </router-link>
            </li>
        </ul>

    </div>

</template>

<script>
import axiosInstance from '@/axios';


export default {
    name: 'PostLists',
    data() {
        return {
            posts: []
        }
        },
    async created() {
        axiosInstance.get('/posts')
        .then(response => {
            this.posts = response.data.data;
            console.log(response.data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
        }

        )

    
    }
        
    }



</script>

<style lang="scss" scoped >
$text-color: #b10000;
$title-color: #1d1d1d;
$title-size: 30px;
$text-title: 20px;


.title {
        text-align: center;
        color: $title-color;
        font-size: $title-size;
    }
.post_list {
    text-decoration: none;
    list-style-type: none;
    padding: 0 auto;
}
.post__item {
    padding: 20px;
    font-size: $text-title;
    
    
}

.item__link {
    text-decoration: none;
    color: $text-color;
    cursor: pointer;
}

</style>