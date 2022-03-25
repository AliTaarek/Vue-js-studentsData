<template>
    <addcomponent @addnewstudent="addstudent"/>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student">
                <td>{{student.id}}</td>
                <td><router-link :to="'/student/'+student.id">{{student.name}}</router-link></td>
                <td>{{student.city}}</td>
                <td><i class="fa-solid fa-trash-can" @click.ctrl="deletestudent(student.id)"></i>   |   <i class="fa-solid fa-user-pen" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="displayeditvalues(student)"></i></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="4" class="text-center">Total Number of students : {{students.length}}</th>
            </tr>
        </tfoot>
    </table>

    <div class="mb-3">
        <div class="modal fade" id="exampleModal2" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">Update student data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="col-form-label text-start">Student Id:</label>
                            <input type="text" class="form-control" v-model="studentData.id" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="student-name" class="col-form-label">Student name:</label>
                            <input type="text" class="form-control" id="student-name" v-model="studentData.name">
                        </div>
                        <div class="mb-3">
                            <label for="student-city" class="col-form-label">Student city:</label>
                            <input type="text" class="form-control" id="student-city" v-model="studentData.city">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetdata()">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="editstudent(studentData)">Confirm</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import addcomponent from "./addcomponent.vue"
export default {
    data(){
        return{
            students:[],
            studentData:{
                id:'',
                name:'',
                city:'',
            }
        }
    },
    methods:{
        async addstudent(student){
           await fetch("http://localhost:3000/students",{
               method: "POST",
               headers: { "Content-Type":"application/json"}
            ,
            body:JSON.stringify(student)
           });
           this.students.push(student);
        },
        async deletestudent(id){
            if(confirm("Are you sure you want to delete this student ?")){
                await fetch(`http://localhost:3000/students/${id}`,{
                    method: "DELETE",
                 });
                let student = this.students.find(student => student.id == id);
                let index = this.students.indexOf(student);
                this.students.splice(index,1);
            }
        },
        displayeditvalues(student){
            this.studentData.id = student.id;
            this.studentData.name = student.name;
            this.studentData.city = student.city;
        },
        async editstudent(newstudent){
            await fetch(`http://localhost:3000/students/${newstudent.id}`,{
                method: "PUT",
                headers: { "Content-Type":"application/json"},
                body:JSON.stringify(newstudent)
            });
            this.students.find(student => student.id == newstudent.id).name = newstudent.name;
            this.students.find(student => student.id == newstudent.id).city = newstudent.city;
        },
        resetdata(){
            this.studentData = {
                id:'',
                name:'',
                city:''
            };
        }
    },
    components:{
        addcomponent
    },
    async created(){
        const res = await fetch("http://localhost:3000/students");
        this.students = await res.json();
    }
}
</script>

<style scoped>
.fa-trash-can{
    color:red;
    margin:0 0.2rem;
}
.fa-user-pen{
    color:blue;
    margin:0 0.2rem;
}

.fa-user-pen:hover,.fa-trash-can:hover{
    cursor:pointer;
}
</style>