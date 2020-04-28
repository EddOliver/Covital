import React from "react";
import {faCaretSquareDown,faCaretSquareRight,faCaretSquareUp} from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faChevronLeft,faQuestion,faLock,faSadCry,faFrownOpen,faMehRollingEyes,faMeh,faSmile,faLaughBeam,faHashtag} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mxstates from './Home/states/mexico.json';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import ReactDOM from "react-dom"
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ResizableIconButton from "./Home/components/ResizeButton.jsx"
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RedditIcon from '@material-ui/icons/Reddit';
import twitterd from './Home/td.svg'
import MEX from './Home/MEX.svg'
import USA from './Home/USA.svg'
import {Link} from "react-router-dom";


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Table,
  CardBody,
  Row,
  Col,
  Container,
  Dropdown,
  DropdownToggle, 
  DropdownMenu,
  DropdownItem,
  CardFooter
} from "reactstrap";

import Alert from "./Home/components/Alert.js"

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from "react-google-maps";

// core components
import PanelHeader from "./Home/components/PanelHeader/PanelHeader.jsx";

import {
  chartColor,
  gradientChartOptionsConfigurationWithNumbersAndGrid
} from "./Home/variables/charts.jsx";


var namestates= ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Ciudad de México","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"]
var infotoogle = [1,1,1,1,1,1];
var visible=["none","none","none","none","none","none","inline"]
var myicon=[faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown]
var infoc = 0;
var states=1
var droper=false
var infomem=0
var mexdata;
var icons = [faSadCry,faFrownOpen,faMehRollingEyes,faMeh,faSmile,faLaughBeam,faHashtag]
var MapWrapper;
var MapWrapper2;
var statestate=[]
var yes = 1;
var yes2 = 1;
var statemem=1;
var statemem2=1;
var dashboardAllProductsChart;
var geojson=mxstates['features']
//var crd
var colors=[]
var colorst=[]
let coordArr1=[]
let coordArr2=[]
let coordArr3=[]
let coordArr4=[]
let coordArr5=[]
let coordArr6=[]
let coordArr7=[]
let coordArr8=[]
let coordArr9=[]
let coordArr10=[]
let coordArr11=[]
let coordArr12=[]
let coordArr13=[]
let coordArr14=[]
let coordArr15=[]
let coordArr16=[]
let coordArr17=[]
let coordArr18=[]
let coordArr19=[]
let coordArr20=[]
let coordArr21=[]
let coordArr22=[]
let coordArr23=[]
let coordArr24=[]
let coordArr25=[]
let coordArr26=[]
let coordArr27=[]
let coordArr28=[]
let coordArr29=[]
let coordArr30=[]
let coordArr31=[]
let coordArr32=[]
var per=[]
var datain=[];
datain["totalr"]=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
var high=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var high2=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var highmem;
var highmem2;
var infomem=10;
var mylabel="Estado"
var graphlabelvar=[null]
var graphdatavar=[null]
var graphcouter=0
var moblat=22
var moblng=-92

var data={
  "info1": [
    {
      "card1": [
        {
          "image": "https://cdn.shopify.com/s/files/1/0048/5792/1651/products/cubre-bocas-azul-sms_1024x1024.jpg?v=1530223913",
          "imageb": "https://d3i11hp0zpbt87.cloudfront.net/media/W1siZiIsIjIwMTYvMDUvMTIvNnJrNTRsYzF5Yl9UaGlua3N0b2NrUGhvdG9zXzE4MzE3NzU2Ni5qcGciXSxbInAiLCJ0aHVtYiIsIjEyNDB4NjQwIyJdXQ?basename=Danger+Assessment+Could+Predict+if+an+Abuser+Will+Kill&sha=188ae45f0a5451a2",
          "info": "Este es un cubrebocas",
          "moreinfo": "http://www.iner.salud.gob.mx/descargas/comitebioseguridad/ProteccionRespiratoria.pdf",
          "name": "Cubrebocas11",
          "names": "Inapropiado"
        }
      ]
    }
  ]
}

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}


class Home extends React.Component {

