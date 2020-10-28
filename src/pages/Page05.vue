<template>
    <div>
        <date-selector @childFn="parentFn"></date-selector>
    </div>
    
</template>

<script>
import DateSelector from '../components/DateSelector'
export default {
    components:{
        DateSelector,
    },
    data(){
        return{
            dateSel:'',
        }
    },
    methods:{
        parentFn(dateArr){
            this.dateSel = dateArr.map((date)=>{
                return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
            });
        }
    }
}
</script>