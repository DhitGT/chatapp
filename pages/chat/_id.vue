<template>
  <div>
    <div class="chat-panel grey darken-4 pa-3 d-flex flex-column ">
      <div v-for="(item,i) in chatItem" :key="i" style="width:fit-content" :class="{'align-self-end' : item.mine}" class="grey px-4 darken-3 pa-2 ma-3 chat-bubble rounded ">
        <p class="text-lg">{{item.message}}</p>
      </div>
    </div>
    {{contactId}}
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    return { contactId: params.id };
  },
  data(){
    return{
      chatItem:[
        {
          message : 'lorem',
          dibaca : false,
          mine : false
        },
        {
          message : 'lorem',
          dibaca : false,
          mine : false
        },
        {
          message : 'lorem',
          dibaca : false,
          mine : true
        },
        {
          message : 'lorem',
          dibaca : false,
          mine : false
        },
      ]
    }
  }
}
</script>