  constructor(props) {
    super(props);
    data={
      "info1": [
        {
          "card1": [
            {
              "image": "https://cdn.shopify.com/s/files/1/0048/5792/1651/products/cubre-bocas-azul-sms_1024x1024.jpg?v=1530223913",
              "imageb": "https://d3i11hp0zpbt87.cloudfront.net/media/W1siZiIsIjIwMTYvMDUvMTIvNnJrNTRsYzF5Yl9UaGlua3N0b2NrUGhvdG9zXzE4MzE3NzU2Ni5qcGciXSxbInAiLCJ0aHVtYiIsIjEyNDB4NjQwIyJdXQ?basename=Danger+Assessment+Could+Predict+if+an+Abuser+Will+Kill&sha=188ae45f0a5451a2",
              "info": "Este es un cubrebocas",
              "moreinfo": "http://www.iner.salud.gob.mx/descargas/comitebioseguridad/ProteccionRespiratoria.pdf",
              "name": "Cubrebocas11",
              "names": "Inapropiado"
            }
          ]
        }
      ]
    }
    
    this.state = {
      dropdownOpen : droper,
      my_icon : myicon,
      visibles:visible,
      name:data["info1"][0]["card1"][0]["name"],
      names:data["info1"][0]["card1"][0]["names"],
      image:data["info1"][0]["card1"][0]["image"],
      imageb:data["info1"][0]["card1"][0]["imageb"],
      info:data["info1"][0]["card1"][0]["info"],
      moreinfo:data["info1"][0]["card1"][0]["moreinfo"],
      cycles:data["info1"][0]["card1"].length,
      poly1:[{lat:0,lng:0}],
      poly2:[{lat:0,lng:0}],
      poly3:[{lat:0,lng:0}],
      poly4:[{lat:0,lng:0}],
      poly5:[{lat:0,lng:0}],
      poly6:[{lat:0,lng:0}],
      poly7:[{lat:0,lng:0}],
      poly8:[{lat:0,lng:0}],
      poly9:[{lat:0,lng:0}],
      poly10:[{lat:0,lng:0}],
      poly11:[{lat:0,lng:0}],
      poly12:[{lat:0,lng:0}],
      poly13:[{lat:0,lng:0}],
      poly14:[{lat:0,lng:0}],
      poly15:[{lat:0,lng:0}],
      poly16:[{lat:0,lng:0}],
      poly17:[{lat:0,lng:0}],
      poly18:[{lat:0,lng:0}],
      poly19:[{lat:0,lng:0}],
      poly20:[{lat:0,lng:0}],
      poly21:[{lat:0,lng:0}],
      poly22:[{lat:0,lng:0}],
      poly23:[{lat:0,lng:0}],
      poly24:[{lat:0,lng:0}],
      poly25:[{lat:0,lng:0}],
      poly26:[{lat:0,lng:0}],
      poly27:[{lat:0,lng:0}],
      poly28:[{lat:0,lng:0}],
      poly29:[{lat:0,lng:0}],
      poly30:[{lat:0,lng:0}],
      poly31:[{lat:0,lng:0}],
      poly32:[{lat:0,lng:0}],
      flag1:[{lat:0,lng:0}],
      flag2:[{lat:0,lng:0}],
      flag3:[{lat:0,lng:0}],
      loc:{ lat: 23.76, lng: -101.125519 },
      colorstate:colors,
      colorstatet:colorst,
      dataview:["","","","",""],
      higharr:high,
      higharr2:high2,
      logo:0,
      logo2:0,
      label:mylabel,
      lockstate:"none",
      lockstate2:"none",
      datastate:"inline",
      datastate2:"inline",
      mapview:"none",
      mapviewt:"none",
      graphlabel:[],
      graphdata:[],
      graphtitle:"Casos positivos 2020",
      widget:icons[6],
      windgetcolor:"#black",
      widgetname:"Analítica de Twitter en tiempo Real",
      dlat:22,
      dlng:-92,
      percentage:""
    };
    this.myicon = faCaretSquareDown;
  }

componentWillUnmount(){

  data={
    "info1": [
      {
        "card1": [
          {
            "image": "https://cdn.shopify.com/s/files/1/0048/5792/1651/products/cubre-bocas-azul-sms_1024x1024.jpg?v=1530223913",
            "imageb": "https://d3i11hp0zpbt87.cloudfront.net/media/W1siZiIsIjIwMTYvMDUvMTIvNnJrNTRsYzF5Yl9UaGlua3N0b2NrUGhvdG9zXzE4MzE3NzU2Ni5qcGciXSxbInAiLCJ0aHVtYiIsIjEyNDB4NjQwIyJdXQ?basename=Danger+Assessment+Could+Predict+if+an+Abuser+Will+Kill&sha=188ae45f0a5451a2",
            "info": "Este es un cubrebocas",
            "moreinfo": "http://www.iner.salud.gob.mx/descargas/comitebioseguridad/ProteccionRespiratoria.pdf",
            "name": "Cubrebocas11",
            "names": "Inapropiado"
          }
        ]
      }
    ]
  }
 namestates= ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Ciudad de México","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"]
 infotoogle = [1,1,1,1,1,1];
 visible=["none","none","none","none","none","none","inline"]
 myicon=[faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown]
 infoc = 0;
 states=1
 droper=false
 infomem=0
 mexdata=[];
 icons = [faSadCry,faFrownOpen,faMehRollingEyes,faMeh,faSmile,faLaughBeam,faHashtag]
 MapWrapper=[];
 MapWrapper2=[];
 statestate=[]
 yes = 1;
 yes2 = 1;
 statemem=1;
 statemem2=1;
 geojson=mxstates['features']
// crd
 colors=[]
 colorst=[]
 coordArr1=[]
 coordArr2=[]
 coordArr3=[]
 coordArr4=[]
 coordArr5=[]
 coordArr6=[]
 coordArr7=[]
 coordArr8=[]
 coordArr9=[]
 coordArr10=[]
 coordArr11=[]
 coordArr12=[]
 coordArr13=[]
 coordArr14=[]
 coordArr15=[]
 coordArr16=[]
 coordArr17=[]
 coordArr18=[]
 coordArr19=[]
 coordArr20=[]
 coordArr21=[]
 coordArr22=[]
 coordArr23=[]
 coordArr24=[]
 coordArr25=[]
 coordArr26=[]
 coordArr27=[]
 coordArr28=[]
 coordArr29=[]
 coordArr30=[]
 coordArr31=[]
 coordArr32=[]
 per=[]
 datain=[];
datain["totalr"]=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
 high=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
 high2=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
 highmem=0;
 highmem2=0;
 infomem=10;
 mylabel="Estado"
graphlabelvar=[null]
graphdatavar=[null]
 graphcouter=0
 moblat=22
 moblng=-92

this.setState({
    dropdownOpen : droper,
    my_icon : myicon,
    visibles:visible,
    name:data["info1"][0]["card1"][0]["name"],
    names:data["info1"][0]["card1"][0]["names"],
    image:data["info1"][0]["card1"][0]["image"],
    imageb:data["info1"][0]["card1"][0]["imageb"],
    info:data["info1"][0]["card1"][0]["info"],
    moreinfo:data["info1"][0]["card1"][0]["moreinfo"],
    cycles:data["info1"][0]["card1"].length,
    poly1:[{lat:0,lng:0}],
    poly2:[{lat:0,lng:0}],
    poly3:[{lat:0,lng:0}],
    poly4:[{lat:0,lng:0}],
    poly5:[{lat:0,lng:0}],
    poly6:[{lat:0,lng:0}],
    poly7:[{lat:0,lng:0}],
    poly8:[{lat:0,lng:0}],
    poly9:[{lat:0,lng:0}],
    poly10:[{lat:0,lng:0}],
    poly11:[{lat:0,lng:0}],
    poly12:[{lat:0,lng:0}],
    poly13:[{lat:0,lng:0}],
    poly14:[{lat:0,lng:0}],
    poly15:[{lat:0,lng:0}],
    poly16:[{lat:0,lng:0}],
    poly17:[{lat:0,lng:0}],
    poly18:[{lat:0,lng:0}],
    poly19:[{lat:0,lng:0}],
    poly20:[{lat:0,lng:0}],
    poly21:[{lat:0,lng:0}],
    poly22:[{lat:0,lng:0}],
    poly23:[{lat:0,lng:0}],
    poly24:[{lat:0,lng:0}],
    poly25:[{lat:0,lng:0}],
    poly26:[{lat:0,lng:0}],
    poly27:[{lat:0,lng:0}],
    poly28:[{lat:0,lng:0}],
    poly29:[{lat:0,lng:0}],
    poly30:[{lat:0,lng:0}],
    poly31:[{lat:0,lng:0}],
    poly32:[{lat:0,lng:0}],
    flag1:[{lat:0,lng:0}],
    flag2:[{lat:0,lng:0}],
    flag3:[{lat:0,lng:0}],
    loc:{ lat: 23.76, lng: -101.125519 },
    colorstate:colors,
    colorstatet:colorst,
    dataview:["","","","",""],
    higharr:high,
    higharr2:high2,
    logo:0,
    logo2:0,
    label:mylabel,
    lockstate:"none",
    lockstate2:"none",
    datastate:"inline",
    datastate2:"inline",
    mapview:"none",
    mapviewt:"none",
    graphlabel:[],
    graphdata:[],
    graphtitle:"Casos positivos 2020",
    widget:icons[6],
    windgetcolor:"#black",
    widgetname:"Analítica de Twitter en tiempo Real",
    dlat:22,
    dlng:-92,
    percentage:""
  })
}

right(){
  infoc=infoc+1
  if(infoc === this.state.cycles)
  {
    infoc=0
  }
  this.setState({
    name:data["info1"][0]["card"+String(states)][infoc]["name"],
    names:data["info1"][0]["card"+String(states)][infoc]["names"],
    image:data["info1"][0]["card"+String(states)][infoc]["image"],
    imageb:data["info1"][0]["card"+String(states)][infoc]["imageb"],
    info:data["info1"][0]["card"+String(states)][infoc]["info"],
    moreinfo:data["info1"][0]["card"+String(states)][infoc]["moreinfo"],
    cycles:data["info1"][0]["card"+String(states)].length
  });

}

graphtoogle(){

  const label1=["confirmed","deaths"]
  const label2=["pos","die"]
  let _this=this;
  if(graphcouter===0)
  {
graphcouter=1
_this.setState({
  graphtitle:"Casos fallecidos 2020"
})
  }
  else if(graphcouter===1)
  {
    graphcouter=0
    _this.setState({
      graphtitle:"Casos positivos 2020"
    })
  }
  graphlabelvar=[]
  graphdatavar=[]
  for(var i = 36; i < mexdata["Mexico"].length; i++){
    graphlabelvar.push(mexdata["Mexico"][i]["date"])
    graphdatavar.push(mexdata["Mexico"][i][label1[graphcouter]])
   }
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var check1=(mexdata["Mexico"][mexdata["Mexico"].length-1][label1[graphcouter]]!==datain["total"][label2[graphcouter]])
   var check2= (mexdata["Mexico"][mexdata["Mexico"].length-1]["date"]!==date)
   if(check2)
   {
    graphlabelvar.push(date)
    graphdatavar.push(datain["total"][label2[graphcouter]])
   }
   else if(check1)
   {
    graphdatavar.pop()
    graphdatavar.push(datain["total"][label2[graphcouter]])
   }
   graphlabelvar.push(null)
   graphdatavar.push(null)
   graphlabelvar.push(null)
   graphdatavar.push(null)
   _this.setState({
     graphdata:graphdatavar,
     graphlabel:graphlabelvar
   })
}

toogle(){
/*
  this.setState({
    myicon1: faCaretSquareDown,
    myicon2: faCaretSquareDown,
    myicon3: faCaretSquareDown,
    myicon4: faCaretSquareDown,
    myicon5: faCaretSquareDown,
    myicon6: faCaretSquareDown,
    visible11: "none",
    visible22: "none",
    visible33: "none",
    visible44: "none",
    visible55: "none",
    visible66: "none",
    datastate:"inline"
  });
  
  infoc=0
  info1toogle=1
  info2toogle=1
  info3toogle=1
  info4toogle=1
  info5toogle=1
  info6toogle=1
*/
if(isMobile)
{

}
else{
  if(yes){
    this.setState({
      lockstate:"inline"
    });
    yes=0
  }
  else{
    yes=1
    this.handleClick(highmem,statemem)
    this.setState({
      lockstate:"none"
    });
  }
} 
}
toogle2(){
  /*
    this.setState({
      myicon1: faCaretSquareDown,
      myicon2: faCaretSquareDown,
      myicon3: faCaretSquareDown,
      myicon4: faCaretSquareDown,
      myicon5: faCaretSquareDown,
      myicon6: faCaretSquareDown,
      visible11: "none",
      visible22: "none",
      visible33: "none",
      visible44: "none",
      visible55: "none",
      visible66: "none",
      datastate:"inline"
    });
    
    infoc=0
    info1toogle=1
    info2toogle=1
    info3toogle=1
    info4toogle=1
    info5toogle=1
    info6toogle=1
  */
  if(isMobile)
  {
  
  }
  else{
    if(yes2){
      this.setState({
        lockstate2:"inline"
      });
      yes2=0
    }
    else{
      yes2=1
      this.handleClick2(highmem2,statemem2)
      this.setState({
        lockstate2:"none"
      });
    }
  } 
  }

left(){
  infoc=infoc-1
  if(infoc < 0)
  {
    infoc=this.state.cycles-1
  }
  this.setState({
    name:data["info1"][0]["card"+String(states)][infoc]["name"],
    names:data["info1"][0]["card"+String(states)][infoc]["names"],
    image:data["info1"][0]["card"+String(states)][infoc]["image"],
    imageb:data["info1"][0]["card"+String(states)][infoc]["imageb"],
    info:data["info1"][0]["card"+String(states)][infoc]["info"],
    moreinfo:data["info1"][0]["card"+String(states)][infoc]["moreinfo"],
    cycles:data["info1"][0]["card"+String(states)].length
  });

}

  onDismiss(select) {
    if(infomem!==select){
      infoc=0
      infomem=select
    }
    this.setState({
      name:data["info1"][0]["card"+String(select)][infoc]["name"],
      names:data["info1"][0]["card"+String(select)][infoc]["names"],
      image:data["info1"][0]["card"+String(select)][infoc]["image"],
      imageb:data["info1"][0]["card"+String(select)][infoc]["imageb"],
      info:data["info1"][0]["card"+String(select)][infoc]["info"],
      moreinfo:data["info1"][0]["card"+String(select)][infoc]["moreinfo"],
      cycles:data["info1"][0]["card"+String(select)].length
    });

    if(states!==select)
    {
      for(var i =0;i<6;i++)
        {
          visible[i]="none"
          myicon[i]=faCaretSquareDown
          infotoogle[i]=0
        }
        if(isMobile)
        {
          myicon[select-1]=faCaretSquareUp
        }
        else{
          myicon[select-1]=faCaretSquareRight
        }
        visible[select-1]="inline"
        visible[6]="none"
          this.setState({
            visibles:visible,
            my_icon:myicon,
            datastate:"none"
          });
          infotoogle[select-1]=0

    }
    else{
      if (infotoogle[select-1])
      {
        for(var i =0;i<6;i++)
        {
          visible[i]="none"
          myicon[i]=faCaretSquareDown
        }
        if(isMobile)
        {
          myicon[select-1]=faCaretSquareUp
        }
        else{
          myicon[select-1]=faCaretSquareRight
        }
        visible[select-1]="inline"
        visible[6]="none"
          this.setState({
            visibles:visible,
            my_icon:myicon,
            datastate:"none"
          });
          infotoogle[select-1]=0
      }
      else
      {
        for(var i =0;i<6;i++)
        {
          visible[i]="none"
          myicon[i]=faCaretSquareDown
          infotoogle[i]=1
        }
        visible[6]="inline"
          this.setState({
            visibles:visible,
            my_icon:myicon
          });
      }
    }
    states = select;
    

}

