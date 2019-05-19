import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';
import { App } from 'ionic-angular';
import { PertainHomePage } from '../pertain-home/pertain-home';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { PayPage } from '../pay/pay';
import { FixPage } from '../fix/fix';
import { RepairPage } from '../repair/repair';
import { ContactPage } from '../contact/contact';

import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myplace : string;
  params;
  cityname="";
  infolist = [
    {imgsURL:'assets/imgs/hanfu1.jpg'},
    {imgsURL:'assets/imgs/hanfu2.jpg'},
    {imgsURL:'assets/imgs/hanfu3.jpeg'},
    {imgsURL:'assets/imgs/taoci1.jpeg'},
    {imgsURL:'assets/imgs/taoci2.jpg'},
    {imgsURL:'assets/imgs/taoci3.jpg'},
    {imgsURL:'assets/imgs/zhisan1.jpg'},
    {imgsURL:'assets/imgs/zhisan2.jpg'},
    {imgsURL:'assets/imgs/zhisan3.jpg'},
    {imgsURL:'assets/imgs/taoci4.jpg'},
    {imgsURL:'assets/imgs/taoci5.jpg'},
    {imgsURL:'assets/imgs/taoci6.png'},
    {imgsURL:'assets/imgs/zhisan4.jpg'},
    {imgsURL:'assets/imgs/zhisan5.jpg'},
    {imgsURL:'assets/imgs/zhisan6.jpg'},
  ];
  constructor(public navCtrl: NavController,private app:App, public navParams: NavParams,public events:Events,public http:Http,) {
    this.params= navParams.get('mycity');
    this.cityname=this.params;
  }
   home_button1=[
    {src:'assets/imgs/home_01.png'},
    {src:'assets/imgs/home_02.png'},
    {src:'assets/imgs/home_03.png'},
    {src:'assets/imgs/home_07.png'}
  ]
  annex(id){
    if(id==0){
      this.app.getRootNav().push(AboutPage);
    }
    else if(id==1){
      this.app.getRootNav().push(PayPage);
    }
    else if(id==3){
      this.app.getRootNav().push(FixPage);
    }
    else if(id==2){
      this.app.getRootNav().push(RepairPage);
    }
  }
  goMap(){
    console.log('map');
    this.navCtrl.push(MapPage);
  }
  ionViewDidEnter(){ 

  }
  slides: string[] = ['推荐', '汉服', '纸伞','陶瓷','字画','折扇'];//显示的数据
  pageNumber: number =5;//同时显示的个数
  selectedIndex: number = 0;//默认选中的
  onClick(index) {
    this.selectedIndex = index;
    console.log(index);
    if(index==0){
    this.infolist = [
        {imgsURL:'assets/imgs/hanfu1.jpg'},
        {imgsURL:'assets/imgs/hanfu2.jpg'},
        {imgsURL:'assets/imgs/hanfu3.jpeg'},
        {imgsURL:'assets/imgs/taoci1.jpeg'},
        {imgsURL:'assets/imgs/taoci2.jpg'},
        {imgsURL:'assets/imgs/taoci3.jpg'},
        {imgsURL:'assets/imgs/zhisan1.jpg'},
        {imgsURL:'assets/imgs/zhisan2.jpg'},
        {imgsURL:'assets/imgs/zhisan3.jpg'},
        {imgsURL:'assets/imgs/taoci4.jpg'},
        {imgsURL:'assets/imgs/taoci5.jpg'},
        {imgsURL:'assets/imgs/taoci6.png'},
        {imgsURL:'assets/imgs/zhisan4.jpg'},
        {imgsURL:'assets/imgs/zhisan5.jpg'},
        {imgsURL:'assets/imgs/zhisan6.jpg'},
        {imgsURL:'assets/imgs/hanfu4.jpeg'},
        {imgsURL:'assets/imgs/hanfu5.jpg'},
        {imgsURL:'assets/imgs/hanfu6.jpeg'},
      ];
    }else if(index==1){
    this.infolist = [
      {imgsURL:'assets/imgs/hanfu1.jpg'},
      {imgsURL:'assets/imgs/hanfu2.jpg'},
      {imgsURL:'assets/imgs/hanfu3.jpeg'},
      {imgsURL:'assets/imgs/hanfu4.jpeg'},
      {imgsURL:'assets/imgs/hanfu5.jpg'},
      {imgsURL:'assets/imgs/hanfu6.jpeg'},
    ]}else if(index==2){
      this.infolist=[
        {imgsURL:'assets/imgs/zhisan1.jpg'},
        {imgsURL:'assets/imgs/zhisan2.jpg'},
        {imgsURL:'assets/imgs/zhisan3.jpg'},
        {imgsURL:'assets/imgs/zhisan4.jpg'},
        {imgsURL:'assets/imgs/zhisan5.jpg'},
        {imgsURL:'assets/imgs/zhisan6.jpg'},
    ]}else if(index==3){
      this.infolist=[
      {imgsURL:'assets/imgs/taoci1.jpeg'},
      {imgsURL:'assets/imgs/taoci2.jpg'},
      {imgsURL:'assets/imgs/taoci3.jpg'},
      {imgsURL:'assets/imgs/taoci4.jpg'},
      {imgsURL:'assets/imgs/taoci5.jpg'},
      {imgsURL:'assets/imgs/taoci6.png'},
    ]}else if(index==4){
      this.infolist=[
      {imgsURL:'assets/imgs/zihua1.jpg'},
      {imgsURL:'assets/imgs/zihua2.jpg'},
      {imgsURL:'assets/imgs/zihua3.jpg'},
      {imgsURL:'assets/imgs/zihua4.jpg'},
      {imgsURL:'assets/imgs/zihua5.jpg'},
      {imgsURL:'assets/imgs/zihua6.jpg'},
    ]}
    
  }
  goCon(){
    this.navCtrl.push(ContactPage);
  }
  
    //下拉刷新
    doRefresh(refresher) {
      setTimeout(() => {
        this.ionViewDidEnter()
        refresher.complete();
      }, 1000);
    }
      //上拉加载
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
