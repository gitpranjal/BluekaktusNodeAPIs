const fs = require('fs');

var ObjectFromAPI = {
      
      viewObjects: [
        {
          type: "dropdown",
          componentPerRow: 1,
          fieldNames: ["gst"]
        },
        {
          type: "textField",
          componentPerRow: 3,
          fieldNames: ["firstName", "lastName", "email", "phone", "pan", "dlNo", "brand"]
        },
        {
          type: "dropdown",
          componentPerRow: 2,
          fieldNames: ["jailNo", "adhaar"]
        },
        {
          type: "textField",
          componentPerRow: 2,
          fieldNames: ["style", "color"]
        },
        {
          type: "textField",
          componentPerRow: 2,
          fieldNames: ["enemyFName", "enemyLName"]
        },
        {
          type: "textField",
          componentPerRow: 1,
          fieldNames: ["enemyAddress", "Address"]
        }
        
      ],

      
      textFileds: ["firstname", "lastName", "email", "phone",
                  "pan", "dlNo", "brand", "style", "color", 
                  "enemyFName", "enemyLName", "enemyAddress", "Address"],
      dropDowns: [
        {"name": "gst",
        "valueListFunction": "getGstList"
         },
         {
           "name": "jailNo",
           "valueListFunction": "getJailList"
         },
         {
           "name": "adhaar",
           "valueListFunction": "getAdhaarList"
         }
      ],
      functions: `{"frameSentence": (FieldsObject) => {
        var sentence = ""
        for(var key of Object.keys(FieldsObject))
        {
          sentence = sentence+key.toString()+":"+FieldsObject[key].toString()+"\\n"
        }
        return sentence
      },

      "getGstList": () => {
        return [{"id":"1", "name": "abc1"}, {"id": "2", "name": "pqr2"}]
      },
      
      "getJailList": () => {
        return [{"id":"1", "name": "lmn1"}, {"id": "2", "name": "opq2"}]
      },

      "getAdhaarList": () => {
        return [{"id":"1", "name": "uvw1"}, {"id": "2", "name": "xyz2"}]
      }
    
    }`
}



