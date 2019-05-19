import { IonicPage, NavController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { PayPage } from '../pay/pay';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// baidu map
declare var BMap;
declare var BMAP_STATUS_SUCCESS;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') map_container: ElementRef;
  map: any;//地图对象
  marker: any;//标记
  geolocation1: any;
  myIcon: any;
  infolist =[];
  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController
  ) {
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
  }

  ionViewDidEnter() {
    let map =
      this.map =
      new BMap.Map(
        this.map_container.nativeElement,
        {
          enableMapClick: true,//点击拖拽
          enableScrollWheelZoom: true,//启动滚轮放大缩小，默认禁用
          enableContinuousZoom: true //连续缩放效果，默认禁用
        }
      );//创建地图实例
    let point = new BMap.Point(114.576978,38.036752);//坐标可以通过百度地图坐标拾取器获取
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);
    map.centerAndZoom(point, 18);//设置中心和地图显示级别
  }
  getLocationByBrowser(mycity) {
    let geolocation1 = this.geolocation1 = new BMap.Geolocation();
    geolocation1.getCurrentPosition((r) => {
      let mk = this.marker = new BMap.Marker(r.point, { icon: this.myIcon });
      if (geolocation1.getStatus() == BMAP_STATUS_SUCCESS) {
        this.map.addOverlay(mk);
        this.map.panTo(r.point, 16);
        console.log('浏览器定位：您的位置是 ' + r.point.lng + ',' + r.point.lat);   
      }
      else {
        alert('failed' + this.geolocation1.getStatus());
      }
      var lngLat = new BMap.Point(r.point.lng,r.point.lat);//指定的经度和纬度创建一个地理点坐标。
      var geoc =new BMap.Geocoder();//创建一个地址解析器的实例.对指定的坐标点进行反地址解析。
        geoc.getLocation(lngLat, (rs)=>{
              var addComp = rs.addressComponents;
              var city = addComp.city;//市
              var district = addComp.district;//区或县
              console.log(city+district);
              var myplace=city+district;
              this.navCtrl.setRoot(HomePage,{mycity:myplace});
      })
    }, { enableHighAccuracy: false })  
  }
 
  getLocationByCity() {
    let city = "河北师大";
    if (city != "") {
      this.map.centerAndZoom(city, 16);      // 用城市名设置地图中心点
    }
    this.infolist =[
      {imgsURL:'assets/imgs/bdz.jpg',jdname:'抱犊寨',jdcon:'抱犊寨古时称为萆山，即汉将韩信伐赵之战中，令军卒“人持一旗帜，从间道萆山而望赵军”的地方。抱犊之名，据说在北魏葛荣起义时，当地人为避战乱，抱犊上山，因此才有了抱犊之名。山的四面都是峭壁，山路很险，而山顶上又有600多亩耕地，所以民间又有“抱犊（小牛）上山，养大耕田”的说法。而实际在早于北魏，作于两晋时期的《玉匮》中，即有“抱犊山”的记载。“抱犊”与“寨”相连，是在金末元初时，金将武仙在山顶屯兵建寨，抗击蒙古军队，这样此山便有了“寨”的名称。'},
      {imgsURL:'assets/imgs/fls.jpg',jdname:'封龙山',jdcon:'封龙山是一座历史文化名山，这里既有浑然天成的自然景观，又有十分丰富的历史资源，在我国文化史、科学发展史上占有重要地位。传说封龙山是大禹治水时，大禹为了降服兴风作浪的蛟龙，给黄河流域的人民造成灾难，将蛟龙锁封此山上，从而得名“封龙山”。包括山上的黑龙洞等都与大禹治水的故事有关。'},
      {imgsURL:'assets/imgs/blcs.jpg',jdname:'柏林禅寺',jdcon:'柏林禅寺位于河北省赵县县城（古称赵州）东南角，与赵州桥遥遥相望，始建于汉献帝建安年间（196－220年），全寺占地80亩。古称观音院，南宋为永安院，金代名柏林禅院，自元代起即称柏林禅寺。现任住持为河北省佛教协会会长明海大和尚。'}, 
    ];
  }
  getLocationByIp() {
    let myCity = new BMap.LocalCity();
    myCity.get(result => {
      let cityName = result.name;
      this.map.setCenter(cityName);
      console.log("当前定位城市:" + cityName);
    });
  }
  searchBt(){
    let city = "北京";
    if (city != "") {
      this.map.centerAndZoom(city, 16);      // 用城市名设置地图中心点
  }
  this.infolist =[
    {imgsURL:'assets/imgs/gugong.jpg',jdname:'故宫',jdcon:'北京故宫于明成祖永乐四年（1406年）开始建设，以南京故宫为蓝本营建，到永乐十八年（1420年）建成。它是一座长方形城池，南北长961米，东西宽753米，四面围有高10米的城墙，城外有宽52米的护城河。紫禁城内的建筑分为外朝和内廷两部分。外朝的中心为太和殿、中和殿、保和殿，统称三大殿，是国家举行大典礼的地方。内廷的中心是乾清宫、交泰殿、坤宁宫，统称后三宫，是皇帝和皇后居住的正宫。'},
    {imgsURL:'assets/imgs/ymy.png',jdname:'圆明园',jdcon:'圆明园始建于1709年（康熙四十八年），最初是康熙帝给皇四子胤禛的赐园。1722年雍正即位以后，拓展原赐园，并在园南增建了正大光明殿和勤政殿以及内阁、六部、军机处诸多值房，欲以夏季在此“避喧听政”。乾隆帝在位期间除对圆明园进行局部增建、改建之外，还在紧东邻新建了长春园，在东南邻并入了万春园。 [3]  圆明三园的格局基本形成。嘉庆朝，主要对绮春园（万春园）进行修缮和拓建，使之成为主要园居场所之一。道光帝时，国事日衰，财力不足，但宁撤万寿、香山、玉泉“三山”的陈设，罢热河避暑与木兰狩猎，仍不放弃圆明三园的改建和装饰。1860年10月6日英法联军洗劫圆明园，抢掠文物，焚烧，同治帝时欲修复，后因财政困难，被迫停止，改建其它建筑。八国联军之后，又遭到匪盗的打击，终变成一片废墟。'},
    {imgsURL:'assets/imgs/changc.jpg',jdname:'八达岭长城',jdcon:'明长城的八达岭段被称作“玉关天堑”，为明代居庸关八景之一。八达岭长城是明长城向游人开放最早的地段，八达岭景区以八达岭长城为主，兴建了八达岭饭店和由江泽民主席亲笔题名的中国长城博物馆等功能齐全的现代化旅游服务设施。八达岭景区是全国文明风景旅游区示范点，以其宏伟的景观、完善的设施和深厚的文化历史内涵而著称于世，是举世闻名的旅游胜地。'}, 
    {imgsURL:'assets/imgs/tam.jpg',jdname:'天安门',jdcon:'天安门是明清两代北京皇城的正门，始建于明朝永乐十五年（1417年），最初名“承天门”，寓“承天启运、受命于天”之意。设计者为明代御用建筑匠师蒯祥。清朝顺治八年（1651年）更名为天安门。由城台和城楼两部分组成，有汉白玉石的须弥座，总高34.7米。天安门城楼长66米、宽37米。城台下有券门五阙，中间的券门最大，位于北京皇城中轴线上，过去只有皇帝才可以由此出入。正中门洞上方悬挂着毛泽东画像，两边分别是“中华人民共和国万岁”和“世界人民大团结万岁”的大幅标语。'},
  ];
}
goPay(){
  this.navCtrl.push(PayPage);
}
}