<template>
    <template>{{getstudentdetails($route.params.id)}}</template>
    <button class="btn btn-primary mt-5"><router-link class="text-white" style="text-decoration:none;" :to="'/'">Back To Home</router-link></button>
    <div class="card text-dark bg-warning m-auto mt-5 w-50 " style="max-width: 18rem;">
        <div class="card-header">Student Info</div>
        <div class="card-body">
            <h5 class="card-title">Student Id : {{stdid}}</h5>
            <p class="card-text">Student Name : {{stdname}}</p>
            <p class="card-text">Student City : {{stdcity}}</p>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            stdid:this.$route.params.id,
            stdname:'',
            stdcity:'',
        }
    },
    methods:{
        async getstudentdetails(id){
            const res = await fetch(`http://localhost:3000/students/${id}`);
            let obj = await res.json();
            this.stdname = obj.name;
            this.stdcity = obj.city;
        }
    }
}
</script>