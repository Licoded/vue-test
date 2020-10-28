<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">添加新题目</el-button>
        <el-dialog title="添加题目" :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="题目名" prop="proTitle">
                <el-input v-model="ruleForm.proTitle"></el-input>
                </el-form-item>
                <el-form-item label="题目平台" prop="platform">
                <el-select v-model="ruleForm.platform" placeholder="请选择题目平台">
                    <el-option label="Codeforces" value="cf"></el-option>
                    <el-option label="HDU OJ" value="HDU"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="题目链接" prop="proUrl">
                <el-input v-model="ruleForm.proUrl"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogFormVisible: false,
            formLabelWidth: "120px",
            ruleForm:{
                proTitle: '',
                platform: '',
                proUrl: '',
            },
            rules:{
                proTitle: [
                    { required: true, message: '请输入题目名', trigger: 'change' }
                ],
                platform: [
                    { required: true, message: '请选择题目平台', trigger: 'change' }
                ],
                proUrl: [
                    { required: true, message: '请输入题目链接', trigger: 'change' }
                ],
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                alert('submit!');
                } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    }
}
</script>


<style scoped>
.el-dialog .el-input{
    width: 450px;
}
</style>