  getLocation(){
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      //crd = pos.coords;

    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    

  }

  handleClick(num,text) {
    if(yes){
      for (var i = 0; i < high.length; i++) {
        high[i]=1;
     }
     high[num]=4
     if(num === 32)
     {
      mylabel="País"
     }
     else{
      mylabel="Estado"
     }
      this.setState({
        dataview:[text["cou"],text["pos"],text["neg"],text["sos"],text["die"]],
        label:mylabel,
        higharr:high
      });
    }
    statemem={"cou":text["cou"],"pos":text["pos"],"neg":text["neg"],"sos":text["sos"],"die":text["die"]}
    highmem=num

  }

  handleClick2(num,text) {
    if(yes2){

      for (var i = 0; i < high2.length; i++) {
        high2[i]=1;
     }
     high2[num]=4

      this.setState({
        higharr2:high2,
        widget:icons[statestate[num]],
        windgetcolor:colorst[num],
        widgetname:namestates[num],
        percentage:per[num]
      });
    }
      highmem2=num
  }

  handleClic(numm,textt) {
    yes=1
    this.setState({
      datastate:"inline",
      lockstate:"none"
    });
    this.handleClick(numm,textt)
  }

  handleClic2(numm,textt) {
    yes2=1
    this.setState({
      datastate2:"inline",
      lockstate2:"none"
    });
    this.handleClick2(numm,textt)
  }

