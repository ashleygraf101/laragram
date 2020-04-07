import VueRouter from 'vue-router';
import PostsList from './components/PostsList';
import Login from './components/Login';
import Register from './components/Register';
import PostsEdit from './components/PostsEdit';
import PostsAddNew from './components/PostsAddNew';

const router = new VueRouter({
  mode: 'history',
  routes: [
  	{ path: '/', 
  		beforeEnter: requireLogin,
  		component: PostsList 		
  	},    
    { 
    	path: '/login', 
    	component: Login, 
    	name:'login' 
    },
    { 
    	path: '/register', 
    	component: Register, 
    	name: 'register' 
    },
    { 
    	path: '/posts/edit', 
    	component: PostsEdit, 
    	name: 'posts.edit',
      props: true 
    },
    { 
    	path: '/posts/create', 
    	component: PostsAddNew, 
    	name: 'posts.create',
      props: true
    }
  ]
});

const requireLogin = () =>{

	if (window.App.signedIn) {
        next(true);
    } else {
        next({
            name: 'login'            
        })
    }

}

export default router;