<template>
    <div>
        <video id="l" width="100%" height="80%" @click="handleClick">
          <source src="../video/1.mp4" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
    name:'video',
    data(){
        return {

        }
    },
    methods:{
        handleClick(){
            var video=document.getElementById("l");
            if(video.paused){
                video.play()
            }else{
                video.pause()
            }
        }
    }
}
</script>
