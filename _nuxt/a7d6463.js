(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{325:function(t,e,o){"use strict";o.r(e);o(31);var r=o(324),n=o.n(r),l={props:{id:{type:String,required:!0},data:{type:Array,required:!0,default:function(){return[]}},colors:{type:Array,required:!0,default:function(){return[]}},borderWidth:{type:Number,default:0},pointBorderWidth:{type:Number,default:2},doughnutWidth:{type:Number,default:15},aspectRatio:{type:Number,default:2}},mounted:function(){var t=document.getElementById(this.id).getContext("2d"),data={datasets:[{data:this.data,backgroundColor:this.colors,borderWidth:0,pointBorderWidth:2}]};new n.a(t,{type:"doughnut",data:data,options:{cutoutPercentage:100-this.doughnutWidth,tooltips:{enabled:!1},aspectRatio:this.aspectRatio}})}},c=(o(513),o(49)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-r"},[e("div",{staticClass:"content"},[this._t("default")],2),this._v(" "),e("canvas",{attrs:{id:this.id}})])}),[],!1,null,"420b02b9",null);e.default=component.exports},326:function(t,e,o){var content=o(491);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("be7b6c88",content,!0,{sourceMap:!1})},327:function(t,e,o){var content=o(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("a657da8a",content,!0,{sourceMap:!1})},329:function(t,e,o){var content=o(504);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("6d06710e",content,!0,{sourceMap:!1})},330:function(t,e,o){var content=o(506);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("50ec0f5e",content,!0,{sourceMap:!1})},331:function(t,e,o){var content=o(508);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("afba162e",content,!0,{sourceMap:!1})},332:function(t,e,o){var content=o(512);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("54d55db7",content,!0,{sourceMap:!1})},333:function(t,e,o){var content=o(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("4ec9ca23",content,!0,{sourceMap:!1})},334:function(t,e,o){var content=o(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("001fbbc4",content,!0,{sourceMap:!1})},335:function(t,e,o){var content=o(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("85c1778c",content,!0,{sourceMap:!1})},336:function(t,e,o){var content=o(520);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("a99a058e",content,!0,{sourceMap:!1})},337:function(t,e,o){var content=o(546);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("7ddfd10a",content,!0,{sourceMap:!1})},338:function(t,e,o){var content=o(548);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("498dd58a",content,!0,{sourceMap:!1})},339:function(t,e,o){"use strict";o.r(e);var r={props:{download:{type:Function,default:function(){}}},data:function(){return{showDownloadOptions:!1}}},n=(o(490),o(49)),l=o(53),c=o.n(l),d=o(171),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("span",{on:{click:function(e){t.showDownloadOptions=!t.showDownloadOptions}}},[t._t("default")],2),t._v(" "),t.showDownloadOptions?o("div",{staticClass:"position-a tooltip color-light-green pa-4"},[o("v-btn",{staticClass:"color-blue--text btn-white mb-3",attrs:{color:"white",block:""},on:{click:function(){return t.download("CSV")}}},[t._v(t._s(t.$t("btnDownloadAsCSV")))]),t._v(" "),o("v-btn",{staticClass:"color-blue--text btn-white",attrs:{color:"white",block:""},on:{click:function(){return t.download("CSV")}}},[t._v(t._s(t.$t("btnDownloadAsPDF")))])],1):t._e()])}),[],!1,null,"2dc5ff77",null);e.default=component.exports;c()(component,{VBtn:d.a})},340:function(t,e,o){"use strict";o.r(e);o(7),o(50),o(8);var r={components:{VerticalBar:o(479).default},props:{barData:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{formattedBarData:function(){var t=0;return this.barData.forEach((function(e){e.value>t&&(t=e.value)})),this.barData.map((function(e){return e.height=e.value/t*100,e}))}}},n=(o(505),o(49)),l=o(53),c=o.n(l),d=o(550),f=o(551),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-row",{attrs:{"no-gutters":""}},this._l(this.formattedBarData,(function(t){return e("v-col",{key:t.label,staticClass:"bar-container",attrs:{cols:"4"}},[e("VerticalBar",{staticClass:"bar",attrs:{color:t.color,height:t.height,value:t.value,label:t.label}})],1)})),1)],1)}),[],!1,null,"fc3635d6",null);e.default=component.exports;c()(component,{VerticalBar:o(479).default}),c()(component,{VCol:d.a,VRow:f.a})},478:function(t,e,o){"use strict";o.r(e);var r=o(481),n=o(480),l=o(482),c={components:{Tabs:r.default,OutcomesSummary:n.default,SurveyResult:l.default},data:function(){return{tabSelected:0}},methods:{tabChange:function(t){this.tabSelected=t}}},d=(o(547),o(49)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"color-body-bg"},[e("Tabs",{attrs:{"on-tab-change":this.tabChange}}),this._v(" "),0===this.tabSelected?e("OutcomesSummary"):this._e(),this._v(" "),1===this.tabSelected?e("SurveyResult"):this._e()],1)}),[],!1,null,"260248ac",null);e.default=component.exports;installComponents(component,{Tabs:o(481).default,OutcomesSummary:o(480).default,SurveyResult:o(482).default})},479:function(t,e,o){"use strict";o.r(e);o(31);var r={props:{color:{type:String,default:"green"},height:{type:Number,default:100},value:{type:Number,default:0},label:{type:String,default:""}}},n=(o(503),o(49)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bar-height",style:{height:t.height+"%"}},[o("span",{staticClass:"d-block f-25 pill-gothic-300mg-bold"},[t._v(t._s(t.value)+"%")]),t._v(" "),o("div",{staticClass:"bar",class:t.color}),t._v(" "),o("span",{staticClass:"d-block text-body pill-gothic-300mg-bold",domProps:{innerHTML:t._s(t.label)}})])}),[],!1,null,"563c8628",null);e.default=component.exports},480:function(t,e,o){"use strict";o.r(e);var r=o(487),n=o(486),l=o(485),c=o(483),d={components:{SurveyDetails:r.default,LineChart:n.default,Doughnut:l.default,GaugeChart:c.default},data:function(){return{compareOptions:["Most Recent Survery Results (October 2020)","Survey August 2020","Survey December 2019"],toOptions:["Previous Survey (August 2020)","The first survryn run for this program","All initial responses"],includingResponseOptions:["Only people who have done the survey more than once","Everyone"],surveyData1:{surveyHeading:"EDUCATION ATTAINMENT: STUDENT SATISFACTION",question:"Q: Rate your satisfaction with the following aspects of…",questionOptions:["CLASSROOM SPACE","TEACHER SKILL","SUPPORT"],barData:[{color:"green",value:6,label:"&#34;Rising Up&#34;"},{color:"pink",value:12,label:"Latest HILDA result"},{color:"orange",value:8,label:"Other programs across Australia*"}],roundHelpText:"of clients satisfied  ",sideNoteHeading:"How this compares to other programs",sideNoteDescription:"Other programs doing better than &#34;Rising Up&#34; have told us they deliver their program face-to-face, offer intergrated services, are funded from the private sector, lorem ipsum,dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",sideNoteLinks:[{label:"Read case studies of successful programs",href:"/"},{label:"Get advice from other organisations",href:"/"}],links:{viewResponse:{label:"View Responses",href:"/"}}},surveyData2:{surveyHeading:"PHYSICAL HEALTH: PHYSICAL ACTIVITY OUTSIDE OF SCHOOL",question:"Q: Rate your satisfaction with the following aspects of…",questionOptions:["CLASSROOM SPACE","TEACHER SKILL","SUPPORT"],barData:[{color:"green",value:21,label:"&#34;Rising Up&#34;"},{color:"pink",value:17,label:"Latest HILDA result"},{color:"orange",value:10,label:"Other programs across Australia*"}],roundHelpText:"of clients do activity outside school",sideNoteHeading:"Great result!",sideNoteDescription:"&#34;Rising Up&#34; is exceeding your target and the sector average. Please tell us a bit more about how you've achieved this succes.",links:{viewResponse:{label:"View Responses",href:"/"}}},surveyData3:{surveyHeading:"PHYSICAL HEALTH: PHYSICAL ACTIVITY OUTSIDE OF SCHOOL",question:"Q: Rate your satisfaction with the following aspects of…",questionOptions:["CLASSROOM SPACE","TEACHER SKILL","SUPPORT"],barData:[{color:"green",value:7,label:"&#34;Rising Up&#34;"},{color:"pink",value:12,label:"Latest HILDA result"},{color:"orange",value:14,label:"Other programs across Australia*"}],roundHelpText:"of clients scored 25 or above",sideNoteHeading:"How this compares to other programs",sideNoteDescription:"Other programs doing better than &#34;Rising Up&#34; have told us they deliver their program face-to-face, offer intergrated services, are funded from the private sector, lorem ipsum,dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",sideNoteLinks:[{label:"Read case studies of successful programs",href:"/"},{label:"Get advice from other organisations",href:"/"}],links:{viewResponse:{label:"View Responses",href:"/"}}}}}},f=(o(519),o(49)),v=o(53),h=o.n(v),m=o(171),C=o(550),y=o(551),_=o(553),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pl-sm-12 pr-sm-8"},[o("v-row",{staticClass:"color-light-purple pt-7 pb-5 px-6 mt-4",attrs:{align:"center","no-gutters":""}},[o("v-col",{staticClass:"grow",attrs:{cols:"12",sm:"9"}},[o("p",{staticClass:"color-purple--text pill-gothic-300mg-bold f-22 mb-0"},[t._v("\n        "+t._s(t.$t("banner.heading"))+"\n      ")]),t._v(" "),o("p",{staticClass:"font-liberation-serif-reg f-16"},[t._v("\n        "+t._s(t.$t("banner.description"))+"\n      ")])]),t._v(" "),o("v-col",{staticClass:"shrink text-sm-right",attrs:{cols:"12",sm:"3"}},[o("v-btn",{staticClass:"color-blue--text btn-white",attrs:{outlined:"",color:"white"}},[t._v("\n        "+t._s(t.$t("banner.btnLearnMore"))+"\n      ")])],1)],1),t._v(" "),o("h1",{staticClass:"mt-15 mb-7 f-35 pill-gothic-300mg-bold black--text"},[t._v("\n    IMPACT OVER TIME\n  ")]),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"4"}},[o("div",[o("v-select",{attrs:{items:t.compareOptions,label:"Compare",color:"black","item-color":"color-purple"}})],1)]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-select",{attrs:{items:t.toOptions,label:"To",color:"black","item-color":"color-purple"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"4"}},[o("v-select",{attrs:{items:t.includingResponseOptions,label:"Including responses from",color:"black","item-color":"color-purple"}})],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-sm-5 flex-1",attrs:{cols:"12",sm:"6"}},[o("LineChart",{attrs:{id:"chart1",data:[8,9,5,7,12,19],"data-points-to-show":[7,12]}})],1),t._v(" "),o("v-col",{staticClass:"pl-sm-5 flex-1",attrs:{cols:"12",sm:"6"}},[o("Doughnut")],1)],1),t._v(" "),o("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-5",attrs:{cols:"12",sm:"6"}},[o("GaugeChart",{attrs:{id:"chart3",data:[0,100],"needle-values":[70,85]}})],1)],1),t._v(" "),o("h1",{staticClass:"mt-15 mb-7 f-35 pill-gothic-300mg-bold black--text"},[t._v("\n    SURVERY - AUGUST 2020\n  ")]),t._v(" "),o("SurveyDetails",{staticClass:"mb-6",attrs:{data:t.surveyData1}}),t._v(" "),o("SurveyDetails",{staticClass:"mb-6",attrs:{data:t.surveyData2}}),t._v(" "),o("SurveyDetails",{staticClass:"mb-6",attrs:{data:t.surveyData3}}),t._v(" "),o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{cols:"12",sm:"9"}},[o("p",{staticClass:"pl-3 pl-sm-0 f-12"},[t._v("\n        * Based only on programs that have made their data available to\n        Amplify.\n      ")])]),t._v(" "),o("v-col",{staticClass:"text-sm-right",attrs:{cols:"12",sm:"3"}},[o("v-btn",{staticClass:"text-h5 ml-3 ml-sm-0",attrs:{color:"primary",size:"large"}},[t._v("DOWNLOAD")])],1)],1)],1)}),[],!1,null,"4d8e6156",null);e.default=component.exports;h()(component,{LineChart:o(486).default,Doughnut:o(485).default,GaugeChart:o(483).default,SurveyDetails:o(487).default}),h()(component,{VBtn:m.a,VCol:C.a,VRow:y.a,VSelect:_.a})},481:function(t,e,o){"use strict";o.r(e);var r={components:{DownloadOptions:o(339).default},props:{onTabChange:{type:Function,default:function(){}}},data:function(){return{selectedIndex:0,showDownloadOptions:!1}},computed:{btnLabel:function(){return 0===this.selectedIndex?this.$t("btnDownloadDataSet"):this.$t("btnDownloadSurveyData")}},methods:{onChange:function(t){this.selectedIndex=t,this.onTabChange(t)}}},n=(o(492),o(49)),l=o(53),c=o.n(l),d=o(171),f=o(550),v=o(551),h=o(552),m=o(554),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"color-red pl-sm-12 pr-sm-8 py-4",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",sm:"9",order:"2","order-sm":"1"}},[o("v-tabs",{attrs:{"background-color":"color-red","slider-color":"white",color:"white"},on:{change:t.onChange}},[o("v-tab",{staticClass:"white--text f-20"},[t._v(t._s(t.$t("tab1")))]),t._v(" "),o("v-tab",{staticClass:"white--text f-20"},[t._v(t._s(t.$t("tab2")))])],1)],1),t._v(" "),o("v-col",{staticClass:"text-right pr-3 pr-sm-0 mb-3 mb-sm-0 position-r",attrs:{cols:"12",sm:"3",order:"1","order-sm":"2"}},[o("DownloadOptions",[o("v-btn",{staticClass:"f-20",attrs:{color:"primary",size:"large"}},[t._v(t._s(t.btnLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DownloadOptions:o(339).default}),c()(component,{VBtn:d.a,VCol:f.a,VRow:v.a,VTab:h.a,VTabs:m.a})},482:function(t,e,o){"use strict";o.r(e);o(132);var r=o(484),n=o(340),l=o(325),c={components:{SurveyQuestion:r.default,DoughnutChart:l.default,BarContainer:n.default},data:function(){return{surveys:["August 2020","August 2019"],genders:["Male","Female","Trans"],age:[10,20,30],schoolChildSatisfactionData:[{data:[10,20,20,25,25],colors:["#94CEBD","#F26B44","#E34B99","#EE4250","#7B437D"],labels:["VERY DISSATISFIED","DISSATISFIED","OK","SATISFIED","VERY SATISFIED"],chartCenteredText:"CLASSROOM SPACE",sideNoteHeading:"Analysis",sideNoteDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."},{data:[10,20,20,25,25],colors:["#94CEBD","#F26B44","#E34B99","#EE4250","#7B437D"],labels:["VERY DISSATISFIED","DISSATISFIED","OK","SATISFIED","VERY SATISFIED"],chartCenteredText:"TEACHER’S SKILL",sideNoteHeading:"Analysis",sideNoteDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."},{data:[10,20,20,25,25],colors:["#94CEBD","#F26B44","#E34B99","#EE4250","#7B437D"],labels:["VERY DISSATISFIED","DISSATISFIED","OK","SATISFIED","VERY SATISFIED"],chartCenteredText:"SUPPORT",sideNoteHeading:"Analysis",sideNoteDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."}],physicalHealthData:{barData:[{color:"green",value:20,label:"Option 1"},{color:"pink",value:50,label:"Option 2"},{color:"orange",value:30,label:"Option 3"}],sideNoteHeading:"Analysis",sideNoteDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."},mentalHealthData:{barData:[{color:"green",value:20,label:"Option 1"},{color:"pink",value:80,label:"Option 2"}],sideNoteHeading:"Analysis",sideNoteDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."}}},computed:{legends:function(){var t=this.schoolChildSatisfactionData[0];return t.colors.reduce((function(e,o,r){var n={color:o,label:t.labels[r]};return e.push(n),e}),[])}}},d=(o(545),o(49)),f=o(53),v=o.n(f),h=o(151),m=o(171),C=o(550),y=o(551),_=o(553),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-3 pl-sm-12 pr-sm-8 mt-5"},[o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{cols:"12",sm:"4"}},[o("div",[o("v-select",{attrs:{items:t.surveys,label:t.$t("surveyResult.lblSurvey"),color:"black","item-color":"color-purple"}})],1)]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"3"}},[o("v-select",{attrs:{items:t.genders,label:t.$t("surveyResult.lblGender"),color:"black","item-color":"color-purple"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"3"}},[o("v-select",{attrs:{items:t.age,label:t.$t("surveyResult.lblAge"),color:"black","item-color":"color-purple"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"2"}},[o("v-btn",{staticClass:"font-liberation-serif-reg f-16 text-transform-none",attrs:{text:"",color:"primary"}},[t._v(t._s(t.$t("surveyResult.btnOtherFilters")))])],1)],1),t._v(" "),o("SurveyQuestion",{attrs:{heading:"LEVEL OF SATISFACTION WITH THE SCHOOL CHILD IS CURRENTLY ATTENDING",question:"Q: Rate your satisfaction with the following aspects of your school"}}),t._v(" "),o("div",{staticClass:"white"},[o("div",{staticClass:"d-flex flex-wrap ml-6 pt-6"},t._l(t.legends,(function(legend){return o("div",{key:legend.color,staticClass:"d-flex align-center pr-4 mb-2"},[o("v-avatar",{attrs:{tile:"",color:legend.color,size:"16"}}),o("span",{staticClass:"pl-1 f-16 pill-gothic-300mg-bold"},[t._v(t._s(legend.label))])],1)})),0),t._v(" "),t._l(t.schoolChildSatisfactionData,(function(e,r){return o("v-row",{key:e.chartCenteredText,attrs:{align:"center"}},[o("v-col",{attrs:{cols:"12",sm:"4"}},[o("DoughnutChart",{attrs:{id:"chart"+r,data:e.data,colors:e.colors,"doughnut-width":25,"aspect-ratio":1.5}},[o("div",{staticClass:"center-text color-purple--text f-25 text-center"},[t._v("\n            "+t._s(e.chartCenteredText)+"\n          ")])])],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("p",{staticClass:"f-20 pill-gothic-300mg-bold mb-0"},[t._v("\n          "+t._s(e.sideNoteHeading)+"\n        ")]),t._v(" "),o("p",{staticClass:"f-14"},[t._v("\n          "+t._s(e.sideNoteDescription)+"\n        ")])])],1)}))],2)],1)}),[],!1,null,"be05f2f2",null);e.default=component.exports;v()(component,{SurveyQuestion:o(484).default,DoughnutChart:o(325).default}),v()(component,{VAvatar:h.a,VBtn:m.a,VCol:C.a,VRow:y.a,VSelect:_.a})},483:function(t,e,o){"use strict";o.r(e);o(7),o(132),o(31),o(8);var r=o(324),n=o.n(r),l={props:{id:{type:String,required:!0},data:{type:Array,default:function(){return[]},required:!0},needleValues:{type:Array,default:function(){return[]}},backgroundColor:{type:String,default:"#7B437D"},backgroundColors:{type:Array,default:function(){return[]}},borderWidth:{type:Number,default:0},pointBorderWidth:{type:Number,default:2},lineStrokeColor:{type:String,default:"#FFF"},lineWidth:{type:Number,default:3},doughnutWidth:{type:Number,default:40}},mounted:function(){var t=this,e=document.getElementById(this.id).getContext("2d"),data={datasets:[{data:this.data,backgroundColor:this.backgroundColors.length>0?this.backgroundColors:this.backgroundColor,borderWidth:this.borderWidth,pointBorderWidth:this.pointBorderWidth}]};new n.a(e,{type:"doughnut",data:data,options:{cutoutPercentage:100-this.doughnutWidth,rotation:Math.PI,circumference:Math.PI,tooltips:{enabled:!1}},plugins:[{afterDraw:function(e){var o=e.chart.config.data.datasets[0].data.reduce((function(a,b){return a+b}),0);t.needleValues.forEach((function(r,n){var l=[n*n+5,n*n+5];0===n&&(l=[]),function(e,o,r,n){var l=Math.PI+1/o*r*Math.PI,c=e.chart.ctx,d=e.chart.canvas.offsetWidth,f=e.chart.canvas.offsetHeight,v=d/2,h=f;c.translate(v,h),c.rotate(l),c.beginPath(),c.setLineDash(n),c.moveTo(0,0),c.lineTo(f-10,0),c.lineWidth=t.lineWidth,c.strokeStyle=t.lineStrokeColor,c.stroke(),c.rotate(-l),c.translate(-v,-h)}(e,o,r,l)}))}}]})}},c=(o(517),o(49)),d=o(53),f=o.n(d),v=o(550),h=o(150),m=o(551),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"color-red white--text rounded pt-7",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pl-4",attrs:{cols:"6"}},[o("p",{staticClass:"f-25 mb-0"},[t._v("PHYSICAL HEALTH")]),t._v(" "),o("p",{staticClass:"f-20 mb-8"},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-down")]),t._v("6% Decrease in improvement\n    ")],1)]),t._v(" "),o("v-col",{staticClass:"white--text f-16",attrs:{cols:"4",offset:"2"}},[o("div",{staticClass:"d-flex mb-3"},[o("hr",{staticClass:"mt-2 mr-4",attrs:{width:"30px",color:"white"}}),t._v(" "),o("span",[t._v("August 2020, 74%")])]),t._v(" "),o("div",{staticClass:"d-flex"},[o("hr",{staticClass:"mt-2 mr-4 dotted-line",attrs:{width:"30px"}}),t._v(" "),o("span",[t._v("August 2019, 80%")])])]),t._v(" "),o("v-col",{staticClass:"position-r pb-0",attrs:{cols:"12"}},[o("span",{staticClass:"position-a f-20 left-percentage"},[t._v(t._s(t.data[0])+"%")]),t._v(" "),o("canvas",{attrs:{id:t.id}}),t._v(" "),o("span",{staticClass:"position-a f-20 right-percentage"},[t._v(t._s(t.data[1])+"%")])])],1)}),[],!1,null,"e2f3d8d2",null);e.default=component.exports;f()(component,{VCol:v.a,VIcon:h.a,VRow:m.a})},484:function(t,e,o){"use strict";o.r(e);var r={props:{heading:{type:String,default:""},question:{type:String,default:""},btnLabel1:{type:String,default:"View Responses"},btnLabel2:{type:String,default:"Download"},download:{type:Function,default:function(){}}}},n=o(49),l=o(53),c=o.n(l),d=o(171),f=o(550),v=o(551),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"color-purple px-6 py-2"},[o("p",{staticClass:"white--text mb-0 f-18 pill-gothic-300mg-bold"},[t._v("\n      "+t._s(t.heading)+"\n    ")])]),t._v(" "),o("div",{staticClass:"px-6 py-2 color-light-purple"},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",sm:"8"}},[o("p",{staticClass:"font-liberation-serif-bold f-20 color-purple--text"},[t._v("\n          "+t._s(t.question)+"\n        ")])]),t._v(" "),o("v-col",{staticClass:"d-flex justify-sm-end position-r",attrs:{cols:"12",sm:"4"}},[o("v-btn",{staticClass:"font-liberation-serif-reg f-16 text-transform-none",attrs:{text:"",color:"primary"}},[t._v("\n          "+t._s(t.btnLabel1)+"\n        ")]),t._v(" "),o("DownloadOptions",{attrs:{download:t.download}},[o("v-btn",{staticClass:"font-liberation-serif-reg f-16 text-transform-none",attrs:{text:"",color:"primary"}},[t._v("\n            "+t._s(t.btnLabel2)+"\n          ")])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{DownloadOptions:o(339).default}),c()(component,{VBtn:d.a,VCol:f.a,VRow:v.a})},485:function(t,e,o){"use strict";o.r(e);var r=o(324),n=o.n(r),l={components:{DoughnutChart:o(325).default},mounted:function(){var t=document.getElementById("chart2").getContext("2d");new n.a(t,{type:"doughnut",data:{datasets:[{data:[25,25,50],backgroundColor:["#EE4250","#979797","#7B437D"],borderWidth:0,pointBorderWidth:2}]},options:{cutoutPercentage:85,tooltips:{enabled:!1}}})}},c=(o(515),o(49)),d=o(53),f=o.n(d),v=o(550),h=o(551),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"color-green white--text rounded chart-height",attrs:{align:"center"}},[o("v-col",{staticClass:"pl-4",attrs:{cols:"12",sm:"4"}},[o("p",{staticClass:"f-25 mb-0"},[t._v("MENTAL HEALTH")]),t._v(" "),o("p",{staticClass:"f-20 mb-8"},[t._v("7% Scored under 25")]),t._v(" "),o("p",{staticClass:"f-20 mb-0"},[t._v("August 2019")]),t._v(" "),o("p",{staticClass:"f-20 mb-0"},[t._v("August 2020")])]),t._v(" "),o("v-col",{staticClass:"position-r",attrs:{cols:"12",sm:"8"}},[o("DoughnutChart",{attrs:{id:"chart2",data:[25,25,50],colors:["#EE4250","#979797","#7B437D"]}},[o("div",{staticClass:"text-center"},[o("span",{staticClass:"d-block text-h1 pill-gothic-300mg-bold color-purple--text lh-7"},[t._v("\n          7%\n        ")]),t._v(" "),o("span",[t._v("INCREASE")])])])],1)],1)}),[],!1,null,"1fdbc90a",null);e.default=component.exports;f()(component,{DoughnutChart:o(325).default}),f()(component,{VCol:v.a,VRow:h.a})},486:function(t,e,o){"use strict";o.r(e);o(43),o(31),o(51);var r=o(324),n=o.n(r),l={props:{id:{type:String,required:!0},data:{type:Array,default:function(){return[]}},backgroundColor:{type:String,default:"#B695B7"},borderColor:{type:String,default:"#F26B44"},borderWidth:{type:Number,default:4},pointBorderColor:{type:String,default:"#FFF"},pointBackgroundColor:{type:String,default:"#F26B44"},pointBorderWidth:{type:Number,default:2},dataPointsToShow:{type:Array,default:function(){return[]}},info:{type:Object,default:function(){return{heading:"EDUCATION ATTAINMENT",icon:"arrow-up",subheading:"5% Satisfaction Increase"}}}},mounted:function(){for(var t=document.getElementById("chart1").getContext("2d"),e=this.dataPointsToShow,data={labels:new Array(this.data.length),datasets:[{data:this.data,backgroundColor:this.backgroundColor,borderColor:this.borderColor,borderWidth:this.borderWidth,pointBorderColor:this.pointBorderColor,pointBackgroundColor:this.pointBackgroundColor,pointBorderWidth:this.pointBorderWidth}]},o={ticks:{display:!1},gridLines:{display:!1},scaleLabel:{display:!1}},meta=new n.a(t,{type:"line",data:data,options:{tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[o],xAxes:[o]}}}).getDatasetMeta(0),i=0;i<data.datasets[0].data.length;i++)Array.isArray(e)&&e.length>0&&!e.includes(data.datasets[0].data[i])&&(meta.data[i]._model.radius=0)}},c=(o(511),o(49)),d=o(53),f=o.n(d),v=o(150),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color-purple rounded position-r"},[o("div",{staticClass:"edu-attainment"},[o("p",{staticClass:"mb-0 white--text f-25"},[t._v(t._s(t.info.heading))]),t._v(" "),o("p",{staticClass:"mb-0 white--text f-20"},[t.info.icon?o("v-icon",{attrs:{color:"white"}},[t._v(t._s("mdi-"+t.info.icon))]):t._e(),t._v(t._s(t.info.subheading)+"\n    ")],1)]),t._v(" "),o("canvas",{attrs:{id:t.id}})])}),[],!1,null,"5cc89c04",null);e.default=component.exports;f()(component,{VIcon:v.a})},487:function(t,e,o){"use strict";o.r(e);o(103);var r={components:{BarContainer:o(340).default},props:{data:{type:Object,default:function(){return{surveyHeading:"",question:"",questionOptions:[],barData:[],roundHelpText:"",sideNoteHeading:"",sideNoteDescription:"",sideNoteLinks:[],links:{viewResponse:{label:"",href:""}}}}}},data:function(){return{showDetails:!1}},computed:{roundNumber:function(){return this.data.barData.find((function(t){return"green"===t.color})).value}}},n=(o(507),o(49)),l=o(53),c=o.n(l),d=o(151),f=o(171),v=o(550),h=o(551),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"color-purple px-6 py-2"},[o("p",{staticClass:"white--text mb-0 f-18 pill-gothic-300mg-bold"},[t._v("\n      "+t._s(t.data.surveyHeading)+"\n    ")])]),t._v(" "),o("div",{staticClass:"px-6 py-2 color-light-purple"},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"8",sm:"10"}},[o("p",{staticClass:"font-liberation-serif-bold f-20 color-purple--text"},[t._v("\n          "+t._s(t.data.question)+"\n        ")])]),t._v(" "),o("v-col",{attrs:{cols:"4",sm:"2",align:"end"}},[o("v-btn",{staticClass:"font-liberation-serif-reg f-16 text-transform-none",attrs:{text:"",color:"primary"},on:{click:function(e){t.showDetails=!t.showDetails}}},[t.showDetails?o("span",[t._v(t._s(t.$t("outcomesSummary.btnHide")))]):o("span",[t._v(t._s(t.$t("outcomesSummary.btnShowMore")))])])],1)],1),t._v(" "),t.showDetails?o("div",{staticClass:"text-h5 pill-gothic-300mg-bold"},t._l(t.data.questionOptions,(function(option){return o("p",{key:option},[t._v(t._s(option))])})),0):t._e()],1),t._v(" "),o("section",{staticClass:"white px-6 pt-6 pb-12"},[o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[o("v-avatar",{staticClass:"avtar-bg",attrs:{size:"195"}},[o("span",{staticClass:"text-h1 pill-gothic-300mg-bold"},[t._v(t._s(t.roundNumber)+"%")])]),t._v(" "),o("div",{staticClass:"text-center"},[o("p",{staticClass:"pill-gothic-300mg-bold f-16 mb-0",domProps:{innerHTML:t._s(t.data.roundHelpText)}}),t._v(" "),o("a",{staticClass:"d-block text-decoration-none color-blue--text font-liberation-serif-reg",attrs:{href:t.data.links.viewResponse.href}},[t._v(t._s(t.data.links.viewResponse.label))])])],1),t._v(" "),o("v-col",{staticClass:"mb-3",attrs:{cols:"12",sm:"4"}},[o("BarContainer",{attrs:{"bar-data":t.data.barData}})],1),t._v(" "),o("v-col",{staticClass:"mt-16 mt-sm-0",attrs:{cols:"12","offset-sm":"1",sm:"4"}},[o("h2",{staticClass:"pill-gothic-300mg-bold f-20"},[t._v("\n          "+t._s(t.data.sideNoteHeading)+"\n        ")]),t._v(" "),o("p",{staticClass:"font-liberation-serif-reg mb-12",domProps:{innerHTML:t._s(t.data.sideNoteDescription)}}),t._v(" "),o("div",{staticClass:"font-liberation-serif-reg color-blue--text"},t._l(t.data.sideNoteLinks,(function(link){return o("a",{key:link.label,staticClass:"d-block text-decoration-none",attrs:{href:link.href}},[t._v(t._s(link.label))])})),0)])],1)],1)])}),[],!1,null,"7a23e51e",null);e.default=component.exports;c()(component,{BarContainer:o(340).default}),c()(component,{VAvatar:d.a,VBtn:f.a,VCol:v.a,VRow:h.a})},490:function(t,e,o){"use strict";var r=o(326);o.n(r).a},491:function(t,e,o){(e=o(18)(!1)).push([t.i,'.tooltip[data-v-2dc5ff77]{top:50px;right:0;z-index:2;width:210px}.tooltip[data-v-2dc5ff77]:before{content:"";display:block;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #deecfe;position:absolute;top:-10px;right:10px}',""]),t.exports=e},492:function(t,e,o){"use strict";var r=o(327);o.n(r).a},493:function(t,e,o){(e=o(18)(!1)).push([t.i,".v-slide-group__prev{display:none!important}",""]),t.exports=e},503:function(t,e,o){"use strict";var r=o(329);o.n(r).a},504:function(t,e,o){(e=o(18)(!1)).push([t.i,'.bar[data-v-563c8628]{width:73px;border-top-right-radius:35px;height:100%}.green[data-v-563c8628]{background:linear-gradient(.88turn,#58a994,#94cebd)}.pink[data-v-563c8628]{background:linear-gradient(312.81deg,#e34b99,#ff9ed0)}.orange[data-v-563c8628]{background:linear-gradient(.88turn,#f26b44,#f79174)}.pill-gothic-300mg-bold[data-v-563c8628]{font-family:"Pill-Gothic-300mg-Bold"!important}',""]),t.exports=e},505:function(t,e,o){"use strict";var r=o(330);o.n(r).a},506:function(t,e,o){(e=o(18)(!1)).push([t.i,".bar-container[data-v-fc3635d6]{height:185px;position:relative}.bar[data-v-fc3635d6]{position:absolute;bottom:0}",""]),t.exports=e},507:function(t,e,o){"use strict";var r=o(331);o.n(r).a},508:function(t,e,o){(e=o(18)(!1)).push([t.i,'.pill-gothic-300mg-bold[data-v-7a23e51e]{font-family:"Pill-Gothic-300mg-Bold"!important}.font-liberation-serif-bold[data-v-7a23e51e]{font-family:"Liberation-Serif-Bold"!important}.font-liberation-serif-reg[data-v-7a23e51e]{font-family:"Liberation-Serif-Regular"!important}.avtar-bg[data-v-7a23e51e]{background:linear-gradient(.88turn,#58a994,#94cebd)}',""]),t.exports=e},510:function(t,e,o){var map={"./af":342,"./af.js":342,"./ar":343,"./ar-dz":344,"./ar-dz.js":344,"./ar-kw":345,"./ar-kw.js":345,"./ar-ly":346,"./ar-ly.js":346,"./ar-ma":347,"./ar-ma.js":347,"./ar-sa":348,"./ar-sa.js":348,"./ar-tn":349,"./ar-tn.js":349,"./ar.js":343,"./az":350,"./az.js":350,"./be":351,"./be.js":351,"./bg":352,"./bg.js":352,"./bm":353,"./bm.js":353,"./bn":354,"./bn-bd":355,"./bn-bd.js":355,"./bn.js":354,"./bo":356,"./bo.js":356,"./br":357,"./br.js":357,"./bs":358,"./bs.js":358,"./ca":359,"./ca.js":359,"./cs":360,"./cs.js":360,"./cv":361,"./cv.js":361,"./cy":362,"./cy.js":362,"./da":363,"./da.js":363,"./de":364,"./de-at":365,"./de-at.js":365,"./de-ch":366,"./de-ch.js":366,"./de.js":364,"./dv":367,"./dv.js":367,"./el":368,"./el.js":368,"./en-au":369,"./en-au.js":369,"./en-ca":370,"./en-ca.js":370,"./en-gb":371,"./en-gb.js":371,"./en-ie":372,"./en-ie.js":372,"./en-il":373,"./en-il.js":373,"./en-in":374,"./en-in.js":374,"./en-nz":375,"./en-nz.js":375,"./en-sg":376,"./en-sg.js":376,"./eo":377,"./eo.js":377,"./es":378,"./es-do":379,"./es-do.js":379,"./es-mx":380,"./es-mx.js":380,"./es-us":381,"./es-us.js":381,"./es.js":378,"./et":382,"./et.js":382,"./eu":383,"./eu.js":383,"./fa":384,"./fa.js":384,"./fi":385,"./fi.js":385,"./fil":386,"./fil.js":386,"./fo":387,"./fo.js":387,"./fr":388,"./fr-ca":389,"./fr-ca.js":389,"./fr-ch":390,"./fr-ch.js":390,"./fr.js":388,"./fy":391,"./fy.js":391,"./ga":392,"./ga.js":392,"./gd":393,"./gd.js":393,"./gl":394,"./gl.js":394,"./gom-deva":395,"./gom-deva.js":395,"./gom-latn":396,"./gom-latn.js":396,"./gu":397,"./gu.js":397,"./he":398,"./he.js":398,"./hi":399,"./hi.js":399,"./hr":400,"./hr.js":400,"./hu":401,"./hu.js":401,"./hy-am":402,"./hy-am.js":402,"./id":403,"./id.js":403,"./is":404,"./is.js":404,"./it":405,"./it-ch":406,"./it-ch.js":406,"./it.js":405,"./ja":407,"./ja.js":407,"./jv":408,"./jv.js":408,"./ka":409,"./ka.js":409,"./kk":410,"./kk.js":410,"./km":411,"./km.js":411,"./kn":412,"./kn.js":412,"./ko":413,"./ko.js":413,"./ku":414,"./ku.js":414,"./ky":415,"./ky.js":415,"./lb":416,"./lb.js":416,"./lo":417,"./lo.js":417,"./lt":418,"./lt.js":418,"./lv":419,"./lv.js":419,"./me":420,"./me.js":420,"./mi":421,"./mi.js":421,"./mk":422,"./mk.js":422,"./ml":423,"./ml.js":423,"./mn":424,"./mn.js":424,"./mr":425,"./mr.js":425,"./ms":426,"./ms-my":427,"./ms-my.js":427,"./ms.js":426,"./mt":428,"./mt.js":428,"./my":429,"./my.js":429,"./nb":430,"./nb.js":430,"./ne":431,"./ne.js":431,"./nl":432,"./nl-be":433,"./nl-be.js":433,"./nl.js":432,"./nn":434,"./nn.js":434,"./oc-lnc":435,"./oc-lnc.js":435,"./pa-in":436,"./pa-in.js":436,"./pl":437,"./pl.js":437,"./pt":438,"./pt-br":439,"./pt-br.js":439,"./pt.js":438,"./ro":440,"./ro.js":440,"./ru":441,"./ru.js":441,"./sd":442,"./sd.js":442,"./se":443,"./se.js":443,"./si":444,"./si.js":444,"./sk":445,"./sk.js":445,"./sl":446,"./sl.js":446,"./sq":447,"./sq.js":447,"./sr":448,"./sr-cyrl":449,"./sr-cyrl.js":449,"./sr.js":448,"./ss":450,"./ss.js":450,"./sv":451,"./sv.js":451,"./sw":452,"./sw.js":452,"./ta":453,"./ta.js":453,"./te":454,"./te.js":454,"./tet":455,"./tet.js":455,"./tg":456,"./tg.js":456,"./th":457,"./th.js":457,"./tk":458,"./tk.js":458,"./tl-ph":459,"./tl-ph.js":459,"./tlh":460,"./tlh.js":460,"./tr":461,"./tr.js":461,"./tzl":462,"./tzl.js":462,"./tzm":463,"./tzm-latn":464,"./tzm-latn.js":464,"./tzm.js":463,"./ug-cn":465,"./ug-cn.js":465,"./uk":466,"./uk.js":466,"./ur":467,"./ur.js":467,"./uz":468,"./uz-latn":469,"./uz-latn.js":469,"./uz.js":468,"./vi":470,"./vi.js":470,"./x-pseudo":471,"./x-pseudo.js":471,"./yo":472,"./yo.js":472,"./zh-cn":473,"./zh-cn.js":473,"./zh-hk":474,"./zh-hk.js":474,"./zh-mo":475,"./zh-mo.js":475,"./zh-tw":476,"./zh-tw.js":476};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=510},511:function(t,e,o){"use strict";var r=o(332);o.n(r).a},512:function(t,e,o){(e=o(18)(!1)).push([t.i,".edu-attainment[data-v-5cc89c04]{position:absolute;top:20px;left:20px}",""]),t.exports=e},513:function(t,e,o){"use strict";var r=o(333);o.n(r).a},514:function(t,e,o){(e=o(18)(!1)).push([t.i,".content[data-v-420b02b9]{position:absolute;top:30%;left:40%}",""]),t.exports=e},515:function(t,e,o){"use strict";var r=o(334);o.n(r).a},516:function(t,e,o){(e=o(18)(!1)).push([t.i,".chart-height[data-v-1fdbc90a]{height:100%}",""]),t.exports=e},517:function(t,e,o){"use strict";var r=o(335);o.n(r).a},518:function(t,e,o){(e=o(18)(!1)).push([t.i,".left-percentage[data-v-e2f3d8d2]{bottom:20px;left:50px}.right-percentage[data-v-e2f3d8d2]{bottom:20px;right:40px}hr.dotted-line[data-v-e2f3d8d2]{border-top:2px dashed #fff;border-bottom:none}.chart-height[data-v-e2f3d8d2]{height:280px}",""]),t.exports=e},519:function(t,e,o){"use strict";var r=o(336);o.n(r).a},520:function(t,e,o){(e=o(18)(!1)).push([t.i,'.pill-gothic-300mg-bold[data-v-4d8e6156]{font-family:"Pill-Gothic-300mg-Bold"!important}.font-liberation-serif-bold[data-v-4d8e6156]{font-family:"Liberation-Serif-Bold"!important}.font-liberation-serif-reg[data-v-4d8e6156]{font-family:"Liberation-Serif-Regular"!important}.flex-1[data-v-4d8e6156]{flex:1}',""]),t.exports=e},545:function(t,e,o){"use strict";var r=o(337);o.n(r).a},546:function(t,e,o){(e=o(18)(!1)).push([t.i,".center-text[data-v-be05f2f2]{margin-top:20px;margin-left:0;width:50%}",""]),t.exports=e},547:function(t,e,o){"use strict";var r=o(338);o.n(r).a},548:function(t,e,o){(e=o(18)(!1)).push([t.i,".btn-white[data-v-260248ac]{background-color:#fff!important}",""]),t.exports=e},555:function(t,e,o){"use strict";o.r(e);var r={components:{Home:o(478).default}},n=o(49),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Home")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Home:o(478).default})}}]);