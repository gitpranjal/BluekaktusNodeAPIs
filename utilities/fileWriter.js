const fs = require('fs');


var objectFromAPI = {                                        //Object from Divyang
  "viewObjects": [
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "AQL Level"
              }
          ],
          "groups": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "Factory Representative"
              }
          ],
          "groups": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 2,
          "fields": [
              {
                  "name": "Packed Qty"
              },
              {
                  "name": "Sample Size"
              }
          ],
          "groups": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 2,
          "fields": [
              {
                  "name": "Carton Sample Size"
              },
              {
                  "name": "Carton Selected"
              }
          ],
          "groups": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "Remarks"
              }
          ],
          "groups": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "Result"
              }
          ],
          "groups": []
      }
  ]
}

var ObjectFromAPI = {
      
      viewObjects: [
       
        {
          type: "dropdown",
          componentPerRow: 1,
          fields: [
            {"name": "AqlIndex",
            "valueListFunction": "getAqlList"
             },
             {"name": "Factory",
            "valueListFunction": "getFactoryList"
             },
          ]
        },
        {
          type: "textInputField",
          componentPerRow: 1,
          fields: [
            {"name": "brand"}, 

            {"name": "orderNo"}
          ]
        },
        {
          type: "textField",
          componentPerRow: 2,
          textHeading: "",
          fields: [
            {"name": "date", "type":"fromApi" , "value": "21-01-2021"},
            {"name": "brand", "type":"fromScreen"}
          ]
        },

        {
          type: "textInputField",
          componentPerRow: 2,
          fields: [
            {"name": "orderQuantity"}, 
            {"name": "offeredQuantity"},
            {"name": "excessQuantity"},
          ]
        },
        {
          type: "textInputField",
          componentPerRow: 1,
          fields: [
            {"name": "factoryRepresentative"}
          ]
        },
        {
          type: "radioButton",
          name: "Inspection Type",
          componentPerRow: 1,
          fields: [
            {"name": "Part Inspection"},
            {"name": "Normal Inspection"}, 
            {"name": "Sub Inspection"}
          ]
        },

        {
          type: "textInputField",
          componentPerRow: 2,
          fields: [
            {"name": "packedQty"}, 
            {"name": "sampleSize"}, 
            {"name": "cartonSampleSize"}, 
            {"name": "CartonSelected"}, 
            {"name": "TotalCartons"}]
        },
        {
          type: "hybrid",
          name: "Main Defect",
          groups: [
            {
              type: "dropdown",
              componentPerRow: 1,
              fields: [
                {"name": "MainDefect",
                "valueListFunction": "getMaindefectsList"
                 },
              ]
            },
            {
              type: "textInputField",
              componentPerRow: 3,
              fields: [
                {"name": "mainCritical"}, 
                {"name": "mainMajor"}, 
                {"name": "mainMinor"}, 
                {"name": "mean",},
                {"name": "median",}
                ]
            },
            
            {
              type: "button",
              componentPerRow: 1,
              fields: [
                {"name": "Add", "onClick": "addMainDefect"}, 
                ]
            },
          ]
          
        },
        {
          type: "hybrid",
          name: "Miss Defect",
          // positioning group component based on flex 
          groups: [
            {
              type: "textInputField",
              componentPerRow: 1,
              fields: [
                {"name": "MiscellaneousDefect"}
              ]
            },
            {
              type: "textInputField",
              componentPerRow: 3,
              fields: [
                {"name": "missCritical", "width": 100, "align": "left", "title": "Critical", "editable":true}, 
                {"name": "missMajor"}, 
                {"name": "missMinor"}, 
                ]
            },
            {
              type: "button",
              componentPerRow: 1,
              fields: [
                {"name": "Add", "onClick": "executeSomeFunction"}, 
                ]
            },
          ]
          
        },
        
        {
          type: "radioButton",
          name: "Result",
          componentPerRow: 1,
          fields: [
            {"name": "Passed"},
            {"name": "Failed"},]
        },
        {
          type: "button",
          componentPerRow: 1,
          fields: [
            {"name": "Done", "onClick": "frameSentence", "args": ["FieldList", "DropdownList", "RadioButtonList"]},
            ]
        },
      ],

      functions: `{"frameSentence": (FieldsObjectList) => {
        var sentence = ""
        for (var FieldsObject of FieldsObjectList)
        {
          for(var key of Object.keys(FieldsObject))
          {
            sentence = sentence+key.toString()+":"+FieldsObject[key].toString()+"\\n"
          }
        }
        
        return sentence
      },

      "getAqlList": () => {

        return [{"id":"1", "name": "1"}, {"id": "2", "name": "2"}, {"id": "3", "name": "2.5"}, {"id":4, "name":"4"}]
      },
      "getMaindefectsList": () => {

        return [{"id":"1", "name": "Defect1"}, {"id": "2", "name": "Defect2"}, {"id": "3", "name": "Defect3"}, {"id":4, "name":"Defect4"}]
      },
      "getFactoryList": () => {
        return [{"id":"1", "name": "Factory1"}, {"id": "2", "name": "Factory2"}]
      },

      "getAdhaarList": () => {
        return [{"id":"1", "name": "uvw1"}, {"id": "2", "name": "xyz2"}]
      },

      "addMainDefect": () => {

      },
      
    
    }`,

}





