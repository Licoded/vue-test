<template>
    <div>
        <tag-show :tags="tags"></tag-show>
    </div>
</template>

<script>
import TagShow from '../components/TagShow'
export default {
    components: {
        TagShow,
    },
    data(){
        return {
            tags: ['标签1', '标签2', '标签3']
        }
    }
}
</script>