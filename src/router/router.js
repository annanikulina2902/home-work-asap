import Vue from 'vue';
import Router from 'vue-router';

import PostLists from '@/components/PostLists.vue';
import PostItem from '@/components/PostItem.vue';


Vue.use(Router)



export  default new Router({
        mode: "history",
        routes: [
                { 
                    path: "/posts", 
                    name: "PostLists", 
                    component: PostLists 
                },
                { 
                    path: "/post/:id",
                    name: "PostItem",
                    component: PostItem,
                    props: true
                 }, 
                 { path: "*", 
                   redirect: "/posts",
                },
        ]

    });
    
    



