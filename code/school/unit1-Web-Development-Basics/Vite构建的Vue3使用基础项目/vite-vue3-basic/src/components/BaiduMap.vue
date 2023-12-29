<template>
    <div>
        <div>
            <input v-model="keyword" class="inputkeyword" placeholder="请输入位置信息">
        </div>
        <baidu-map class="map" :center="markerPoint" :zoom="16" scroll-wheel-zoom>
            <!--普通地图与混合地图；混合地图是指将卫星图像与普通地图数据结合显示的地图类型。anchor属性用于指定地图控件的位置-->
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
                         anchor="BMAP_ANCHOR_TOP_LEFT"/>
            <!--地图搜索功能，绑定上面的input；zoom是搜索结果的视图比例，取值12.8较合适-->
            <bm-local-search :keyword="keyword"
                             :auto-viewport="true"
                             :location="location"
                             zoom="12.8"/>
        </baidu-map>
    </div>
</template>

<script>
// import {ref} from 'vue'

export default {
    data() {
        return {
            //以武汉黄鹤楼为中心（可以更改经纬度，选择其它地方）
            markerPoint: {lng: 114.3090430000, lat: 30.5503170000},
            location: '',
            keyword: '',  //搜索框关键词
        }
    },
    setup(){
        // eslint-disable-next-line no-unused-vars
        //const keywords=ref('')  // 使用 ref 函数将 keyword 声明为响应式变量，并初始化为一个空字符串
    }
}
</script>
<style scoped>
    .map {   /*设置地图大小*/
        width: 100%;
        height: 1200px;
    }
    .inputkeyword {
        height: 35px;
        width: 100%;
        border: 1px solid #ccc;
        font-family: "Microsoft soft";
        font-size: 15px;
        padding: 5px;
    }
</style>