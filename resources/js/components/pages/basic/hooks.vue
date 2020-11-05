<template>
    <div>
            <h1 ref="myref">hooks test</h1>
            <p>My name is {{ name }}</p>
    </div>
</template>

<script>
export default {
    data(){
            return{
                    name:'akaphol'
            }
    },

    beforeCreate(){
            console.log(this.name)
    },
    created(){
            console.log('data and other function is avilable but not html',this.name)
    },
    mounted(){
            console.log(this.$refs.myref)
    }
}
</script>