var mainCode = `
<View id="mainSection" style={{borderWidth: 2, borderColor: "red", alignItems: "center", paddingVertical: 5, paddingHorizontal:5}}>
`
var ViewNumber = 1
for(var ViewObject of ObjectFromAPI.viewObjects)
{ 
  
  
  var newViewCode = 
  `
   <View id="view${ViewNumber}" style={{marginVertical: 2, borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center"}}>
  `
  
    var componentsLeft = ViewObject.fieldNames.length
    var componentNumber = 0
    var widthPerCompenent = (100/(ViewObject.componentPerRow)-1).toString()+"%"
    while(componentsLeft != 0)
    {

      var newRowCode = `
      <View style={{flexDirection: "row"}}>
      `

      for (var j = 0; j <ViewObject.componentPerRow; j++)
      {
        if(componentsLeft == 0)
          break
        
          var fieldName = ViewObject.fieldNames[componentNumber]
          var newComponentCode  = ``
          if(ViewObject.type == "dropdown")
          {
            newComponentCode = `
  
            <SearchableDropdown
               //On text change listner on the searchable input
                 onTextChange={(text) => console.log(text)}
                 onItemSelect={selectedObject => { 
                   var newDropdownList = {...DropdownList}
                   newDropdownList.${fieldName}["SelectedValue"] = selectedObject
                   console.log("#### New dropdown list ######")
                   console.log(newDropdownList)
                   SetDropdownList(newDropdownList)
                   
                 }}
                 selectedItems={DropdownList.${fieldName}["SelectedValue"]}
                 //onItemSelect called after the selection from the dropdown
                 containerStyle={{ padding: 8 ,width: "${widthPerCompenent}" ,
                 borderWidth:3,
                 borderRadius:10,
                 borderColor:"black",
                 marginHorizontal: 5,
                 marginVertical:5,
                 }}
                 //suggestion container style
                 textInputStyle={{
                   //inserted text style
                   paddingLeft:10,
                   fontSize: 20,
                   fontWeight: "bold",
                   color:"blue"
          
                 }}
                 itemStyle={{
                   //single dropdown item style
                   padding: 3,
                   marginLeft:5,
                   width:Dimensions.get("window").width / 1.25 ,
                   marginTop: 2,
                   borderBottomColor:"#00334e80",
                   borderBottomWidth: 1,
                 }}
                 itemTextStyle={{
                   //text style of a single dropdown item
                   fontSize: 18,
                   fontWeight: "bold",
                   color:"blue",
                 }}
                 itemsContainerStyle={{
                   //items container style you can pass maxHeight
                   //to restrict the items dropdown hieght
                   maxHeight: '100%',
                 }}
                 items={screenFunctions[DropdownList.${fieldName}["ValuesListFunction"]]()}
                 //mapping of item array
                 //default selected item index
                 placeholder={"Select ${fieldName}"}
                 placeholderTextColor="#00334e80"
                 //place holder for the search input
                 resetValue={false}
                 //reset textInput Value with true and false state
                 underlineColorAndroid="transparent"
                 //To remove the underline from the android input
             />
            
            `
          }
          
          if(ViewObject.type == "textField")
          {
            newComponentCode = `
            <TextInput
             // style= {{marginLeft: 4, color: "blue"}}
             style={{...styles.input, width: "${widthPerCompenent}"}}
             placeholder={"${fieldName}"}
             placeholderTextColor={"grey"}
             maxLength={50}
             // onBlur={Keyboard.dismiss}
             value={FieldList.item}
             onChangeText = {(newValue) => {
                 var newFieldsObject = {...FieldList}
                 newFieldsObject["${fieldName}"] = newValue
                 SetFieldList(newFieldsObject)
             }}
         /> 
            `
          }

          newRowCode = `
          ${newRowCode}
          ${newComponentCode}
          `

          componentNumber += 1
          componentsLeft -=1
        
      }

      newRowCode = `
      ${newRowCode}
      </View>
      `
      newViewCode = `
      ${newViewCode}
      ${newRowCode}
      `
    }
    
  newViewCode = `
  ${newViewCode}
  </View>
  `
  mainCode = `
  ${mainCode}
  ${newViewCode}
  `
  ViewNumber += 1
}

mainCode= `
${mainCode}
</View>
`


var fieldObjectList = {}
var dropDownList = {}


for(var key of ObjectFromAPI.textFileds)
  fieldObjectList[key] = ""


for(var dropDownObject of ObjectFromAPI.dropDowns)
{
  dropDownList[dropDownObject.name] = {"SelectedValue": "", "ValuesListFunction": dropDownObject.valueListFunction}
}



let lyrics = 
`
import React, { useState } from "react";
import {StyleSheet,Text,TextInput,View, TouchableOpacity, FlatList} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown'
import { Dimensions } from 'react-native';

const screenFunctions = ${ObjectFromAPI.functions}
const GeneratedCode = () => {
  const [Sentence, SetSentence] = useState("")
  const [FieldList, SetFieldList] = useState(${JSON.stringify(fieldObjectList)})
  const [DropdownList, SetDropdownList] = useState(${JSON.stringify(dropDownList)})

  return (
    <View style={{marginHorizontal:10, alignItems: "center"}}>
       ${mainCode}

        <TouchableOpacity
        style={{ ...styles.openButton, marginHorizontal: 10, width: "20%", marginVertical: 10}}
        onPress={() => {
            var newSentence = screenFunctions.frameSentence(FieldList)
            SetSentence(newSentence)
        }}
        >
        <Text style={styles.textStyle}>Done</Text>

        </TouchableOpacity>

        <Text style={{color: "grey", fontSize: 20, fontWeight: "bold", marginVertical: 10}}>{Sentence}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        paddingHorizontal: 20,
        borderColor: "black",
        padding: 3,
        marginVertical: 5,
        marginHorizontal: 5,
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 10,
        width: "100%"
       
       
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      openButton: {
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 10,
        elevation: 10,

      }
});

export default GeneratedCode;

`;

// write to a new file named 2pac.txt
fs.writeFile('/Users/geuser/Desktop/BluekaktusReactNativeScreens/src/screens/GeneratedCode.js', lyrics, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Code saved!');
});