  componentWillMount(){


    namestates= ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Ciudad de México","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"]
    infotoogle = [1,1,1,1,1,1];
    visible=["none","none","none","none","none","none","inline"]
    myicon=[faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown,faCaretSquareDown]
    infoc = 0;
    states=1
    droper=false
    infomem=0
    mexdata=[];
    icons = [faSadCry,faFrownOpen,faMehRollingEyes,faMeh,faSmile,faLaughBeam,faHashtag]
    MapWrapper=[];
    MapWrapper2=[];
    statestate=[]
    yes = 1;
    yes2 = 1;
    statemem=1;
    statemem2=1;
    geojson=mxstates['features']
   // crd
    colors=[]
    colorst=[]
    coordArr1=[]
    coordArr2=[]
    coordArr3=[]
    coordArr4=[]
    coordArr5=[]
    coordArr6=[]
    coordArr7=[]
    coordArr8=[]
    coordArr9=[]
    coordArr10=[]
    coordArr11=[]
    coordArr12=[]
    coordArr13=[]
    coordArr14=[]
    coordArr15=[]
    coordArr16=[]
    coordArr17=[]
    coordArr18=[]
    coordArr19=[]
    coordArr20=[]
    coordArr21=[]
    coordArr22=[]
    coordArr23=[]
    coordArr24=[]
    coordArr25=[]
    coordArr26=[]
    coordArr27=[]
    coordArr28=[]
    coordArr29=[]
    coordArr30=[]
    coordArr31=[]
    coordArr32=[]
    per=[]
    datain=[];
   datain["totalr"]=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
    high=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    high2=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    highmem=0;
    highmem2=0;
    infomem=10;
    mylabel="Estado"
   graphlabelvar=[null]
   graphdatavar=[null]
    graphcouter=0
    moblat=22
    moblng=-92

    if(isMobile)
    {

    }
    else
    {
      this.setState({
        logo2:1
     })
    }


    var request1 = require('request');
    var options1 = {
        'method': 'GET',
        'url': 'https://xxxxxxxxx.us-south.apigw.appdomain.cloud/covital/carousel',
        'headers': {
          'accept': 'application/json',
          'x-ibm-client-id': 'APIKEY'
        }
      };
      request1(options1, function (error, response) { 
        if (error) throw new Error(error);
        data= JSON.parse(response.body)
      });

var request2 = require('request');
var options2 = {
  'method': 'GET',
  'url': 'https://xxxxxxxx.us-south.apigw.appdomain.cloud/covital/covid-mexico',
  'headers': {
    'accept': 'application/json',
    'x-ibm-client-id': 'APIKEY'
  }
};

let _this=this;
request2(options2, function (error, response) {   
  if (error) throw new Error(error);

  datain=JSON.parse(JSON.parse(response.body).body)
  var max = parseFloat(datain["total"]["max"])
  var mycolor=0.0
  var sep = parseFloat(datain["total"]["sep"])
  for (var i = 0; i < datain["totalr"].length; i++) {
    
    if((parseFloat(datain["totalr"][i]["pos"])/max) < (sep))
    {
        mycolor=(254*(1-(parseFloat(datain["totalr"][i]["pos"])/(max*sep)))).toFixed()
        colors[i]="#00"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"FF"
    }
    else
    {
        mycolor=(254*(1-(parseFloat(datain["totalr"][i]["pos"])/max))).toFixed()
        colors[i]="#0000"+parseInt(mycolor).toString(16).toLocaleUpperCase() 
    }
 }
 _this.setState({
   colorstate: colors,
   mapview:"inline"
})

var request3 = require('request');
var options3 = {
  'method': 'GET',
  'url': 'https://pomber.github.io/covid19/timeseries.json',
  'headers': {
  }
};
request3(options3, function (error, response) { 
  if (error) throw new Error(error);
  var myjsondata=JSON.parse(response.body)
  mexdata=myjsondata
  for(i = 36; i < myjsondata["Mexico"].length; i++){
    graphlabelvar.push(myjsondata["Mexico"][i]["date"])
    graphdatavar.push(myjsondata["Mexico"][i]["confirmed"])
   }
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var check1=(myjsondata["Mexico"][myjsondata["Mexico"].length-1]["confirmed"]!==datain["total"]["pos"])
   var check2= (myjsondata["Mexico"][myjsondata["Mexico"].length-1]["date"]!==date)
   if(check2)
   {
    graphlabelvar.push(date)
    graphdatavar.push(datain["total"]["pos"])
   }
   else if(check1)
   {
    graphdatavar.pop()
    graphdatavar.push(datain["total"]["pos"])
   }
   graphlabelvar.push(null)
   graphdatavar.push(null)
   graphlabelvar.push(null)
   graphdatavar.push(null)
   _this.setState({
     graphdata:graphdatavar,
     graphlabel:graphlabelvar
   })
});

});


var request6 = require('request');
var options6 = {
  'method': 'GET',
  'url': 'https://XXXXXXXX.us-south.apigw.appdomain.cloud/covital/twitter',
  'headers': {
    'accept': 'application/json',
    'x-ibm-client-id': 'APIKEY'
  }
};
request6(options6, function (error, response) { 
  if (error) throw new Error(error);
  var sentjson=JSON.parse(JSON.parse(response.body).body)
  
  var mymin=1
  var mymax=0
  for (var i = 0; i < 32; i++) {
    var temp = (sentjson[i][0]/sentjson[i][1])
    if(isNaN(temp)){
      temp = 0
    }
    if(mymin > temp){
      mymin = temp
    }
    if(mymax < temp){
      mymax = temp
    }
 }
 const offset=0.009
 mymax+=offset
 mymin-=offset
  for (var i = 0; i < 32; i++) {
    var mycolor=0.0
    var mycolor2=0.0
    var temp = (sentjson[i][0]/sentjson[i][1])
    if(isNaN(temp)){
      temp = 0
    }
    var ectemp=mymax-mymin
    var temp2=(temp/ectemp)-(mymin/ectemp)
    per[i]=Math.round(temp2*100)
    ectemp=0.167
    if(temp2<=0.167){
      statestate[i]=0
      temp2=(temp2/ectemp)
      mycolor=(254*(temp2)).toFixed()
      if(mycolor<16)
      {
      colorst[i]="#00000"+parseInt(mycolor).toString(16).toLocaleUpperCase() 
      }
      else{
        colorst[i]="#0000"+parseInt(mycolor).toString(16).toLocaleUpperCase()
      }
      
    }
    else if(temp2>0.167 && temp2<=0.329){
      statestate[i]=1
      temp2=(temp2/ectemp)-(0.167/ectemp)
      mycolor=(254*(temp2)).toFixed()
      if(mycolor<16)
      {
        colorst[i]="#000"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"FF"
      }
      else{
        colorst[i]="#00"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"FF"
      }
    }
    else if(temp2>0.329 && temp2<=0.496){
      statestate[i]=2
      temp2=(temp2/ectemp)-(0.329/ectemp)
      mycolor=(254*(1-temp2)).toFixed()
      if(mycolor<16)
      {
        colorst[i]="#00FF0"+parseInt(mycolor).toString(16).toLocaleUpperCase()
      }
      else{
        colorst[i]="#00FF"+parseInt(mycolor).toString(16).toLocaleUpperCase()
      }
      
    }
    else if(temp2>0.496 && temp2<=0.663){
      statestate[i]=3
      temp2=(temp2/ectemp)-(0.496/ectemp)
      mycolor=(254*(temp2)).toFixed()
      if(mycolor<16)
      {
        colorst[i]="#0"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"FF00"
      }
      else{
        colorst[i]="#"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"FF00"
      }
      
    }
    else if(temp2>0.663 && temp2<=0.83){
      statestate[i]=4
      temp2=(temp2/ectemp)-(0.663/ectemp)
      mycolor=(254*(1-temp2)).toFixed()
      if(mycolor<16)
      {
        colorst[i]="#FF0"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"00"
      }
      else{
        colorst[i]="#FF"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"00"
      }
    }
    else if(temp2>0.83 && temp2<=1){
      statestate[i]=5
      temp2=(temp2/ectemp)-(0.83/ectemp)
      mycolor=(254*(temp2)).toFixed()
      if(mycolor<16)
      {
        colorst[i]="#FF0"+parseInt(mycolor).toString(16).toLocaleUpperCase()+"0"+parseInt(mycolor).toString(16).toLocaleUpperCase()
      }
      else{
        colorst[i]="#FF"+parseInt(mycolor).toString(16).toLocaleUpperCase()+parseInt(mycolor).toString(16).toLocaleUpperCase()
      }
      
    }
 }
 _this.setState({
   colorstatet: colorst,
   mapviewt:"inline"
})
});



var request4 = require('request');
var options4 = {
  'method': 'GET',
  'url': 'https://XXXXXXXX.us-south.apigw.appdomain.cloud/covital/news',
  'headers': {
    'accept': 'application/json',
    'x-ibm-client-id': 'APIKEY'
  }
};

request4(options4, function (error, response) { 
  if (error) throw new Error(error);
  var myjsonnews=JSON.parse(response.body)
  var element =  <TwitterTweetEmbed tweetId={myjsonnews["news"][0]} />  
  ReactDOM.render(element, document.getElementById('t1'));
  element =  <TwitterTweetEmbed tweetId={myjsonnews["news"][1]} />  
  ReactDOM.render(element, document.getElementById('t2'));
  element =  <TwitterTweetEmbed tweetId={myjsonnews["news"][2]} />  
  ReactDOM.render(element, document.getElementById('t3'));
  element =  <TwitterTweetEmbed tweetId={myjsonnews["fnews"][0]} />  
  ReactDOM.render(element, document.getElementById('t4'));
  element =  <TwitterTweetEmbed tweetId={myjsonnews["fnews"][1]} />  
  ReactDOM.render(element, document.getElementById('t5'));
  element =  <TwitterTweetEmbed tweetId={myjsonnews["fnews"][2]} />  
  ReactDOM.render(element, document.getElementById('t6'));
});

      const mymarker = { url: require("./Home/aguila.svg"), scaledSize: {width: 40, height: 40}};
      const mymarker2 = { url: require("./Home/mar.svg"), scaledSize: {width: 230, height: 160}};
      MapWrapper2 = withScriptjs(
        withGoogleMap(props => (
          <GoogleMap
            defaultZoom={5}
            defaultCenter={this.state.loc}
            defaultOptions={{
              scrollwheel: false,
              styles: [
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
                },
                {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#ffffff" }, { lightness: 17 }]
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
                },
                {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [{ color: "#ffffff" }, { lightness: 18 }]
                },
                {
                  featureType: "road.local",
                  elementType: "geometry",
                  stylers: [{ color: "#ffffff" }, { lightness: 16 }]
                },
                {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#dedede" }, { lightness: 21 }]
                },
                {
                  elementType: "labels.text.stroke",
                  stylers: [
                    { visibility: "on" },
                    { color: "#ffffff" },
                    { lightness: 16 }
                  ]
                },
                {
                  elementType: "labels.text.fill",
                  stylers: [
                    { saturation: 36 },
                    { color: "#333333" },
                    { lightness: 40 }
                  ]
                },
                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#fefefe" }, { lightness: 20 }]
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
                }
              ]
            }}
          >
            <Marker options={{Opacity: this.state.logo2}} icon={mymarker2} position={{ lat: this.state.dlat, lng: this.state.dlng }} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(0,datain["totalr"][0])} path={this.state.poly1} options={{fillColor: this.state.colorstatet[0],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[0]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(1,datain["totalr"][1])} path={this.state.poly2} options={{fillColor: this.state.colorstatet[1],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[1]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(2,datain["totalr"][2])} path={this.state.poly3} options={{fillColor: this.state.colorstatet[2],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[2]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(3,datain["totalr"][3])} path={this.state.poly4} options={{fillColor: this.state.colorstatet[3],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[3]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(4,datain["totalr"][4])} path={this.state.poly5} options={{fillColor: this.state.colorstatet[4],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[4]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(5,datain["totalr"][5])} path={this.state.poly6} options={{fillColor: this.state.colorstatet[5],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[5]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(6,datain["totalr"][6])} path={this.state.poly7} options={{fillColor: this.state.colorstatet[6],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[6]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(7,datain["totalr"][7])} path={this.state.poly8} options={{fillColor: this.state.colorstatet[7],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[7]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(8,datain["totalr"][8])} path={this.state.poly9} options={{fillColor: this.state.colorstatet[8],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[8]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(9,datain["totalr"][9])} path={this.state.poly10} options={{fillColor: this.state.colorstatet[9],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[9]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(10,datain["totalr"][10])} path={this.state.poly11} options={{fillColor: this.state.colorstatet[10],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[10]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(11,datain["totalr"][11])} path={this.state.poly12} options={{fillColor: this.state.colorstatet[11],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[11]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(12,datain["totalr"][12])} path={this.state.poly13} options={{fillColor: this.state.colorstatet[12],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[12]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(13,datain["totalr"][13])} path={this.state.poly14} options={{fillColor: this.state.colorstatet[13],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[13]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(14,datain["totalr"][14])} path={this.state.poly15} options={{fillColor: this.state.colorstatet[14],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[14]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(15,datain["totalr"][15])} path={this.state.poly16} options={{fillColor: this.state.colorstatet[15],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[15]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(16,datain["totalr"][16])} path={this.state.poly17} options={{fillColor: this.state.colorstatet[16],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[16]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(17,datain["totalr"][17])} path={this.state.poly18} options={{fillColor: this.state.colorstatet[17],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[17]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(18,datain["totalr"][18])} path={this.state.poly19} options={{fillColor: this.state.colorstatet[18],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[18]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(19,datain["totalr"][19])} path={this.state.poly20} options={{fillColor: this.state.colorstatet[19],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[19]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(20,datain["totalr"][20])} path={this.state.poly21} options={{fillColor: this.state.colorstatet[20],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[20]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(21,datain["totalr"][21])} path={this.state.poly22} options={{fillColor: this.state.colorstatet[21],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[21]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(22,datain["totalr"][22])} path={this.state.poly23} options={{fillColor: this.state.colorstatet[22],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[22]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(23,datain["totalr"][23])} path={this.state.poly24} options={{fillColor: this.state.colorstatet[23],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[23]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(24,datain["totalr"][24])} path={this.state.poly25} options={{fillColor: this.state.colorstatet[24],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[24]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(25,datain["totalr"][25])} path={this.state.poly26} options={{fillColor: this.state.colorstatet[25],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[25]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(26,datain["totalr"][26])} path={this.state.poly27} options={{fillColor: this.state.colorstatet[26],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[26]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(27,datain["totalr"][27])} path={this.state.poly28} options={{fillColor: this.state.colorstatet[27],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[27]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(28,datain["totalr"][28])} path={this.state.poly29} options={{fillColor: this.state.colorstatet[28],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[28]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(29,datain["totalr"][29])} path={this.state.poly30} options={{fillColor: this.state.colorstatet[29],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[29]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(30,datain["totalr"][30])} path={this.state.poly31} options={{fillColor: this.state.colorstatet[30],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[30]}} />
            <Polygon onClick={() => this.toogle2()} onMouseOver={() => this.handleClick2(31,datain["totalr"][31])} path={this.state.poly32} options={{fillColor: this.state.colorstatet[31],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr2[31]}} />
          </GoogleMap>
        ))
      );
     MapWrapper = withScriptjs(
        withGoogleMap(props => (
          <GoogleMap
            defaultZoom={5}
            defaultCenter={this.state.loc}
            defaultOptions={{
              scrollwheel: false,
              styles: [
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
                },
                {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#ffffff" }, { lightness: 17 }]
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
                },
                {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [{ color: "#ffffff" }, { lightness: 18 }]
                },
                {
                  featureType: "road.local",
                  elementType: "geometry",
                  stylers: [{ color: "#ffffff" }, { lightness: 16 }]
                },
                {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#dedede" }, { lightness: 21 }]
                },
                {
                  elementType: "labels.text.stroke",
                  stylers: [
                    { visibility: "on" },
                    { color: "#ffffff" },
                    { lightness: 16 }
                  ]
                },
                {
                  elementType: "labels.text.fill",
                  stylers: [
                    { saturation: 36 },
                    { color: "#333333" },
                    { lightness: 40 }
                  ]
                },
                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#fefefe" }, { lightness: 20 }]
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
                }
              ]
            }}
          >
            <Marker onClick={() => this.toogle()} options={{Opacity: this.state.logo}} icon={mymarker} position={{ lat: 19.2, lng: -117 }} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(32,datain["total"])} path={this.state.flag1} options={{fillColor: "#006847",fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[32]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(32,datain["total"])} path={this.state.flag2} options={{fillColor: "#FFF",fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[32]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(32,datain["total"])} path={this.state.flag3} options={{fillColor: "#ce1126",fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[32]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(0,datain["totalr"][0])} path={this.state.poly1} options={{fillColor: this.state.colorstate[0],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[0]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(1,datain["totalr"][1])} path={this.state.poly2} options={{fillColor: this.state.colorstate[1],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[1]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(2,datain["totalr"][2])} path={this.state.poly3} options={{fillColor: this.state.colorstate[2],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[2]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(3,datain["totalr"][3])} path={this.state.poly4} options={{fillColor: this.state.colorstate[3],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[3]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(4,datain["totalr"][4])} path={this.state.poly5} options={{fillColor: this.state.colorstate[4],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[4]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(5,datain["totalr"][5])} path={this.state.poly6} options={{fillColor: this.state.colorstate[5],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[5]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(6,datain["totalr"][6])} path={this.state.poly7} options={{fillColor: this.state.colorstate[6],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[6]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(7,datain["totalr"][7])} path={this.state.poly8} options={{fillColor: this.state.colorstate[7],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[7]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(8,datain["totalr"][8])} path={this.state.poly9} options={{fillColor: this.state.colorstate[8],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[8]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(9,datain["totalr"][9])} path={this.state.poly10} options={{fillColor: this.state.colorstate[9],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[9]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(10,datain["totalr"][10])} path={this.state.poly11} options={{fillColor: this.state.colorstate[10],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[10]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(11,datain["totalr"][11])} path={this.state.poly12} options={{fillColor: this.state.colorstate[11],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[11]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(12,datain["totalr"][12])} path={this.state.poly13} options={{fillColor: this.state.colorstate[12],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[12]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(13,datain["totalr"][13])} path={this.state.poly14} options={{fillColor: this.state.colorstate[13],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[13]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(14,datain["totalr"][14])} path={this.state.poly15} options={{fillColor: this.state.colorstate[14],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[14]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(15,datain["totalr"][15])} path={this.state.poly16} options={{fillColor: this.state.colorstate[15],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[15]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(16,datain["totalr"][16])} path={this.state.poly17} options={{fillColor: this.state.colorstate[16],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[16]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(17,datain["totalr"][17])} path={this.state.poly18} options={{fillColor: this.state.colorstate[17],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[17]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(18,datain["totalr"][18])} path={this.state.poly19} options={{fillColor: this.state.colorstate[18],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[18]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(19,datain["totalr"][19])} path={this.state.poly20} options={{fillColor: this.state.colorstate[19],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[19]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(20,datain["totalr"][20])} path={this.state.poly21} options={{fillColor: this.state.colorstate[20],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[20]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(21,datain["totalr"][21])} path={this.state.poly22} options={{fillColor: this.state.colorstate[21],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[21]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(22,datain["totalr"][22])} path={this.state.poly23} options={{fillColor: this.state.colorstate[22],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[22]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(23,datain["totalr"][23])} path={this.state.poly24} options={{fillColor: this.state.colorstate[23],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[23]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(24,datain["totalr"][24])} path={this.state.poly25} options={{fillColor: this.state.colorstate[24],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[24]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(25,datain["totalr"][25])} path={this.state.poly26} options={{fillColor: this.state.colorstate[25],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[25]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(26,datain["totalr"][26])} path={this.state.poly27} options={{fillColor: this.state.colorstate[26],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[26]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(27,datain["totalr"][27])} path={this.state.poly28} options={{fillColor: this.state.colorstate[27],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[27]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(28,datain["totalr"][28])} path={this.state.poly29} options={{fillColor: this.state.colorstate[28],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[28]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(29,datain["totalr"][29])} path={this.state.poly30} options={{fillColor: this.state.colorstate[29],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[29]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(30,datain["totalr"][30])} path={this.state.poly31} options={{fillColor: this.state.colorstate[30],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[30]}} />
            <Polygon onClick={() => this.toogle()} onMouseOver={() => this.handleClick(31,datain["totalr"][31])} path={this.state.poly32} options={{fillColor: this.state.colorstate[31],fillOpacity: 0.8,strokeColor: "#000",strokeOpacity: 1,strokeWeight: this.state.higharr[31]}} />
          </GoogleMap>
        ))
      );

        var geojsona=geojson[1]
        var coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        for(var i = 0; i < coordinates.length; i++){
         coordArr1.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[2]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr2.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[3]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr3.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[4]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0

        for(i = 0; i < coordinates.length; i++){
         coordArr4.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[5]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        
        for(i = 0; i < coordinates.length; i++){
         coordArr5.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[6]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr6.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[7]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr7.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[8]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr8.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[9]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr9.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[10]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr10.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[11]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr11.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[12]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr12.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[13]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr13.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[14]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr14.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[15]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr15.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[16]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr16.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[17]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr17.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[18]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr18.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[19]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr19.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[20]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr20.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[21]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr21.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[22]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr22.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[23]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr23.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        geojsona=geojson[24]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr24.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[25]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr25.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[26]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1][0]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr26.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[27]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr27.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        
        geojsona=geojson[28]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr28.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
       
        geojsona=geojson[29]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr29.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
       
        geojsona=geojson[30]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr30.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
         
        geojsona=geojson[31]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr31.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }

        geojsona=geojson[32]
        coordinates = geojsona['geometry']['coordinates'][geojsona['geometry']['coordinates'].length-1]
        i =0
        for(i = 0; i < coordinates.length; i++){
         coordArr32.push({lat:coordinates[i][1],lng:coordinates[i][0]})
        }
        this.setState({
          //loc:{ lat: crd.latitude, lng: crd.longitude },
          poly1:coordArr1,
          poly2:coordArr2,
          poly3:coordArr3,
          poly4:coordArr4,
          poly5:coordArr5,
          poly6:coordArr6,
          poly7:coordArr7,
          poly8:coordArr8,
          poly9:coordArr9,
          poly10:coordArr10,
          poly11:coordArr11,
          poly12:coordArr12,
          poly13:coordArr13,
          poly14:coordArr14,
          poly15:coordArr15,
          poly16:coordArr16,
          poly17:coordArr17,
          poly18:coordArr18,
          poly19:coordArr19,
          poly20:coordArr20,
          poly21:coordArr21,
          poly22:coordArr22,
          poly23:coordArr23,
          poly24:coordArr24,
          poly25:coordArr25,
          poly26:coordArr26,
          poly27:coordArr27,
          poly28:coordArr28,
          poly29:coordArr29,
          poly30:coordArr30,
          poly31:coordArr31,
          poly32:coordArr32,
          flag1:[{"lat":18,"lng": -118},{"lat":22,"lng": -118},{"lat":22,"lng": -120},{"lat":18,"lng": -120}],
          flag2:[{"lat":18,"lng": -116},{"lat":22,"lng": -116},{"lat":22,"lng": -118},{"lat":18,"lng": -118}],
          flag3:[{"lat":18,"lng": -114},{"lat":22,"lng": -114},{"lat":22,"lng": -116},{"lat":18,"lng": -116}],
          logo:1
        })

        dashboardAllProductsChart = {
          data: canvas => {
            var ctx = canvas.getContext("2d");
            var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, "#0345fc");
            gradientStroke.addColorStop(1, chartColor);
            var gradientFill = ctx.createLinearGradient(0, 200, 0, 0);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, hexToRGB("#0345fc", 0.4));
            return {
              labels: this.state.graphlabel,
              datasets: [
                {
                  label: "Positivos",
                  borderColor: "#0345fc",
                  pointBorderColor: "#FFF",
                  pointBackgroundColor: "#0345fc",
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 1,
                  pointRadius: 4,
                  fill: true,
                  backgroundColor: gradientFill,
                  borderWidth: 2,
                  data: this.state.graphdata
                }
              ]
            };
          },
          options: gradientChartOptionsConfigurationWithNumbersAndGrid
        };
        
  }

  componentDidMount(){
  //this.getLocation()

  }

  drop(){
    droper=!droper
    this.setState({
      dropdownOpen:droper
    }
    )
  }


  render() {
    
  // Mobile Version
  //
  //
  //
  //
  //

    if (isMobile) {
      return (
        <>
        <PanelHeader
          size="lg"
          style={{size:"100%"}}
          content={
            <>

            <Row md="2" style={{position: "relative",left: "20px",bottom: "26%"}}>
              <Col xs="auto">
            <img style={{maxHeight:"72%"}} src="https://covital-bucket.s3.us-south.cloud-object-storage.appdomain.cloud/iconmodm.png" alt="Smiley face" />
            </Col>
              <Col xs="8">
              <h2 style={{color:"#bc8d03"}}>Iniciativa <br /> Covital</h2> 
            </Col>
          </Row>
          <Row style={{position: "relative",bottom: "30%"}}>
            <Col>
            <h5 style={{padding:"3%", color:"white", textAlign: "justify",textJustify: "inter-word"}}>Plataforma de información y datos para México sobre COVID-19</h5>
            </Col>
          </Row>
          
          <Container style={{position: "relative",bottom: "26%"}} fluid={true}>
          
          <Row md="3">
          <Col xs="auto">
          <ResizableIconButton size='large' onClick={()=> window.open("https://twitter.com/ICovital", "_blank")}>
              <TwitterIcon style={{ color:"#1da1f2" }} />
          </ResizableIconButton>
          </Col>
          <Col xs="auto">
          <ResizableIconButton size='large' onClick={()=> window.open("https://twitter.com/fcovid20", "_blank")}>
          <img style={{width:"42px",position: "relative",top: "10px"}} src={twitterd} />
          </ResizableIconButton>
          </Col>
          <Col xs="auto">
          <ResizableIconButton size='large' onClick={()=> window.open("mailto:iniciativacovital@gmail.com?subject=Mi Asunto es: &body=Mi mensaje: ", "_blank")}>
              <MailOutlineIcon style={{ color:"#bc8d03" }} />
          </ResizableIconButton>
          </Col>
          <Col xs="auto">
          <Link to="/english">
          <ResizableIconButton size='large'>
          <img style={{width:"42px",position: "relative",top: "4px"}} src={USA} />
          </ResizableIconButton>
          </Link>
          </Col>

         {/* <Col xs="auto">
          
          <ResizableIconButton size='large' onClick={()=> window.open("", "_blank")}>
            <RedditIcon style={{ color:"#ff4301" }} />
            </ResizableIconButton>
          </Col>
          */}
          </Row> 
          </Container>
         
          </>
          }
        />
        
          <div className="content">
            <Row>
              <Col md="7">
              <div style={{padding: "2%"}}>
                <Card>
                <CardTitle tag="h4">&nbsp;&nbsp;Mapa de Confirmados</CardTitle>
                  <CardBody style={{display:this.state.mapview}}>
                  <div
                      id="map"
                      className="map"
                      style={{position: "relative", overflow: "hidden" }}
                    >
                  <MapWrapper
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=APIKEY"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
                  </CardBody>
                </Card>
                </div>
              </Col>
              <Col md="4">
              <div style={{padding: "3.5%"}}>
              <Card>
                  <CardHeader>
                  <Row md="2">
                  <Col xs="auto">
                  <CardTitle tag="h4">Datos <FontAwesomeIcon style={{color: "black",display:this.state.lockstate}} icon={faLock} /> 
                    </CardTitle>
                    </Col>
                    <Col xs="auto">
                    <Dropdown style={{display:this.state.mapview}} group isOpen={this.state.dropdownOpen} size="lg" toggle={()=>this.drop()}>
                        <DropdownToggle color="info" caret>
                          Lista de Estados:
                        </DropdownToggle>
                        <DropdownMenu 
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  overflow: 'auto',
                                  maxHeight: '200px',
                                },
                              };
                            },
                          },
                        }}
                      >
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(32,datain["total"])}>Nacional</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(0,datain["totalr"][0])}>Aguascalientes</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(1,datain["totalr"][1])}>Baja California</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(2,datain["totalr"][2])}>Baja California Sur</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(3,datain["totalr"][3])}>Campeche</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(4,datain["totalr"][4])}>Coahuila</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(5,datain["totalr"][5])}>Colima</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(6,datain["totalr"][6])}>Chiapas</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(7,datain["totalr"][7])}>Chihuahua</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(8,datain["totalr"][8])}>CDMX</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(9,datain["totalr"][9])}>Durango</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(10,datain["totalr"][10])}>Guanajuato</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(11,datain["totalr"][11])}>Guerrero</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(12,datain["totalr"][12])}>Hidalgo</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(13,datain["totalr"][13])}>Jalisco</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(14,datain["totalr"][14])}>Mexico</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(15,datain["totalr"][15])}>Michoacán</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(16,datain["totalr"][16])}>Morelos</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(17,datain["totalr"][17])}>Nayarit</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(18,datain["totalr"][18])}>Nuevo León</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(19,datain["totalr"][19])}>Oaxaca</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(20,datain["totalr"][20])}>Puebla</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(21,datain["totalr"][21])}>Querétaro</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(22,datain["totalr"][22])}>Quintana Roo</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(23,datain["totalr"][23])}>San Luis Potosí</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(24,datain["totalr"][24])}>Sinaloa</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(25,datain["totalr"][25])}>Sonora</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(26,datain["totalr"][26])}>Tabasco</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(27,datain["totalr"][27])}>Tamaulipas</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(28,datain["totalr"][28])}>Tlaxcala</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(29,datain["totalr"][29])}>Veracruz</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(30,datain["totalr"][30])}>Yucatán</DropdownItem>
                        <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(31,datain["totalr"][31])}>Zacatecas</DropdownItem>                      
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>{this.state.label}</th>
                          <th className="text-right">Pos</th>
                          <th className="text-right">Neg</th>
                          <th className="text-right">Sosp</th>
                          <th className="text-right">Def</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{fontSize:"24px"}}>{this.state.dataview[0]}</td>
                          <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[1]}</td>
                          <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[2]}</td>
                          <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[3]}</td>
                          <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[4]}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
    
                <Card className="card-chart">
                <Row>
                  <Col>
                  <div style={{padding: "3%"}}>
                <CardHeader>
                  <CardTitle tag="h4">{this.state.graphtitle}&nbsp;
                  <ResizableIconButton size='larges' onClick={()=> this.graphtoogle()}>
                    <EqualizerIcon style={{ color:"#0345fc" }} />
                  </ResizableIconButton>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <div className="chart-area">
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                </div>
                </Col>
                </Row>
              </Card>
                
                </div>
              </Col>
            </Row>
  
            <Container fluid={true}>
            <div style={{padding: "0px"}}>
            <Card>
            <CardTitle tag="h4">&nbsp;&nbsp;Informacion</CardTitle>
            <CardBody style={{display:this.state.mapview}}>
            <div style={{padding: "5%"}}>
              <Alert color="info"
              isOpen={true}
              toggle={() => this.onDismiss(1)}
              myIcon={this.state.my_icon[0]}
              >
              <span style={{fontSize: "150%"}}>Correcto lavado de manos</span>
               </Alert>
               <div id="info1" style={{ position: "relative", overflow: "hidden" }} />
               <Card className="card-user" style={{display: this.state.visibles[0]}}>
      <div className="image">
        <img alt="..." src={this.state.imageb} />
      </div>
      <CardBody>
        <div className="author">
          <a href="#index">
            <img
              alt="..."
              className="avatar border-gray"
              src={this.state.image}
            />
            <h5 className="title">{this.state.name}</h5>
          </a>
    <p className="description" style={{color: "red"}} >{this.state.names}</p>
        </div>
        <p className="description text-center">
        {this.state.info}
        </p>
      </CardBody>
      <hr />
      <div className="button-container">
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.left()}
          size="lg"
        >
          <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={()=> window.open(this.state.moreinfo, "_blank")}
          size="lg"
        >
          <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.right()}
          size="lg"
        >
           <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
        </Button>
      </div>
    </Card>
               <Alert color="info"
              isOpen={true}
              toggle={() => this.onDismiss(2)}
              myIcon={this.state.my_icon[1]}
              >
              <span style={{fontSize: "150%"}}>Cubrebocas: Tipos y uso correcto</span>
               </Alert>
               <div id="info2" style={{ position: "relative", overflow: "hidden" }} />
               <Card className="card-user" style={{display: this.state.visibles[1]}}>
      <div className="image">
        <img alt="..." src={this.state.imageb} />
      </div>
      <CardBody>
        <div className="author">
          <a href="#index">
            <img
              alt="..."
              className="avatar border-gray"
              src={this.state.image}
            />
            <h5 className="title">{this.state.name}</h5>
          </a>
    <p className="description" style={{color: "red"}} >{this.state.names}</p>
        </div>
        <p className="description text-center">
        {this.state.info}
        </p>
      </CardBody>
      <hr />
      <div className="button-container">
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.left()}
          size="lg"
        >
          <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={()=> window.open(this.state.moreinfo, "_blank")}
          size="lg"
        >
          <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.right()}
          size="lg"
        >
           <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
        </Button>
      </div>
    </Card>
               <Alert color="info"
              isOpen={true}
              toggle={() => this.onDismiss(3)}
              myIcon={this.state.my_icon[2]}
              >
              <span style={{fontSize: "150%"}}>Fases y medidas preventivas durante pandemia</span>
               </Alert>
               <div id="info3" style={{ position: "relative", overflow: "hidden" }} />
               <Card className="card-user" style={{display: this.state.visibles[2]}}>
      <div className="image">
        <img alt="..." src={this.state.imageb} />
      </div>
      <CardBody>
        <div className="author">
          <a href="#index">
            <img
              alt="..."
              className="avatar border-gray"
              src={this.state.image}
            />
            <h5 className="title">{this.state.name}</h5>
          </a>
    <p className="description" style={{color: "red"}} >{this.state.names}</p>
        </div>
        <p className="description text-center">
        {this.state.info}
        </p>
      </CardBody>
      <hr />
      <div className="button-container">
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.left()}
          size="lg"
        >
          <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={()=> window.open(this.state.moreinfo, "_blank")}
          size="lg"
        >
          <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.right()}
          size="lg"
        >
           <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
        </Button>
      </div>
    </Card>
               <Alert color="info"
              isOpen={true}
              toggle={() => this.onDismiss(4)}
              myIcon={this.state.my_icon[3]}
              >
              <span style={{fontSize: "150%"}} >Sintomas</span>
               </Alert>
               <div id="info4" style={{ position: "relative", overflow: "hidden" }} />
               <Card className="card-user" style={{display: this.state.visibles[3]}}>
      <div className="image">
        <img alt="..." src={this.state.imageb} />
      </div>
      <CardBody>
        <div className="author">
          <a href="#index">
            <img
              alt="..."
              className="avatar border-gray"
              src={this.state.image}
            />
            <h5 className="title">{this.state.name}</h5>
          </a>
    <p className="description" style={{color: "red"}} >{this.state.names}</p>
        </div>
        <p className="description text-center">
        {this.state.info}
        </p>
      </CardBody>
      <hr />
      <div className="button-container">
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.left()}
          size="lg"
        >
          <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={()=> window.open(this.state.moreinfo, "_blank")}
          size="lg"
        >
          <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.right()}
          size="lg"
        >
           <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
        </Button>
      </div>
    </Card>  
               <Alert color="info"
              isOpen={true}
              toggle={() => this.onDismiss(5)}
              myIcon={this.state.my_icon[4]}
              >
              <span style={{fontSize: "150%"}} >¿Que hacer si sospechas que tienes COVID-19?</span>
               </Alert>
               <div id="info5" style={{ position: "relative", overflow: "hidden" }} />
               <Card className="card-user" style={{display: this.state.visibles[4]}}>
      <div className="image">
        <img alt="..." src={this.state.imageb} />
      </div>
      <CardBody>
        <div className="author">
          <a href="#index">
            <img
              alt="..."
              className="avatar border-gray"
              src={this.state.image}
            />
            <h5 className="title">{this.state.name}</h5>
          </a>
    <p className="description" style={{color: "red"}} >{this.state.names}</p>
        </div>
        <p className="description text-center">
        {this.state.info}
        </p>
      </CardBody>
      <hr />
      <div className="button-container">
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.left()}
          size="lg"
        >
          <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={()=> window.open(this.state.moreinfo, "_blank")}
          size="lg"
        >
          <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.right()}
          size="lg"
        >
           <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
        </Button>
      </div>
    </Card>  

               <Alert color="info"
              isOpen={true}
              toggle={() => this.onDismiss(6)}
              myIcon={this.state.my_icon[5]}
              >
              <span style={{fontSize: "150%"}} >Fuentes Oficiales</span>
               </Alert>
               <div id="info6" style={{ position: "relative", overflow: "hidden" }} />
               <Card className="card-user" style={{display: this.state.visibles[5]}}>
      <div className="image">
        <img alt="..." src={this.state.imageb} />
      </div>
      <CardBody>
        <div className="author">
          <a href="#index">
            <img
              alt="..."
              className="avatar border-gray"
              src={this.state.image}
            />
            <h5 className="title">{this.state.name}</h5>
          </a>
    <p className="description" style={{color: "red"}} >{this.state.names}</p>
        </div>
        <p className="description text-center">
        {this.state.info}
        </p>
      </CardBody>
      <hr />
      <div className="button-container">
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.left()}
          size="lg"
        >
          <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={()=> window.open(this.state.moreinfo, "_blank")}
          size="lg"
        >
          <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
        </Button>
        <Button
          className="btn-neutral btn-icon btn-round"
          color="default"
          onClick={() => this.right()}
          size="lg"
        >
           <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
        </Button>
      </div>
    </Card>  
  </div>
  </CardBody>
    </Card>
    </div>
    </Container>

    <Row md="2">
          <Col md="7">
            <div style={{padding: "2%"}}>
          <Card>
          <CardTitle tag="h4">&nbsp;&nbsp;&nbsp;Mapa de Positividad <br />&nbsp;&nbsp;&nbsp;Emocional por Estado</CardTitle>
          <CardBody style={{display:this.state.mapviewt}}>
          <div
                    id="map"
                    className="map"
                    style={{position: "relative", overflow: "hidden" }}
                  >
                <MapWrapper2
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=APIKEY"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
    </CardBody>
    </Card>
    </div>
    </Col> 
    
    <Col md="5">
    <div style={{padding: "3.5%"}}>
    <Card className="card-chart">
                <Row>
                  
                  <Col>
                  <div style={{padding: "3%"}}>
                <CardHeader>
                  <CardTitle style={{ color:"black", fontSize:"260%",textAlign:"center"}} tag="h4">{this.state.widgetname} <FontAwesomeIcon style={{color: "black",display:this.state.lockstate2}} icon={faLock} /> 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div style={{ textAlign:"center"}}>
                <FontAwesomeIcon size="3x" style={{ color:this.state.windgetcolor, fontSize:"2200%",textAlign:"center"}} icon={this.state.widget} />
                </div>
                </CardBody>
                </div>
                <h3 style={{ textAlign:"center"}}> {this.state.percentage+"%"} de Positividad Emocional</h3>
                <img style={{padding: "3%"}} src="https://covital-bucket.s3.us-south.cloud-object-storage.appdomain.cloud/medidor2.png" alt="Smiley face" />
                <CardFooter style={{ color:"black", fontSize:"170%",textAlign:"center"}}>
                Analisis psicologico de emociones por medio de 
                <a style={{ color:"#38A1F3"}} > Twitter </a> para conocer la salud mental de la poblacion durante la cuarentena de COVID-19
                </CardFooter>
                </Col>
                </Row>
              </Card>
              </div>
</Col> 
    </Row>

    <Container fluid={true}>
          <Card >
          <CardTitle tag="h4">Ultimas Noticias</CardTitle>
          <div style={{padding: "1%"}}>
          <Row md="3">
          <Col xs="auto">
          <div id="t1"> 
          </div>
          </Col>
          <Col xs="auto">
          <div id="t2">
          </div>  
          </Col>
          <Col xs="auto">
          <div id="t3">
          </div>   
          </Col>
        </Row>  
        </div>
        </Card>
      </Container>
      <Container fluid={true}>
          <Card >
          <CardTitle tag="h4">Noticias Falsas</CardTitle>
          <div style={{padding: "1%"}}>
          <Row md="3">
          <Col xs="auto">
          <div id="t4">
          </div>   
          </Col>
          <Col xs="auto">
          <div id="t5">
          </div>   
          </Col>
          <Col xs="auto">
          <div id="t6">
          </div>   
          </Col>
        </Row>  
        </div>
        </Card>
      </Container>
        
          </div>
        </>
      );
  }
  
  
  // Desktop Version
  //
  //
  //
  //
  //
  
  else{
    return (
      <>
        <PanelHeader
          size="md"
          content={
            <Row style={{position: "relative",left: "20px",bottom: "20px"}}>
              <Col xs="1">
            <img src="https://covital-bucket.s3.us-south.cloud-object-storage.appdomain.cloud/Logo/iconmod.png" alt="Smiley face" />
            </Col>
              <Col xs="5">
              <h1 style={{color:"#bc8d03"}}>Iniciativa Covital</h1> 
              <h3 style={{color:"white"}}>Plataforma de información y datos <br /> para México sobre COVID-19</h3>
            </Col>
            <Col style={{position: "relative",left: "70px",bottom: "0px"}} xs="3" sm={{offset: 1}}>
            <h3 style={{color:"white"}}>&nbsp;&nbsp;Contacto</h3>
            <ResizableIconButton size='largess' onClick={()=> window.open("https://twitter.com/ICovital", "_blank")}>
                <TwitterIcon style={{ color:"#1da1f2" }} />
            </ResizableIconButton>
            <ResizableIconButton size='largess' onClick={()=> window.open("https://twitter.com/fcovid20", "_blank")}>
            <img style={{width:"48px"}} src={twitterd} />
            </ResizableIconButton>
            <ResizableIconButton size='largess' onClick={()=> window.open("mailto:iniciativacovital@gmail.com?subject=Mi Asunto es: &body=Mi mensaje: ", "_blank")}>
                <MailOutlineIcon style={{ color:"#bc8d03" }} />
            </ResizableIconButton>
            <Link to="/english">
            <ResizableIconButton size='large'>
            <img style={{width:"48px"}} src={USA} />
          </ResizableIconButton>
          </Link>
            {/*
            <ResizableIconButton size='larges' onClick={()=> window.open("", "_blank")}>
            <RedditIcon style={{ color:"#ff4301" }} />
            </ResizableIconButton>
            */}
            
            </Col>
            
          </Row>
          }
        />
        <div className="content">
          <Row>
            <Col md="7">
            <div style={{padding: "2%"}}>
              <Card>
              <CardTitle tag="h4">&nbsp;&nbsp;Mapa de Confirmados</CardTitle>
                <CardBody style={{display:this.state.mapview}}>
                <div
                    id="map"
                    className="map"
                    style={{position: "relative", overflow: "hidden" }}
                  >
                <MapWrapper
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=APIKEY"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
                </CardBody>
              </Card>
              </div>
            </Col>
            <Col md="5">
            <div style={{padding: "3.5%"}}>
            <Card>
                <CardHeader>
                <Row md="3">
                <Col xs="auto">
                <CardTitle tag="h4">Datos <FontAwesomeIcon style={{color: "black",display:this.state.lockstate}} icon={faLock} /> 
                  </CardTitle>
                  </Col>
                  <Col xs="auto">
                  <Dropdown style={{display:this.state.mapview}} group isOpen={this.state.dropdownOpen} size="lg" toggle={()=>this.drop()}>
                      <DropdownToggle color="info" caret>
                        Lista de Estados:
                      </DropdownToggle>
                      <DropdownMenu 
                      modifiers={{
                        setMaxHeight: {
                          enabled: true,
                          order: 890,
                          fn: (data) => {
                            return {
                              ...data,
                              styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: '200px',
                              },
                            };
                          },
                        },
                      }}
                    >
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(32,datain["total"])}>Nacional</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(0,datain["totalr"][0])}>Aguascalientes</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(1,datain["totalr"][1])}>Baja California</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(2,datain["totalr"][2])}>Baja California Sur</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(3,datain["totalr"][3])}>Campeche</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(4,datain["totalr"][4])}>Coahuila</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(5,datain["totalr"][5])}>Colima</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(6,datain["totalr"][6])}>Chiapas</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(7,datain["totalr"][7])}>Chihuahua</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(8,datain["totalr"][8])}>CDMX</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(9,datain["totalr"][9])}>Durango</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(10,datain["totalr"][10])}>Guanajuato</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(11,datain["totalr"][11])}>Guerrero</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(12,datain["totalr"][12])}>Hidalgo</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(13,datain["totalr"][13])}>Jalisco</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(14,datain["totalr"][14])}>Mexico</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(15,datain["totalr"][15])}>Michoacán</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(16,datain["totalr"][16])}>Morelos</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(17,datain["totalr"][17])}>Nayarit</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(18,datain["totalr"][18])}>Nuevo León</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(19,datain["totalr"][19])}>Oaxaca</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(20,datain["totalr"][20])}>Puebla</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(21,datain["totalr"][21])}>Querétaro</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(22,datain["totalr"][22])}>Quintana Roo</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(23,datain["totalr"][23])}>San Luis Potosí</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(24,datain["totalr"][24])}>Sinaloa</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(25,datain["totalr"][25])}>Sonora</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(26,datain["totalr"][26])}>Tabasco</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(27,datain["totalr"][27])}>Tamaulipas</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(28,datain["totalr"][28])}>Tlaxcala</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(29,datain["totalr"][29])}>Veracruz</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(30,datain["totalr"][30])}>Yucatán</DropdownItem>
                      <DropdownItem style={{fontSize:"20px"}} onClick={() => this.handleClic(31,datain["totalr"][31])}>Zacatecas</DropdownItem>                      
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>{this.state.label}</th>
                        <th className="text-right">Pos</th>
                        <th className="text-right">Neg</th>
                        <th className="text-right">Sosp</th>
                        <th className="text-right">Def</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{fontSize:"24px"}}>{this.state.dataview[0]}</td>
                        <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[1]}</td>
                        <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[2]}</td>
                        <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[3]}</td>
                        <td style={{fontSize:"24px"}} className="text-right">{this.state.dataview[4]}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
  
              <Card className="card-chart">
                <Row>
                  <Col>
                  <div style={{padding: "3%"}}>
                <CardHeader>
                  <CardTitle tag="h4">{this.state.graphtitle} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ResizableIconButton size='larges' onClick={()=> this.graphtoogle()}>
                    <EqualizerIcon style={{ color:"#0345fc" }} />
                  </ResizableIconButton>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <div className="chart-area">
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                </div>
                </Col>
                </Row>
              </Card>
              
              </div>
            </Col>


          </Row>
         
          <Row md="1">
          <div style={{padding: "30px"}}>
          <Card>
          <CardTitle tag="h4">&nbsp;&nbsp;Informacion</CardTitle>
          <CardBody style={{display:this.state.mapview}}>
          <div style={{padding: "1%"}}>
          <Row md="2">
            <Col xs="auto"> 
            <Alert color="info"
            isOpen={true}
            toggle={() => this.onDismiss(1)}
            myIcon={this.state.my_icon[0]}
            >
            <span style={{fontSize: "150%"}}>Correcto lavado de manos</span>
             </Alert>
             <div id="info1" style={{ position: "relative", overflow: "hidden" }} />
             <Alert color="info"
            isOpen={true}
            toggle={() => this.onDismiss(2)}
            myIcon={this.state.my_icon[1]}
            >
            <span style={{fontSize: "150%"}}>Cubrebocas: Tipos y uso correcto</span>
             </Alert>
            
             <div id="info2" style={{ position: "relative", overflow: "hidden" }} />
             <Alert color="info"
            isOpen={true}
            toggle={() => this.onDismiss(3)}
            myIcon={this.state.my_icon[2]}
            >
            <span style={{fontSize: "150%"}}>Fases y medidas preventivas durante pandemia</span>
             </Alert>
            
             <div id="info3" style={{ position: "relative", overflow: "hidden" }} />
             <Alert color="info"
            isOpen={true}
            toggle={() => this.onDismiss(4)}
            myIcon={this.state.my_icon[3]}
            >
            <span style={{fontSize: "150%"}} >Sintomas</span>
             </Alert>
      
             <div id="info4" style={{ position: "relative", overflow: "hidden" }} />
             <Alert color="info"
            isOpen={true}
            toggle={() => this.onDismiss(5)}
            myIcon={this.state.my_icon[4]}
            >
            <span style={{fontSize: "150%"}} >¿Que hacer si sospechas que tienes COVID-19?</span>
             </Alert>
      
             <div id="info5" style={{ position: "relative", overflow: "hidden" }} />
             <Alert color="info"
            isOpen={true}
            toggle={() => this.onDismiss(6)}
            myIcon={this.state.my_icon[5]}
            >
            <span style={{fontSize: "150%"}} >Fuentes Oficiales</span>
             </Alert>
      
             <div id="info6" style={{ position: "relative", overflow: "hidden" }} />
