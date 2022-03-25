<template>
    <div class="mb-3">
        <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Add new student</button>
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enter student data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="col-form-label text-start">Student Id:</label>
                            <input type="text" class="form-control" id="student-id" v-model="studentData.id">
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
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="senddata(studentData)">Confirm</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            studentData:{
                id:'',
                name:'',
                city:'',
            }
        }
    },
    methods:{
        senddata(student){
            this.$emit("addnewstudent",student)
            this.resetdata();
        },
        resetdata(){
            this.studentData = {
                id:'',
                name:'',
                city:''
            };
        }
    }
}
</script>