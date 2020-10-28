<template>
    <el-row>
      <div>
        <el-select v-model="modeSel" placeholder="请选择模式">
            <el-option label="创建日期" value="0"></el-option>
            <el-option label="完成日期" value="1"></el-option>
        </el-select>
        <date-selector @childFn="parentFn"></date-selector>
      </div>
      <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        style="width: 100%">
        <el-table-column
          prop="proCreateTime"
          label="日期"
          sortable
          width="180"
          column-key="date"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column 
          prop="tags"
          label="标签">
          <template slot-scope="scope">
            <tag-show :tags="scope.row.tags"></tag-show>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
</template>

<script>
import TagShow from '../components/TagShow'
import DateSelector from '../components/DateSelector'
export default {
    components:{
        TagShow,
        DateSelector,
    },
    props:['tableData'],
    data(){
        return {
            dateSel:'',
            modeSel:'',
        }
    },
  methods: {
    tableRowClassName({rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    parentFn(dateArr){
        this.dateSel = dateArr.map((date)=>{
            return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
        });
    }
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