</Col>
<Col xs="auto">
<Card className="card-user" style={{display: this.state.visibles[6]}}>
<img style={{ position: "relative",top: "15%"}} src="https://covital-bucket.s3.us-south.cloud-object-storage.appdomain.cloud/desklogo.png" alt="Smiley face" />
</Card>
<Card className="card-user" style={{display: this.state.visibles[0]}}>
    <div className="image">
      <img alt="..." src={this.state.imageb} />
    </div>
    <CardBody>
      <div className="author">
        <a href="#index">
          <img
            alt="..."
            className="avatar border-gray"
            src={this.state.image}
          />
          <h5 className="title">{this.state.name}</h5>
        </a>
  <p className="description" style={{color: "red"}} >{this.state.names}</p>
      </div>
      <p className="description text-center">
      {this.state.info}
      </p>
    </CardBody>
    <hr />
    <div className="button-container">
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.left()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={()=> window.open(this.state.moreinfo, "_blank")}
        size="lg"
      >
        <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.right()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
      </Button>
    </div>
  </Card>
  <Card className="card-user" style={{display: this.state.visibles[1]}}>
    <div className="image">
      <img alt="..." src={this.state.imageb} />
    </div>
    <CardBody>
      <div className="author">
        <a href="#index">
          <img
            alt="..."
            className="avatar border-gray"
            src={this.state.image}
          />
          <h5 className="title">{this.state.name}</h5>
        </a>
  <p className="description" style={{color: "red"}} >{this.state.names}</p>
      </div>
      <p className="description text-center">
      {this.state.info}
      </p>
    </CardBody>
    <hr />
    <div className="button-container">
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.left()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={()=> window.open(this.state.moreinfo, "_blank")}
        size="lg"
      >
        <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.right()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
      </Button>
    </div>
  </Card>
  <Card className="card-user" style={{display: this.state.visibles[2]}}>
    <div className="image">
      <img alt="..." src={this.state.imageb} />
    </div>
    <CardBody>
      <div className="author">
        <a href="#index">
          <img
            alt="..."
            className="avatar border-gray"
            src={this.state.image}
          />
          <h5 className="title">{this.state.name}</h5>
        </a>
  <p className="description" style={{color: "red"}} >{this.state.names}</p>
      </div>
      <p className="description text-center">
      {this.state.info}
      </p>
    </CardBody>
    <hr />
    <div className="button-container">
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.left()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={()=> window.open(this.state.moreinfo, "_blank")}
        size="lg"
      >
        <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.right()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
      </Button>
    </div>
  </Card>
  <Card className="card-user" style={{display: this.state.visibles[3]}}>
    <div className="image">
      <img alt="..." src={this.state.imageb} />
    </div>
    <CardBody>
      <div className="author">
        <a href="#index">
          <img
            alt="..."
            className="avatar border-gray"
            src={this.state.image}
          />
          <h5 className="title">{this.state.name}</h5>
        </a>
  <p className="description" style={{color: "red"}} >{this.state.names}</p>
      </div>
      <p className="description text-center">
      {this.state.info}
      </p>
    </CardBody>
    <hr />
    <div className="button-container">
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.left()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={()=> window.open(this.state.moreinfo, "_blank")}
        size="lg"
      >
       <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.right()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
      </Button>
    </div>
  </Card>  
  <Card className="card-user" style={{display: this.state.visibles[4]}}>
    <div className="image">
      <img alt="..." src={this.state.imageb} />
    </div>
    <CardBody>
      <div className="author">
        <a href="#index">
          <img
            alt="..."
            className="avatar border-gray"
            src={this.state.image}
          />
          <h5 className="title">{this.state.name}</h5>
        </a>
  <p className="description" style={{color: "red"}} >{this.state.names}</p>
      </div>
      <p className="description text-center">
      {this.state.info}
      </p>
    </CardBody>
    <hr />
    <div className="button-container">
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.left()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={()=> window.open(this.state.moreinfo, "_blank")}
        size="lg"
      >
        <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.right()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
      </Button>
    </div>
  </Card>  
  <Card className="card-user" style={{display: this.state.visibles[5]}}>
    <div className="image">
      <img alt="..." src={this.state.imageb} />
    </div>
    <CardBody>
      <div className="author">
        <a href="#index">
          <img
            alt="..."
            className="avatar border-gray"
            src={this.state.image}
          />
          <h5 className="title">{this.state.name}</h5>
        </a>
  <p className="description" style={{color: "red"}} >{this.state.names}</p>
      </div>
      <p className="description text-center">
      {this.state.info}
      </p>
    </CardBody>
    <hr />
    <div className="button-container">
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.left()}
        size="lg"
      >
         <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronLeft} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={()=> window.open(this.state.moreinfo, "_blank")}
        size="lg"
      >
         <FontAwesomeIcon size="2x" style={{color: "black"}} icon={faQuestion} />
      </Button>
      <Button
        className="btn-neutral btn-icon btn-round"
        color="default"
        onClick={() => this.right()}
        size="lg"
      >
        <FontAwesomeIcon size="3x" style={{color: "black"}} icon={faChevronRight} />
      </Button>
    </div>
  </Card>  