var mainCode = `
<View id="mainSection" style={{borderWidth: 2, borderColor: "red", alignItems: "center", paddingVertical: 5, paddingHorizontal:5, marginHorizontal: 5}}>
`
var ViewNumber = 1
for(var ViewObject of ObjectFromAPI.viewObjects)
{ 
  
  
  var newViewCode = 
  `
   <View id="view${ViewNumber}" style={{marginVertical: 10, borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center"}}>
  `
  if(ViewObject.type == "hybrid")
  {
    var SubViewNumber = 1
    
    var newTableCode = `
    <View id ="${ViewObject.name} table" style={{marginVertical: 10, width: "100%", }}>
    <ScrollView horizontal id="${ViewObject.name} table" contentContainerStyle={{flexDirection: "column"}}>
    
      <View style={{flexDirection: "row", paddingVertical: 5, backgroundColor: "blue",  borderRadius: 5, justifyContent: "flex-start", alignItems: "center",}}>
        <FlatList
          id="Headings"
          data={(() => {
            var sampleObjectWithIdNegative1 = {}
            for(var obj of HybridDataObjects["${ViewObject.name}"])
            {
              if(obj["id"] == "-1")
                sampleObjectWithIdNegative1 = obj
            }
            return Object.keys(sampleObjectWithIdNegative1).filter((columnName) => columnName != "id")
          })() }
          keyExtractor={(columnName) => columnName}
          contentContainerStyle = {{flexDirection: "row"}}
          renderItem = {({item}) => {
            return <Text numberOfLines={10} style={{color: "white", width: 120, textAlign: 'center', fontWeight: "bold", fontSize: 12, }}>{item}</Text>
          }}
        />
      </View>
      <FlatList
        id="Table content"
        data={HybridDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id != "-1")}
        keyExtractor={(dataObject) => dataObject.id.toString()}
        contentContainerStyle = {{borderColor: "black",}}
        renderItem = {({item}) => {
          var currentRowArray = []
          var i = 0
          for(var key of Object.keys(item))
          {
            currentRowArray.push({"id": i.toString(), value: item[key], type: key})
            i += 1
          }
          return (
            
            <FlatList 
              id="rowContent"
              data={currentRowArray}
              keyExtractor={(currentElementObject) => currentElementObject.id.toString()}
              style={{paddingVertical: 5, flexDirection: "row", borderWidth: 2, borderColor: "red", borderRadius: 5, justifyContent: "flex-start",  alignItem: "center", alignItems: "center"}}
              renderItem = {({item}) => {
                if(item.type == "id")
                  return (
                    <View style={{flexDirection: "row",}}>
                      <TouchableOpacity
                          id="rowDeletion"
                          style={{backgroundColor: "red", width: 20, alignItems: "center", borderRadius: 5, justifyContent: "center", marginHorizontal: 10}}
                          onPress={() => {
                              console.log("deletion will take place")
                              var newHybridDataObjects = {...HybridDataObjects}
                              newHybridDataObjects["${ViewObject.name}"] = newHybridDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id != item.value )
                              SetHybridDataObjects(newHybridDataObjects)
                          }}
                  
                      >
                          <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>X</Text>
                      </TouchableOpacity> 
                      
                      {(() => {
                        if(currentRowArray.length > 10)
                          return (
                            <TouchableOpacity
                            id="ViewingDetail"
                            style={{borderColor: "grey", borderWidth: 2, borderRadius: 5, paddingHorizontal: 5, paddingVertical: 5}}
                            onPress={() => {
                                console.log("for viewing details")
                               
                            }}
                    
                        >
                            <Text style={{color: "grey", fontSize: 12, fontWeight: "bold"}}>Detail</Text>
                          </TouchableOpacity>   
                          )
                      })()}
                     
                    </View>  
                  )

                return <Text numberOfLines={10} style={{textAlign: 'center', width: 120, color: "grey", fontWeight: "bold", fontSize: 10,}}>{item.value}</Text>
              }}
              
            />
           
          )
        }}
      />
    
    </ScrollView>
    </View>
    `

    var newSubViewCode = 
    `
     <View id="subview${SubViewNumber}" style={{marginVertical: 10, borderWidth: 2, borderColor: "green", justifyContent: "center", alignItems: "center"}}>
    `

    for(var subViewObject of ViewObject.groups)
    {
      var componentsLeft = subViewObject.fields.length
      var componentNumber = 0
      var widthPerCompenent = (100/(subViewObject.componentPerRow)-1).toString()+"%"

      while(componentsLeft != 0)
    {

      var newRowCode = `
      <View style={{flexDirection: "row"}}>
      `

      for (var j = 0; j <subViewObject.componentPerRow; j++)
      {
        if(componentsLeft == 0)
          break
        
          var fieldName = subViewObject.fields[componentNumber].name
          var newComponentCode  = ``
          if(subViewObject.type == "textField")
          {
            var currentTextFieldObject = subViewObject.fields[componentNumber]
            if(currentTextFieldObject.type == "fromApi")
              newComponentCode = `
                <Text
                style={{...styles.input, width: "${widthPerCompenent}"}}
                >
                ${currentTextFieldObject.name} : ${currentTextFieldObject.value}
                </Text> 
                    `
            else
              newComponentCode = `
              <Text
              style={{...styles.input, width: "${widthPerCompenent}"}}
              >
              ${currentTextFieldObject.name} : {FieldList["${currentTextFieldObject.name}"]}
              </Text> 
                  `

          }
          if(subViewObject.type == "dropdown")
          {
            newComponentCode = `
  
            <SearchableDropdown
               //On text change listner on the searchable input
                 onTextChange={(text) => console.log(text)}
                 onItemSelect={selectedObject => { 
                   var newDropdownList = {...DropdownList}
                   newDropdownList.${subViewObject.fields[componentNumber].name}["SelectedValue"] = selectedObject
                   console.log("#### New dropdown list ######")
                   console.log(newDropdownList)
                   SetDropdownList(newDropdownList)
                   
                 }}
                 selectedItems={DropdownList.${subViewObject.fields[componentNumber].name}["SelectedValue"]}
                 //onItemSelect called after the selection from the dropdown
                 containerStyle={{ padding: 8 ,width: "${widthPerCompenent}" ,
                 borderWidth:2,
                 borderRadius:10,
                 borderColor:"black",
                 marginHorizontal: 5,
                 marginVertical:5,
                 }}
                 //suggestion container style
                 textInputStyle={{
                   //inserted text style
                   paddingLeft:10,
                   fontSize: 15,
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
                   fontSize: 15,
                   fontWeight: "bold",
                   color:"blue",
                 }}
                 itemsContainerStyle={{
                   //items container style you can pass maxHeight
                   //to restrict the items dropdown hieght
                   maxHeight: '100%',
                 }}
                 items={screenFunctions[DropdownList.${subViewObject.fields[componentNumber].name}["ValuesListFunction"]]()}
                 //mapping of item array
                 //default selected item index
                 placeholder={"Select ${subViewObject.fields[componentNumber].name}"}
                 placeholderTextColor="#00334e80"
                 //place holder for the search input
                 resetValue={false}
                 //reset textInput Value with true and false state
                 underlineColorAndroid="transparent"
                 //To remove the underline from the android input
             />
            
            `
          }
          
          if(subViewObject.type == "textInputField")
          {
            newComponentCode = `
            <TextInput
             // style= {{marginLeft: 4, color: "blue"}}
             style={{...styles.input, width: "${widthPerCompenent}"}}
             placeholder={"${subViewObject.fields[componentNumber].name}"}
             placeholderTextColor={"grey"}
             maxLength={50}
             // onBlur={Keyboard.dismiss}
             value={FieldList["${subViewObject.fields[componentNumber].name}"]}
             onChangeText = {(newValue) => {
                 var newFieldsObject = {...FieldList}
                 newFieldsObject["${subViewObject.fields[componentNumber].name}"] = newValue
                 SetFieldList(newFieldsObject)
             }}
         /> 
            `
          }


          if(subViewObject.type == "button")
          {
            newComponentCode = `
            <View style={{borderColor: "green", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
              <TouchableOpacity
                style={{ ...styles.openButton, marginHorizontal: 10, width: "20%", marginVertical: 10, alignSelf: "center"}}
                onPress={() => {
                    
                    var fieldNames = [] 
                    for(var obj of HybridDataObjects["${ViewObject.name}"])
                    {
                      if(obj["id"] == "-1")
                      {
                        fieldNames = Object.keys(obj)
                        break
                      }
                    }
                    

                    var newRowObject = {}
                    var newFieldList = {...FieldList}
                    var newRadioButtonList = {...RadioButtonList}

                    

                    for(var fieldName of fieldNames)
                    {
                      if(fieldName in FieldList)
                      {
             
                        newRowObject[fieldName] = FieldList[fieldName]
                        newFieldList[fieldName] = ""
                        continue
                      }
                      if(fieldName in DropdownList)
                      {
                        newRowObject[fieldName] = DropdownList[fieldName].SelectedValue.name
                        continue
                      }
                      if(fieldName in RadioButtonList)
                      {
                        newRowObject[fieldName] = RadioButtonList[fieldName]
                        
                        newRadioButtonList[fieldName] = ""
                        
                        continue
                      }
                    }
                    
                    newRowObject["id"] = HybridDataObjects["${ViewObject.name}"].length

                    var newHybridObjectList = {...HybridDataObjects}
                    newHybridObjectList["${ViewObject.name}"].push(newRowObject)
                    console.log("####### Adding new row to table for ${ViewObject.name} ############")
                    console.log(newRowObject)

                    console.log("############# Hybrid data object ##############")
                    console.log(newHybridObjectList)
                    SetHybridDataObjects(newHybridObjectList)

                    SetFieldList(newFieldList)
                    SetRadioButtonList(newRadioButtonList)

                }}
              >
                <Text style={styles.textStyle}>${subViewObject.fields[componentNumber].name}</Text>
      
              </TouchableOpacity>
            </View>
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
      newSubViewCode = `
      ${newSubViewCode}
      ${newRowCode}
      `
    }             // while loop of hybrid ends here

    }
    newSubViewCode = `
      ${newSubViewCode}
      </View>
      `
    newViewCode = `
      ${newViewCode}
      ${newSubViewCode}
      ${newTableCode}
      `
      
      SubViewNumber += 1

  }               // block for hybrid ends here           
  
    var componentsLeft = ViewObject.type != "hybrid" ? ViewObject.fields.length : 0
    var componentNumber = 0
    var widthPerCompenent = ViewObject.type != "hybrid" ? (100/(ViewObject.componentPerRow)-1).toString()+"%": "0%"

    

    while(componentsLeft != 0)
    {

      var newRowCode = `
      <View style={{flexDirection: "row"}}>
      `

      for (var j = 0; j <ViewObject.componentPerRow; j++)
      {
        if(componentsLeft == 0)
          break
        
          var fieldName = ViewObject.fields[componentNumber].name
          var newComponentCode  = ``
          if(ViewObject.type == "textField")
          {
            var currentTextFieldObject = ViewObject.fields[componentNumber]
            if(currentTextFieldObject.type == "fromApi")
              newComponentCode = `
                <Text
                style={{...styles.input, width: "${widthPerCompenent}"}}
                >
                ${currentTextFieldObject.name} : ${currentTextFieldObject.value}
                </Text> 
                    `
            else
              newComponentCode = `
              <Text
              style={{...styles.input, width: "${widthPerCompenent}"}}
              >
              ${currentTextFieldObject.name} : {FieldList["${currentTextFieldObject.name}"]}
              </Text> 
                  `

          }
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
                 borderWidth:2,
                 borderRadius:10,
                 borderColor:"black",
                 marginHorizontal: 5,
                 marginVertical:5,
                 }}
                 //suggestion container style
                 textInputStyle={{
                   //inserted text style
                   paddingLeft:10,
                   fontSize: 15,
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
                   fontSize: 15,
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
          
          if(ViewObject.type == "textInputField")
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

          if(ViewObject.type == "radioButton")
          {
            newComponentCode = `
            <View style={{borderColor: "green", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
                <Text style={{color: "blue", fontSize: 15, marginHorizontal: 10, marginTop: 10}}>${ViewObject.name}</Text>
                <RadioButtonRN
                    style={{width: "80%", marginHorizontal: 25, marginBottom: 15}}
                    textStyle={{marginHorizontal: 10, fontSize: 12, fontWeight: "bold", color: "grey"}}
                    data={

                        (() => {
                          var labelList = []
                          for (var labelObject of ${JSON.stringify(ViewObject.fields)})
                            labelList.push({label: labelObject.name})

                          return labelList
                        })()
                      }
                    selectedBtn={(SelectedOutcome) => {
                    
                    var newRadioButtonList = {...RadioButtonList}
                    newRadioButtonList["${ViewObject.name}"] = SelectedOutcome.label
                    SetRadioButtonList(newRadioButtonList)
                    
                    }}
                    circleSize={10}
                    boxStyle={{height: 45}}
                    deactiveColor="grey"
                    activeColor="green"
                    
                    // boxActiveBgColor={InspectionOutcome == "FAILED" ? "#f08080" : "#90ee90"}

                />   
            </View>
            `
            
          }

          if(ViewObject.type == "button")
          {
            newComponentCode = `
            <View style={{borderColor: "green", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
              <TouchableOpacity
                style={{ ...styles.openButton, marginHorizontal: 10, width: "20%", marginVertical: 10, alignSelf: "center"}}
                onPress={() => {
                  var FieldsObjectList = [${ViewObject.fields[componentNumber].args}]
                  var newSentence = screenFunctions.${ViewObject.fields[componentNumber].onClick}(FieldsObjectList)
                  SetSentence(newSentence)
              }}
              >
                <Text style={styles.textStyle}>${ViewObject.fields[componentNumber].name}</Text>
      
              </TouchableOpacity>
            </View>
            `
            
          }

          newRowCode = `
          ${newRowCode}
          ${newComponentCode}
          `
          if(ViewObject.type == "radioButton")
            componentsLeft = 0
          else{
            componentNumber += 1
            componentsLeft -=1
        
          }
          
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


var TextInputObjectList = {}
var DropdownInputObjectList = {}
var RadioButtonSelectionObjectList = {}
var HybridDataObjects = {}

for(var viewObj of ObjectFromAPI.viewObjects)
{
  if(viewObj.type == "hybrid")
  {
    HybridDataObjects[viewObj.name] = []
    var newFieldCollectionForHybridObject = {"id": "-1"}
    for(var subViewObject of viewObj.groups)
    {
      if(subViewObject.type == "textInputField")
      {
        
        for(var field of subViewObject.fields)
        {
          TextInputObjectList[field.name] = ""
          newFieldCollectionForHybridObject[field.name] = ""
          //HybridDataObjects[viewObj.name][field.name] = []
        }
      }
      if(subViewObject.type == "dropdown")
      {
        for(var field of subViewObject.fields)
        {
          DropdownInputObjectList[field.name] = {"SelectedValue": "", "ValuesListFunction": field.valueListFunction}
          newFieldCollectionForHybridObject[field.name] = ""
          //HybridDataObjects[viewObj.name][field.name] = []
        }
      }
      
    }
    HybridDataObjects[viewObj.name].push(newFieldCollectionForHybridObject)
  }              // block of hybrid ends here

  if(viewObj.type == "textInputField")
  {
    for(var field of viewObj.fields)
      TextInputObjectList[field.name] = ""
  }
  if(viewObj.type == "dropdown")
  {
    for(var field of viewObj.fields)
      DropdownInputObjectList[field.name] = {"SelectedValue": "", "ValuesListFunction": field.valueListFunction}
  }
  if(viewObj.type == "radioButton")
  {
    RadioButtonSelectionObjectList[viewObj.name] = ""
  }

}
console.log("############## Hybrid Objects ##########")
console.log(HybridDataObjects)

let lyrics = 
`
import React, { useState } from "react";
import {StyleSheet,Text,TextInput,View, TouchableOpacity, FlatList, ScrollView} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown'
import { Dimensions } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native'

const screenFunctions = ${ObjectFromAPI.functions}
const GeneratedCode = () => {
  const [Sentence, SetSentence] = useState("")
  const [FieldList, SetFieldList] = useState(${JSON.stringify(TextInputObjectList)})
  const [DropdownList, SetDropdownList] = useState(${JSON.stringify(DropdownInputObjectList)})
  const [RadioButtonList, SetRadioButtonList] = useState(${JSON.stringify(RadioButtonSelectionObjectList)})
  const [HybridDataObjects, SetHybridDataObjects] = useState(${JSON.stringify(HybridDataObjects)})
  
  return (
    <ScrollView 
    contentContainerStyle={{alignItems: "center"}}
    keyboardShouldPersistTaps="always"
    >
       ${mainCode}

        <Text style={{color: "grey", fontSize: 20, fontWeight: "bold", marginVertical: 10}}>{Sentence}</Text>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        paddingHorizontal: 15,
        borderColor: "black",
        padding: 3,
        marginVertical: 5,
        marginHorizontal: 5,
        color: "blue",
        fontSize: 15,
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