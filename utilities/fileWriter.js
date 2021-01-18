const fs = require('fs');

var ObjectFromAPI = {
      textFileds: ["name", "email", "phone", "gst", "adhaar", "JailNo"],
      dropDowns: [],
      functions: `{"frameSentence": (FieldsObject) => {
        var sentence = ""
        for(var key of Object.keys(FieldsObject))
        {
          sentence = sentence+key.toString()+":"+FieldsObject[key].toString()+"\\n"
        }
        return sentence
      }}`
}

var fieldObjectList = {}
for(var key of ObjectFromAPI.textFileds)
  fieldObjectList[key] = ""

let lyrics = 
`
import React, { useState } from "react";
import {StyleSheet,Text,TextInput,View, TouchableOpacity, FlatList} from "react-native";

const screenFunctions = ${ObjectFromAPI.functions}
const GeneratedCode = () => {
  const [Sentence, SetSentence] = useState("")
  const [FieldList, SetFieldList] = useState(${JSON.stringify(fieldObjectList)})

  return (
    <View style={{marginHorizontal: 10}}>
     <FlatList 
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