</Col>
</Row>
</div>
</CardBody>
  </Card>
  </div>
  </Row>

  <Row md="2">
          <Col md="7">
            <div style={{padding: "2%"}}>
          <Card>
          <CardTitle tag="h4" >&nbsp;&nbsp;Mapa de Positividad Emocional por Estado</CardTitle>
          <CardBody style={{display:this.state.mapviewt}}>
          <div
                    id="map"
                    className="map"
                    style={{position: "relative", overflow: "hidden" }}
                  >
                <MapWrapper2
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=APIKEY"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
    </CardBody>
    </Card>
    </div>
    </Col> 
    
    <Col md="5">
    <div style={{padding: "3.5%"}}>
    <Card className="card-chart">
                <Row>
                  <Col>
                  <div style={{padding: "3%"}}>
                <CardHeader>
                  <CardTitle style={{ color:"black", fontSize:"260%",textAlign:"center"}} tag="h5">{this.state.widgetname} <FontAwesomeIcon style={{color: "black",display:this.state.lockstate2}} icon={faLock} /> 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div style={{ textAlign:"center"}}>
                <FontAwesomeIcon size="3x" style={{ color:this.state.windgetcolor, fontSize:"2000%",textAlign:"center"}} icon={this.state.widget} />
              
                </div>
                    <h5 style={{ textAlign:"center"}}> <p /> {this.state.percentage+"%"} de Positividad Emocional</h5>
                </CardBody>
                </div>
                <CardFooter style={{ color:"black", fontSize:"170%",textAlign:"center"}}>
                Analisis psicologico de emociones por medio de 
                <a style={{ color:"#38A1F3"}} > Twitter </a> para conocer la salud mental de la poblacion durante la cuarentena de COVID-19
                </CardFooter>
                </Col>
                </Row>
              </Card>
              </div>
</Col> 
    </Row>
          <Container fluid={true}>
          <Card >
          <CardTitle tag="h4">&nbsp;&nbsp;&nbsp;&nbsp;Ultimas Noticias</CardTitle>
          <div style={{padding: "1%"}}>
          <Row md="3">
          <Col xs="auto">
          <div id="t1"> 
          </div>
          </Col>
          <Col xs="auto">
          <div id="t2">
          </div>  
          </Col>
          <Col xs="auto">
          <div id="t3">
          </div>   
          </Col>
        </Row>  
        </div>
        </Card>
      </Container>
      <Container fluid={true}>
          <Card >
          <CardTitle tag="h4">&nbsp;&nbsp;&nbsp;&nbsp;Noticias Falsas</CardTitle>
          <div style={{padding: "1%"}}>
          <Row md="3">
          <Col xs="auto">
          <div id="t4">
          </div>   
          </Col>
          <Col xs="auto">
          <div id="t5">
          </div>   
          </Col>
          <Col xs="auto">
          <div id="t6">
          </div>   
          </Col>
        </Row>  
        </div>
        </Card>
      </Container>
        
        </div>
      </>
    );

  }


  }
}

export default Home;
