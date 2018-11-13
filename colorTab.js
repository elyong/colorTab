var colorTab=new Vue ({
  el:'#app',
  data:{
    activeColor:'',
    colorList:['red','pink','yellow','green']
  },
  methods:{
    changeColor:function(color){
      this.activeColor=color;
    }
  }
})