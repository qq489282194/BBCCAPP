<template>
  <div class="echart">
    <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
    <div class="frb">
      <p style="font-size: .48rem;color: #333;" >{{total}}</p>
      <p style="font-size: .26rem;color: #999;">总好友数</p>
    </div>
    <div class="eright">
      <div>
        <div v-for="(item,index) in series[0].data" :key="index" class="eline">
          <span class="ecircle" :style="'background:'+series[0].color[index]"></span>
          <span class="ename">{{item.name}}</span>
          <span class="ecount">{{item.count}}</span>
        </div>
      </div>
      
    </div>
    <!-- <img src="../../assets/img/sharefriend/frb.png" class="frb"/> -->
  </div>
</template>

<script>
// import echarts from "echarts";
var echarts = require("echarts");
export default {
  name: "Echart",
  props: {
    className: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: "1"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    },
    series: {
      type: Array,
      // default: [
      //     {
      //       name: "",
      //       type: "pie",
      //       color:['#F63B75', '#FF9A49', '#3AAAFF'],
      //       radius: ["55%", "70%"],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: false
      //           },
      //           // labelLine: {
      //           //   show: false
      //           // }
      //         },
      //       //   emphasis: {
      //       //     label: {
      //       //       show: true,
      //       //       position: "center",
      //       //       textStyle: {
      //       //         fontSize: "30",
      //       //         fontWeight: "bold"
      //       //       }
      //       //     }
      //       //   }
      //       },
      //       data: [
      //         { value: 50, name: "普通用户", count: 50 },
      //         { value: 45, name: "贵宾用户", count: 45 },
      //         { value: 23, name: "铂金用户", count: 23 }
      //       ]
      //     }
      //   ]
    }
  },
  data() {
    return {
      chart: null,
      // total: 0
    };
  },
  computed:{
    total(){
      let data = this.series[0].data;
      let a = 0;
      data.forEach(item=>{
        a += item.value
      })
      return a
    }
  },
  mounted() {
    console.log('--------------------',this.series)
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   x: "right",
        //   data: ["直接访问1", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        // },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     // mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: {
        //       show: true,
        //       type: ["pie", "funnel"],
        //       option: {
        //         funnel: {
        //           x: "25%",
        //           width: "50%",
        //           funnelAlign: "center",
        //           max: 1548
        //         }
        //       }
        //     },
        //     // restore: { show: true },
        //     // saveAsImage: { show: true }
        //   }
        // },
        // calculable: true,
        series: this.series
      });
    }
  }
};
</script>

<style scoped  lang="scss">
.echart{
  display: flex;
  background: #fff;
    .frb{
        width: 80px;
        height: 80px;
        text-align: center;
        top: 340px;
        position: absolute;
        left: 76px;
    }
    .eright{
      // padding: 1.0rem 0;
      height: 4.0rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .eline{
        line-height: 0.5rem;
        .ecircle{
          display: inline-block;
          vertical-align: middle;
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
          border: 1px solid #ddd;
          margin-right: 0.1rem;
        }
        .ename{
          color: #999;
          font-size: .26rem;
          margin-right: .2rem;
        }
      }
    }
}

</style>