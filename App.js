import React from 'react';
import { View, Text, FlatList, StyleSheet,Image, ImageBackground, RefreshControl } from 'react-native';

export default class App extends React.Component {
        state={
          firstSetData: [
              {id:'1',name:'Sam Curran',des:'When the image is resized, the corners of the size specified by capInsets will stay a fixed size.',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago' },
              {id:'2',name:'James Anderson',des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin lacus sit amet rutrum placerat.' ,imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'3',name:'Sam Bilings',des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin lacus sit amet rutrum placerat.', imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'4',name:'Sia',des:'Vivamus sollicitudin lacus sit amet rutrum placerat.Vivamus sollicitudin lacus sit amet rutrum placerat.', imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'5',name:'Taylor',des:'Nam sit amet elit vel odio porttitor posuere at dapibus diam. Duis vitae enim id ipsum laoreet porttitor a sit amet nunc.',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'6',name:'Alan Walker',des:'Donec sed viverra nisi. Vestibulum congue, odio id porttitor congue, orci lectus',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'} 
            ],
            secondSetData:[
              {id:'7',name:'Martin',des:'Vestibulum congue, odio id porttitor congue, orci lectus. Donec sed viverra nisi.',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'8',name:'Natarajan',des:'When the image is resized, the corners of the size specified by capInsets will stay a fixed size.',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago' },
              {id:'9',name:'Gill',des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin lacus sit amet rutrum placerat.' ,imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'10',name:'Harry Kane',des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin lacus sit amet rutrum placerat.', imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'11',name:'Mia',des:'Vivamus sollicitudin lacus sit amet rutrum placerat.Vivamus sollicitudin lacus sit amet rutrum placerat.', imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'12',name:'Annie',des:'Nam sit amet elit vel odio porttitor posuere at dapibus diam. Duis vitae enim id ipsum laoreet porttitor a sit amet nunc.',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'13',name:'Moon Pie',des:'Donec sed viverra nisi. Vestibulum congue, odio id porttitor congue, orci lectus',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'14',name:'Hello World',des:'Donec sed viverra nisi. Vestibulum congue, odio id porttitor congue, orci lectus',imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'15',name:'Son',des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin lacus sit amet rutrum placerat.', imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'},
              {id:'16',name:'Newzland',des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin lacus sit amet rutrum placerat.', imageUri:'https://reactnative.dev/img/tiny_logo.png',hours:'2 hours ago'}
            ],
            isRefreshing:false,
            arr:[]
            
        }
  renderRow = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageHolder}>
            <Image source={{uri:item.imageUri}} style={styles.imageContainer}/>   
        </View>
        <View style={styles.textContainer}>
    <Text style={styles.title}>{item.name} ID:{item.id}</Text>
            <Text style={styles.des}>{item.des}</Text>
            <Text style={styles.hour}>{item.hours}</Text>
        </View>
      </View>
    )
  }

  //Considering the inital load as 6 for a page and at reaching the end another 5 will be loaded.
  endReached=()=>{         
    console.log(this.state.firstSetData.length)                                                  
    if(this.state.firstSetData.length<this.state.secondSetData.length+5){
      this.setState({
          firstSetData:this.state.firstSetData.concat(this.state.secondSetData.slice(this.state.firstSetData.length-6,this.state.firstSetData.length-1))
        })
      } 
  }
  refresh=()=>{
    this.setState({isRefreshing:true})
  }

  render() {
    return (
      <View >
        <FlatList
          data={this.state.firstSetData}
          renderItem={this.renderRow}
          keyExtractor={item=>item.id}
          extraData={this.state.secondSetData}
          onEndReached={this.endReached}
          onEndReachedThreshold={0}
          refreshControl={
            <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.refresh}/>
          }
        />
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  imageHolder:{
    padding:10,
    alignItems:'center',
   // backgroundColor:'pink',
    borderBottomWidth:.5,
    borderBottomColor:'grey',
   // justifyContent:'center',
  },
  imageContainer:{
    width:50, 
    height:50,
    padding:10,
    borderRadius:50,
    marginTop:10,
  },
  textContainer:{
    paddingLeft:10,
    paddingRight:100,
    borderBottomColor:'grey',
    borderBottomWidth:.5,
    //backgroundColor:'pink',
    flexDirection:'column',
    
  },
  title:{ 
    paddingTop:10,
    color:'#00b0ff',
    fontSize:17,
    justifyContent:'flex-start',
    
  },
  des:{
    paddingBottom:5,
    justifyContent:'space-evenly',
    fontSize:15 ,
  },
  hour:{
    paddingBottom:15,
    color:'grey',
  },
});