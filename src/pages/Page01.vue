<template>
  <div>
    <add-problem></add-problem>
    <table-show :tableData="tableData"></table-show>
  </div>
</template>

<script>
import TableShow from '../components/TableShow'
import AddProblem from '../components/AddProblem'
export default {
  components: {
        TableShow,
        AddProblem
  },
  data() {
    return {
      tableData: [],
    };
  },
  created(){
    this.$http.get('/problem/getAll').then(res=>{
      this.tableData = res.data.data.map((item)=>{
        function timestampToTime(timestamp) {
            let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            let D = date.getDate() + ' ';
            // let h = date.getHours() + ':';
            // let m = date.getMinutes() + ':';
            // let s = date.getSeconds();
            return Y+M+D;
        }
        item.proCreateTime = timestampToTime(item.proCreateTime);
        return item;
      });
      console.log(this.tableData[0])
    })
  }
};
</script>
