const app=Vue.createApp({
    data(){
        return{
            name:"jichuan",
            age:"18",
            show_content:false,
            x:0,
            y:0,
            name_list:[{"name":"jichuan","age":"18","fav":"coding"},
            {"name":"jichuan1","age":"19","fav":"coding"},
            {"name":"jichuan2","age":"20","fav":"eating"}],
        }
    }, 
    methods:{
        add_age(){
            this.age++;
        },
        change_name(new_name){
            this.name=new_name;
        },
        display_content(){
            this.show_content=!this.show_content;
        },
        handleMouseover(e){
            this.x=e.offsetX;
            this.y=e.offsetY;
        },
        fav_coding(i){
            return i.fav=="coding";
        },
        change_fav(i){
            if (i.fav=="coding"){
                i.fav="eating";
            } else{
                i.fav="coding";
            }
            console.log("change fav");
        }
    },
    computed: {
        filteredName(){
            return this.name_list.filter((i)=>i.fav=="coding");
        }
    }
})
app.mount('#app')