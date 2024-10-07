<template>
    <div class="content">
        <nav><router-link to="/posts" class="title">Название поста</router-link></nav>
        <div v-if="post"> 
        
                <h2>{{ post.title }} </h2> 
                <p>{{ post.description }} </p>  
            
            
        </div>
        <p v-else>Загрузка</p>
    </div>
        
</template>

<script>
import axiosInstance from '@/axios';




export default {
    
    props: ['id'],
    data() {
        return {
            post: null
        };
    },
   
    
   
    async created() {
        axiosInstance.get(`/post/${this.id}`)
        .then(response => {
            this.post = response.data.data;
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


.content {
    padding: 50px;
}
.title {
    text-decoration: none;
    color: $title-color;
    font-size: $title-size;
    
}
h2 {
    color: $text-color;
}
p {
    color: $text-color;
}

</style>