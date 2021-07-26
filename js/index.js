//柱状图模块1
(function(){
    //.1实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //document.querySelector获取文档中 id="demo" 的元素：
    //2.声明指定配置项和数据 (option配置项)
    var option = {
        color:['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {// 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //修改图表的大小
        grid: {
            top:'10%',
            left: '0%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签 相关样式
                axisLabel:{
                    color:"rgba(255,255,255,.6)",fontSize:"8"
                },
                //不显示x坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    color:"rgba(255,255,255,.6)",fontSize:"12"
                },
                //y轴的线条改为了1像素
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)",
                        width:1
                    }
                },
                //y轴分割线的颜色
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: [400, 800, 230, 800, 1500, 900, 1200],
                itemStyle:{
                    barBorderRadius:5
                }
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option)
    //SetOption 方法提供一种从 Visual Basic 代码更改环境选项的途径。利用这种方法，可以设置或读取“选项”对话框中除“模块”选项卡上选项之外的任何可用的选项设置。

    //4.让图表跟随屏幕自动去适应
    //addEventListener() 方法，事件监听
    //resize()调整大小 规定可以由用户调整 div 元素的大小：
    window.addEventListener('resize',function(){
        myChart.resize();
    })
}());
//柱状图2
(function(){
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"))
    //2.指定配置和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            top: '10%',
            bottom: '2%',
            right:'1%',
            containLabel: true
        },
        xAxis: {
            show:false
        },
        yAxis: [
            {
                type: 'category',
                inverse:true,
                data: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'ECharts'],
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#fff"
                }
            },
            {
                data: [702,350,610,793,664],
                inverse:true,
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#fff"
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70,34,60,78,65],
                yAxisIndex:0,
                //修改第一组柱子的圆角
                itemStyle:{
                    barBorderRadius:20,
                    color:function(params){
                        //params 传进来的是柱子对象
                        //dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                //柱子之间的距离
                barCategoryGao:50,
                //柱子的宽度
                barWidth:10,
                //显示柱子内的文字
                label:{
                    show:true,
                    //在图形内显示
                    position:'inside',
                    //{c}会自动的解析为数据 data里的数据
                    //formatter标签内容格式器
                    //formatter 字符串模板变量有:
                    //{a}:系列名 {b}:数据名 {c}数据值
                    formatter:"{c}%"
                }
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                  normal: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                  }
                }
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option)

    //4.让图表跟随屏幕自动去适应
    //addEventListener() 方法，事件监听
    //resize()调整大小 规定可以由用户调整 div 元素的大小：
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();
//折线图1
(function(){
    var yearData = [
        {
          year: '2020',  // 年份
          data: [  // 两个数组是因为有两条线
               [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
               [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
          year: '2021',  // 年份
          data: [  // 两个数组是因为有两条线
               [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
               [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
       ];

    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"))

    //2.指定配置和数据
    var option = {
        //color 设置我们线条的颜色注意后面是数组
        // //设置图表的标题
        // title: {
        //     text: '折线图堆叠'
        // },

        //通过这个color修改两条线的颜色
        color:['#00f2f1','#ed3f35'],
        //图标的提示框组件
        tooltip: {
            //触发方式
            trigger: 'axis'//坐标轴触发
            // trigger: 'item'数据项图形触发
            // trigger: 'none'什么都不触发
        },
        //图例组件
        legend: {
            //series 里面有了 name 值则 legend里面的data可以删掉
            data: ['新增粉丝', '新增播放'],
            //修改图例组件 文字颜色
            textStyle:{
                color:"#4c9bfd"
            },
            right:"10%"
        },
        //网格配置 grid可以控制线型图 柱状图 图表大小
        grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:true,//显示边框
            borderColor:"#012f4a",//边框颜色
            //是否显示刻度标签
            containLabel: true
        },
        //工具箱组件 可以另存为图片的功能
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        //设置x轴的相关配置
        xAxis: {
            type: 'category',//类目轴
            // type: 'value',数值轴
            // type: 'time',时间轴
            // type: 'log',对数轴
            boundaryGap: false,//去除轴内间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel:{
                color:"#4c9bfd" //轴线文本颜色
            },
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false //去除刻度线
            },
            axisLabel:{
                color:"#4c9bfd" //轴线文本颜色
            },
            axisLine:{
                show:false //去除轴线
            },
            splitLine:{
                lineStyle:{
                    color:"#012f4a"
                }
            }
        },
        //系列图表配置 它决定着显示那种类型的图表
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                //true 可以让折线显示带有弧度
                smooth:true,
                // stack: '总量',
                data: yearData[0].data[0]
            },
            {
                name: '新增播放',
                type: 'line',
                smooth:true,
                // stack: '总量',
                data:yearData[0].data[1]
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option)

    //4.让图表跟随屏幕自动去适应
    //addEventListener() 方法，事件监听
    //resize()调整大小 规定可以由用户调整 div 元素的大小：
    window.addEventListener('resize',function(){
        myChart.resize();
    })

    //5.点击却换效果
    $(".line h2").on("click","a",function(){
        // alert(1);
        //点击a之后 根据当前a的索引值 找到对应的yearData的相关对象
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        //需要重新渲染实例对象
        myChart.setOption(option);
    })
})();
//折线图2
(function(){
    var myChart = echarts.init(document.querySelector(".line2 .chart"))

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top:"0%",
            textStyle:{
                color:"rgba(255,255,255,.5)",
                fontSize:"12"
            }
        },
        grid: {
            top:'15%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                axisTick:{
                    show:false //去除刻度线
                },
                axisLabel:{
                    color:"#4c9bfd" //轴线文本颜色
                },
                axisLine:{
                    show:false //去除轴线
                },
                splitLine:{
                    lineStyle:{
                        color:"#012f4a"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{
                    show:false //去除刻度线
                },
                axisLabel:{
                    textStyle:{
                        color:"rgba(255,255,255,.6)",
                        fontSize:12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                },
                //修改分割线的颜色
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                smooth:true,//变圆滑.
                lineStyle:{
                    color:"#0184d5",
                    width:"2"
                },
                // stack: '总量',
                //填充区域
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0,0,0,1,
                    [
                        {
                            //渐变色的起初颜色
                            offset:0,
                            color:"rgba(1,132,213,0.4)"
                        },
                        {
                            //渐变色的结束颜色
                            offset:0.8,
                            color:"rgba(1,132,213,0.1)"
                        }
                    ],
                    false
                    ),
                    //影子阴影
                    shadowColor:"rgba(0,0,0,0.1)"
                },
                //设置拐点 小圆点
                symbol:'circle',
                symbolSize:7,//拐点大小
                itemStyle:{
                    color:"#0184d5",
                    borderColor:"rgba(221,220,107,.1)",
                    borderWidth:12
                },
                showSymbol:false,//开始不显示拐点，鼠标经过显示
                // emphasis: {
                //     focus: 'series'
                // },
                // series  第一个对象data数据
                data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
            },
            {
                name: '转发量',
                type: 'line',
                smooth:true,//变圆滑.
                lineStyle:{
                    normal:{
                    color:"#00d887",
                    width:"2"
                    }
                },
                // stack: '总量',
                areaStyle: {
                    normal:{
                        color: new echarts.graphic.LinearGradient(
                            0,0,0,1,
                            [
                                {
                                    //渐变色的起初颜色
                                    offset:0,
                                    color:"rgba(0,216,135,0.4)"
                                },
                                {
                                    //渐变色的结束颜色
                                    offset:0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                            ),
                            //影子阴影
                            shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                // series  第二个对象data数据
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                  ],
            }
        ]
    };

    myChart.setOption(option)
    //4.让图表跟随屏幕自动去适应
    //addEventListener() 方法，事件监听
    //resize()调整大小 规定可以由用户调整 div 元素的大小：
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();
//饼形图1
(function(){
    //formatter标签内容格式器
    //formatter 字符串模板变量有:
    //{a}:系列名 {b}:数据名 {c}数据值
    var myChart = new echarts.init(document.querySelector(".pie .chart"));

    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
          ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '0%',
            itemWidth:10,
            itemHeight:10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ["50%", "42%"],
                avoidLabelOverlap: false,
                //图形上的文字
                label: {
                    show: false,
                    position: 'center'
                },
                //链接文字和图形的线是否显示
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],
            }
        ]
    };

    myChart.setOption(option);
     // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//饼形图2
(function(){
    var myChart = new echarts.init(document.querySelector(".pie2 .chart"))

    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip:{
            trigger:"item",
            formatter:"{a} <br/>{b} : {c} ({d}%)}"
        },
        legend: {
            top: "90%",
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color: "rgba(255,255,255,.5)",
                fontSize: "10" 
            }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '42%'],
                roseType: 'radius',
                //图形的文字标签
                label: {
                    fontSize: 10
                  },
                //链接图形和文字的线条
                labelLine:{
                    //length 链接图形的线条
                    length:6,
                    // length2 链接文字的线条
                    length:8,
                },
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "深圳" },
                    { value: 42, name: "广东" }
                ]
            }
        ]
    };

    myChart.setOption(option)
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
//地图模块