const fs = require('fs');

var ObjectFromAPI = {
      headerSections: ["name", "email"],
      detailSections: ["gst"],
      textFileds: ["name", "email", "phone", "adhaar", "pan", "dlNo"],
      dropDowns: [
        {"name": "gst",
        "valueListFunction": "getGstList"
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
      }
      
    
    }`
}

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
    <View style={{marginHorizontal: 10}}>
     <FlatList 
         id="textFields"
         data={Object.keys(FieldList)}
         keyExtractor={(fieldName) => fieldName.toString()}
         renderItem={({item}) => {
         return (
        

             <TextInput
             // style= {{marginLeft: 4, color: "blue"}}
             style={styles.input}
              placeholder={item.toLowerCase()}
             placeholderTextColor={"grey"}
             maxLength={50}
             // onBlur={Keyboard.dismiss}
             value={FieldList.item}
             onChangeText = {(newValue) => {
                 var newFieldsObject = {...FieldList}
                 newFieldsObject[item] = newValue
                 SetFieldList(newFieldsObject)
             }}
         />
         )
         }}
     /> 
    
     <SearchableDropdown
     //On text change listner on the searchable input
       key={"gst"}
       onTextChange={(text) => console.log(text)}
       onItemSelect={selectedObject => { 
         var newDropdownList = {...DropdownList}
         newDropdownList["gst"]["SelectedValue"] = selectedObject
         console.log("#### New dropdown list ######")
         console.log(newDropdownList)
         SetDropdownList(newDropdownList)
         
       }}
       selectedItems={DropdownList["gst"]["SelectedValue"]}
       //onItemSelect called after the selection from the dropdown
       containerStyle={{ padding: 8 ,width:Dimensions.get("window").width / 1.1 ,
       borderWidth:3,
       borderRadius:10,
       borderColor:"black",
       marginTop: 10,
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
       items={screenFunctions[DropdownList["gst"]["ValuesListFunction"]]()}
       //mapping of item array
       //default selected item index
       placeholder={"Select "+"gst"}
       placeholderTextColor="#00334e80"
       //place holder for the search input
       resetValue={false}
       //reset textInput Value with true and false state
       underlineColorAndroid="transparent"
       //To remove the underline from the android input
   />

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
        marginTop: 12,
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