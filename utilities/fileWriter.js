const fs = require('fs');
const fetch = require("node-fetch")
const { Placeholders } = require("./placeholders")


const ColorSchemeLibrary = {
  "blue": {
    "primaryColor": `#4682b4`,           //darkest
    "secondaryColor": `#b0c4de`,         //darker
    "tertiaryColor": `#e6e6fa`           // light
  },

  "green": {
    "primaryColor": `#008b8b`,
    "secondaryColor": `#8fbc8f`,
    "tertiaryColor": `#fffacd`
  },

  "grey": {
    "primaryColor": `#696969`,
    "secondaryColor": `#708090`,
    "tertiaryColor": `#b0c4de`
  }
}

console.log(Placeholders)
var ObjectFromAPI = {
  "viewObjects": [
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "buyername",
                  "title": "Buyer",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "dropdown",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "aqllevel",
                  "title": "AQL Level",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 0,
                  "required": false,
                  
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "hybrid",
          "name": "pono",
          "componentPerRow": 1,
          "fields": [],
          "groups": [
              {
                  "type": "textInputField",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "pono",
                          "title": "PO No",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "textInputField",
                  "componentPerRow": 2,
                  "fields": [
                      {
                          "name": "orderqty",
                          "title": "Order Qty",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      },
                      {
                          "name": "offeredqty",
                          "title": "Offered Qty",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "textInputField",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "excessshortqty",
                          "title": "Excess/Short Qty",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "button",
                  "name": "powiseqty_add",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "powiseqty_add",
                          "title": "Add",
                          "size": "regular",
                          "minLength": 0,
                          "maxLength": 0,
                          "required": false,
                          "onClick": "",
                          "args": ""
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              }
          ],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "factoryrepresentative",
                  "title": "Factory Representative",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      
      {
          "type": "textInputField",
          "componentPerRow": 3,
          "fields": [
              {
                  "name": "pqqty_val",
                  "title": "PR Quantity",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              },
              {
                  "name": "doneqty_val",
                  "title": "Done Quantity",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              },
              {
                  "name": "cutqty_val",
                  "title": "Cut Quantity",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 2,
          "fields": [
              {
                  "name": "packedqty",
                  "title": "Packed Qty",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false,
                  "inputType": "numeric"
              },
              {
                  "name": "samplesize",
                  "title": "Sample Size",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false,
                  "inputType": "numeric"
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 2,
          "fields": [
              {
                  "name": "fg1qty",
                  "title": "FG1 Qty",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false,
                  "inputType": "numeric"
              },
              {
                  "name": "fg2qty",
                  "title": "FG2 Qty",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false,
                  "inputType": "numeric"
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
        "type": "textInputField",
        "componentPerRow": 1,
        "fields": [
            {
                "name": "inserttotalnoofcarton",
                "title": "Insert Total No Of Carton",
                "size": "small",
                "minLength": 0,
                "maxLength": 100,
                "defaultValue": "",
                "required": false,
                "inputType": "numeric"
            }
        ],
        "groups": [],
        "columns": [],
        "rows": []
    },
      {
          "type": "textInputField",
          "componentPerRow": 2,
          "fields": [
              {
                  "name": "cartonsamplesize",
                  "title": "Carton Sample Size",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false,
                  "inputType": "numeric"
              },
              {
                  "name": "cartonselected",
                  "title": "Carton Selected",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false,
                  "inputType": "numeric"
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      
      {
          "type": "checklist",
          "name": "auditchecklist",
          "componentPerRow": 1,
          "fields": [
              {
                  "minLength": 0,
                  "maxLength": 0,
                  "required": false
              }
          ],
          "groups": [],
          "columns": [
              {
                  "name": "name",
                  "type": "textField",
                  "title": "Name",
                  "options": []
              },
              {
                  "name": "result",
                  "type": "dropdown",
                  "title": "Result",
                  "options": [
                      {
                          "id": 1,
                          "name": "Ok"
                      },
                      {
                          "id": 2,
                          "name": "Not Ok"
                      },
                      {
                          "id": 3,
                          "name": "NA"
                      }
                  ]
              },
              {
                  "name": "remarks",
                  "type": "textInputField",
                  "title": "Remarks",
                  "options": []
              }
          ],
          "rows": []
      },
      {
          "type": "hybrid",
          "name": "maindefect",
          "componentPerRow": 1,
          "fields": [],
          "groups": [
              {
                  "type": "dropdown",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "maindefect",
                          "title": "Select Defect",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 0,
                          "required": false,
                          "valueListUrl": "http://c842ec7a39cc.ngrok.io/api/reactScreenTool/controls/getDropdownValues"
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "textInputField",
                  "componentPerRow": 3,
                  "fields": [
                      {
                          "name": "maindefect_crit",
                          "title": "Critical",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      },
                      {
                          "name": "maindefect_maj",
                          "title": "Major",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      },
                      {
                          "name": "maindefect_min",
                          "title": "Minor",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "button",
                  "name": "maindefect_add",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "maindefect_add",
                          "title": "Add",
                          "size": "regular",
                          "minLength": 0,
                          "maxLength": 0,
                          "required": false,
                          "onClick": "",
                          "args": ""
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              }
          ],
          "columns": [],
          "rows": []
      },
      {
          "type": "hybrid",
          "name": "measurementdefect",
          "componentPerRow": 1,
          "fields": [],
          "groups": [
              {
                  "type": "textInputField",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "measurementdefect",
                          "title": "Write Defect Description",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "textInputField",
                  "componentPerRow": 3,
                  "fields": [
                      {
                          "name": "measurementdefect_crit",
                          "title": "Critical",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      },
                      {
                          "name": "measurementdefect_maj",
                          "title": "Major",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      },
                      {
                          "name": "measurementdefect_min",
                          "title": "Minor",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "button",
                  "name": "measurementdefect_add",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "measurementdefect_add",
                          "title": "Add",
                          "size": "regular",
                          "minLength": 0,
                          "maxLength": 0,
                          "required": false,
                          "onClick": "",
                          "args": ""
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              }
          ],
          "columns": [],
          "rows": []
      },
      {
          "type": "hybrid",
          "name": "miscdefect",
          "componentPerRow": 1,
          "fields": [],
          "groups": [
              {
                  "type": "textInputField",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "miscdefect",
                          "title": "Write Defect Description",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "textInputField",
                  "componentPerRow": 3,
                  "fields": [
                      {
                          "name": "miscdefect_crit",
                          "title": "Critical",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric",
                      },
                      {
                          "name": "miscdefect_maj",
                          "title": "Major",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      },
                      {
                          "name": "miscdefect_min",
                          "title": "Minor",
                          "size": "small",
                          "minLength": 0,
                          "maxLength": 100,
                          "defaultValue": "",
                          "required": false,
                          "inputType": "numeric"
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              },
              {
                  "type": "button",
                  "name": "miscdefect_add",
                  "componentPerRow": 1,
                  "fields": [
                      {
                          "name": "miscdefect_add",
                          "title": "Add",
                          "size": "regular",
                          "minLength": 0,
                          "maxLength": 0,
                          "required": false,
                          "onClick": "",
                          "args": ""
                      }
                  ],
                  "groups": [],
                  "columns": [],
                  "rows": []
              }
          ],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "totalcritdefect",
                  "title": "Total Critical Defect",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "totalmajordefect",
                  "title": "Total Major Defect",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "totalminordefect",
                  "title": "Total Minor Defect",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "totaldefect",
                  "title": "Total Defect",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
          "type": "textInputField",
          "componentPerRow": 1,
          "fields": [
              {
                  "name": "defectrate",
                  "title": "Defect Rate",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "required": false
              }
          ],
          "groups": [],
          "columns": [],
          "rows": []
      },
      {
        "type": "radioButton",
        "name": "result",
        "componentPerRow": 1,
        "fields": [
            {
                "name": "Passed",
            },
            {
                "name": "Failed",
            },
            {
              "name": "onhold",
          }
        ],
        "groups": [],
        "columns": [],
        "rows": []
    },
    {
      "type": "textInputField",
      "componentPerRow": 1,
      "fields": [
          {
              "name": "measurementDeviation",
              "title": "Measurement Deviation",
          },
          {
            "name": "finalRemarks",
            "title": "Comments",
        }
      ],
      "groups": [],
      "columns": [],
      "rows": []
  },
  {
    type: "button",
    componentPerRow: 1,
    fields: [
      {"name": "finalSubmission", title: "Submit",}
      ]
  },
  ]
}

var objectFromAPI = {                                       //Sample
      colorScheme: "blue",
      viewObjects: [
       
        {
          type: "dropdown",
          componentPerRow: 1,
          fields: [
            {"name": "AqlIndex",
            "valueListUrl": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getFactoryList",
            "title": "AQL Value"
             },
             {"name": "Factory",
             "valueListUrl": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getFactoryList",
             },
          ]
        },
        {
          type: "textInputField",
          componentPerRow: 1,
          fields: [
            {"name": "brand", "title": "Brand"}, 

            {"name": "orderNo", "title": "Order Number"}
          ]
        },
        {
          type: "textField",
          componentPerRow: 2,
          textHeading: "",
          fields: [
            {"name": "date", "title":"Date", "type":"fromApi" , "value": "21-01-2021"},
            {"name": "brand", "title": "Brand", "type":"fromScreen"}
          ]
        },

        {
          type: "textInputField",
          componentPerRow: 3,
          fields: [
            {"name": "orderQuantity", "title": "Order Qty",}, 
            {"name": "offeredQuantity", "title": "Offered Qty"},
            {"name": "excessQuantity", "title": "Excess Qty"},
          ]
        },
        {
          type: "textInputField",
          componentPerRow: 1,
          fields: [
            {"name": "factoryRepresentative", "title": "Factory Representative", "editable": false, "default": "Babu Rao Apte"}
          ]
        },
        {
          type: "radioButton",
          name: "Inspection Type",
          componentPerRow: 3,
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
            {"name": "packedQty", "title": "Packed Quantity"}, 
            {"name": "sampleSize"}, 
            {"name": "cartonSampleSize"}, 
            {"name": "CartonSelected"}, 
            {"name": "TotalCartons"}]
        },
        {
          type: "checklist",
          name: "checkList1",
          title: "Check List 1",
          columns: [
            {name: "columnA", type: "textField", title: "Column A"},
            {name: "columnB", type: "dropdown", title: "Column B"},
            {name: "columnZ", type: "textInputField", title: "Column Z"},
            {name: "columnC", type: "textInputField", title: "Column C"},
            {
              name: "columnD", 
              type: "radioButton", 
              title: "columnD",
              "options": [
                {
                    "id": 1,
                    "name": "Ok"
                },
                {
                    "id": 2,
                    "name": "Not Ok"
                },
                {
                    "id": 3,
                    "name": "NA"
                }
                    ]
            }
          ],

          rows: [
            
          ]
          
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
                "valueListFunction": "getMaindefectsList",
                "title": "Main defect name"
                 },
              ]
            },
            {
              type: "textInputField",
              componentPerRow: 3,
              fields: [
                {"name": "mainCritical", "title": "Critical"}, 
                {"name": "mainMajor", "title": "Major"}, 
                {"name": "mainMinor", "title": "Minor"}, 
                {"name": "mean", "title": "Mean"},
                {"name": "median", "title": "Median"}
                ]
            },
            
            {
              type: "button",
              componentPerRow: 1,
              fields: [
                {"name": "AddMainDefect", "title": "Add Main defect", "onClick": "addMainDefect"}, 
                ]
            },
          ]
          
        },
        {
          type: "hybrid",
          name: "Miss Defect",

          groups: [
            {
              type: "textInputField",
              componentPerRow: 1,
              fields: [
                {"name": "MiscellaneousDefect", "title": "Miscellaneous Defect",}
              ]
            },
            {
              type: "textInputField",
              componentPerRow: 3,
              fields: [
                {"name": "missCritical", "title": "Critical", }, 
                {"name": "missMajor", "title": "Major"}, 
                {"name": "missMinor", "title": "Minor"}, 
                ]
            },
            {
              type: "dropdown",
              componentPerRow: 1,
              fields: [
                {"name": "randomDropDown",
                "valueListUrl": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getFactoryList",
                "title": "A random value"
                 },
              ]
            },
            {
              type: "button",
              componentPerRow: 1,
              fields: [
                {"name": "AddMissDefect", "title": "Add Miscellaneous Defect" ,"onClick": "executeSomeFunction"}, 
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
          type: "textField",
          componentPerRow: 1,
          textHeading: "",
          fields: [
            {"name": "TotalCriticalDefect", "title": "Total Critical Defect", "type": "fromPlaceholder"},
            {"name": "TotalMajorDefect", "title": "Total Major Defect", "type":"fromPlaceholder"},
            {"name": "TotalMinorDefect", "title": "Total Minor Defect", "type": "fromPlaceholder"}
          ]
        },
        {
          type: "button",
          componentPerRow: 1,
          fields: [
            {"name": "Done", title: "Done", "onClick": "frameSentence", "args": ["FieldList", "DropdownList", "RadioButtonList"]},
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

const codeGenerator = async (ObjectFromAPI) => {

  var ColorScheme = ObjectFromAPI.colorScheme != null ? ObjectFromAPI.colorScheme : "blue"
  const primaryColor = ColorSchemeLibrary[ColorScheme].primaryColor
const secondaryColor = ColorSchemeLibrary[ColorScheme].secondaryColor
const tertiaryColor = ColorSchemeLibrary[ColorScheme].tertiaryColor

  var mainCode = `
<View id="mainSection" style={{borderWidth: 0, borderColor: "red", alignItems: "center", paddingVertical: 5, paddingHorizontal:5, marginHorizontal: 5}}>
`
var ViewNumber = 1
for(var ViewObject of ObjectFromAPI.viewObjects)
{ 
  
  
  var newViewCode = 
  `
   <View id="view${ViewNumber}" 
    style={{marginVertical: 5, 
            borderWidth: ${ViewObject.type == "radioButton" || ViewObject.type == "hybrid" ? 2 : 0}, 
            borderColor: "grey", justifyContent: "center", 
            alignItems: "center", borderRadius: 7,
            backgroundColor: ${ViewObject.type == "radioButton" || ViewObject.type == "textInputField" || ViewObject.type == "dropdown"? `'${secondaryColor}'` : `'${tertiaryColor}'`},
            paddingVertical: 5,
            elevation: 50,

          }}>
  `
  //########################################### CHECKLIST ###################################################
  if(ViewObject.type == "checklist")
  {
    var newTableCode = `
    {/* ############################################## CHECKLIST ${ViewObject.name} START ######################################################################## */}

    <View id ="${ViewObject.name} table" style={{marginVertical: 10, width: "100%",}}>
    <ScrollView horizontal id="${ViewObject.name} table" contentContainerStyle={{flexDirection: "column"}}>
    
      <View style={{flexDirection: "row", paddingVertical: 7, backgroundColor: "${primaryColor}",  borderRadius: 3, justifyContent: "flex-start", alignItems: "center",}}>
        <FlatList
          id="Headings"
          data={(() => {
            var sampleObjectWithIdNegative1 = {}
            for(var obj of ChecklistDataObjects["${ViewObject.name}"])
            {
              if(obj["id"] == "-1")
                sampleObjectWithIdNegative1 = obj
            }
            var ColumnHeadings = []
            for(var key of Object.keys(sampleObjectWithIdNegative1))
            {
              if(key == "id" || key == "ApiUrl")
               continue
              ColumnHeadings.push(sampleObjectWithIdNegative1[key])
            }
            return ColumnHeadings
          })() }
          keyExtractor={(columnNameObject) => columnNameObject.title}
          contentContainerStyle = {{flexDirection: "row"}}
          renderItem = {({item}) => {
            return <Text numberOfLines={10} style={{color: "white", width: 120, textAlign: 'center', fontWeight: "bold", fontSize: 12, }}>{item.title}</Text>
          }}
        />
      </View>
      <FlatList
        id="Table content"
        data={ChecklistDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id != "-1")}
        keyExtractor={(dataObject) => dataObject.id.toString()}
        contentContainerStyle = {{borderColor: "black",}}
        renderItem = {({item}) => {
          var currentRowArray = []
          var i = 0
          for(var key of Object.keys(item))
          {
            if(key == "id")
              continue

            currentRowArray.push({"id": i.toString(), "valueObject": item[key], "type": key, "rowId": item.id})      ;{/* type ~ columnName */}
            i += 1
          }
          return (
            
            <FlatList 
              id="rowContent"
              data={currentRowArray}
              keyExtractor={(currentElementObject) => currentElementObject.id.toString()}
              style={{paddingVertical: 5, flexDirection: "row", borderWidth: 2, borderColor: "red", borderRadius: 5, justifyContent: "flex-start",  alignItem: "center", alignItems: "center"}}
              renderItem = {({item}) => {
                
               

                  if(item["valueObject"].type == "radioButton")
                  {
                    const InputKey = item["valueObject"].variableName
                    return (
                      <SwitchSelector
                                    options={(() => {
                                      var Options = []
                                      for(var optionObject of item["valueObject"]["options"])
                                        Options.push({"label": optionObject.name, "value": optionObject.name})
                                      
                                      return Options
                                    })()}
                                    initial={-1}
                                    onPress={(newValue) => {
                                      
                                      var newChecklistDataObjects = {...ChecklistDataObjects}
                                      for(var i = 0; i<newChecklistDataObjects["${ViewObject.name}"].length; i++ )
                                      {
                                        if(newChecklistDataObjects["${ViewObject.name}"][i].id == item.rowId)
                                        {
                                          newChecklistDataObjects["${ViewObject.name}"][i][item.type]["value"] = newValue
                                          break
                                        }
                                      }
                                      storeData("ChecklistDataObjects", newChecklistDataObjects, CurrentScreenId)
                                      SetChecklistDataObjects(newChecklistDataObjects)
                                    }}
                                    textColor={"black"} //'#7a44cf'

                                    selectedColor={"green"}
                                    buttonColor={"red"}
                                    borderColor={"blue"}
                                    hasPadding
                                    style={{width: 110, marginHorizontal: 10}}
                                    height={25}
                                    textStyle={{fontSize:10, fontWeight: "bold"}}
                                    selectedTextStyle={{fontSize:10, fontWeight: "bold"}}
                                    borderRadius={5}
                           />
                    )
                  }
                  if(item["valueObject"].type == "dropdown")
                  {
                    const InputKey = item["valueObject"].variableName
                    return (
                      <ModalDropdown 
                        options={(() => {
                          var Options = []
                          for (var obj of item["valueObject"].ValuesList)
                          {
                            if(obj.name != null)
                              Options.push(obj.name)
                            else
                              Options.push(obj)
                          }
                          return Options
                        })() }
                        style={{marginHorizontal: 5, padding: 7, borderWidth: 2, borderColor: "grey", borderRadius: 4, marginVertical: 5, width: 110}}
                        textStyle={{color: "grey", fontWeight: "bold", fontSize: 12}}
                        dropdownTextStyle={{color: "black"}}
                        defaultValue= {item["valueObject"].SelectedValue != "" ? item["valueObject"].SelectedValue :"Select a value"}
                        
                        onSelect={(selectedIndex) => {
                          
                          var newChecklistDataObjects = {...ChecklistDataObjects}
                          for(var i = 0; i<newChecklistDataObjects["${ViewObject.name}"].length; i++ )
                          {
                            if(newChecklistDataObjects["${ViewObject.name}"][i].id == item.rowId)
                            {
                              newChecklistDataObjects["${ViewObject.name}"][i][item.type]["SelectedValue"] = newChecklistDataObjects["${ViewObject.name}"][i][item.type]["ValuesList"][selectedIndex].name
                              break
                            }
                          }

                        storeData("ChecklistDataObjects", newChecklistDataObjects, CurrentScreenId)
                        SetChecklistDataObjects(newChecklistDataObjects)

                        console.log("#################### current checklist object modified to ####################")
                        console.log(newChecklistDataObjects["${ViewObject.name}"])

                        }}
                      />
                    )
                  }
                  if(item["valueObject"].type == "textInputField")
                  {  
                    const InputKey = item["valueObject"].variableName
                    return (
                      <TextInput
                      // style= {{marginLeft: 4, color: "blue"}}
                      style={{borderBottomColor:'black', paddingHorizontal: 15, fontSize: 10, borderBottomWidth: 1, paddingVertical: 3, marginHorizontal: 15, width: 90}}
                      placeholder={""}
                      placeholderTextColor={"grey"}
                      maxLength={50}
                      // onBlur={Keyboard.dismiss}
                      value={ChecklistDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id == item.rowId)[0][item.type]["value"]}    //item.type means the column(name)
                      editable={${true}}
                      onChangeText = {(newValue) => {
                        
                        var newChecklistDataObjects = {...ChecklistDataObjects}
                        for(var i = 0; i<newChecklistDataObjects["${ViewObject.name}"].length; i++ )
                        {
                          if(newChecklistDataObjects["${ViewObject.name}"][i].id == item.rowId)
                          {
                            newChecklistDataObjects["${ViewObject.name}"][i][item.type]["value"] = newValue
                            break
                          }
                        }
                        storeData("ChecklistDataObjects", newChecklistDataObjects, CurrentScreenId) 
                        SetChecklistDataObjects(newChecklistDataObjects)
                      }}
                  /> 
                    )
                  }

                
                return <Text numberOfLines={10} style={{textAlign: 'center', width: 120, color: "grey", fontWeight: "bold", fontSize: 10,}}>{item.valueObject.value}</Text>
              }}
              
            />
           
          )
        }}
      />
    
    </ScrollView>
    </View>
      {/* #################################################### CHECKLIST END ######################################################### */}
    `

    newViewCode = `
      ${newViewCode}
      ${newTableCode}
      `
  }
  //########################################## HYBRID ######################################################
  if(ViewObject.type == "hybrid")
  {
    var SubViewNumber = 1
    
    var newTableCode = `
  {/* ######################################## HYBRID ${ViewObject.name} ################################################################### */}

    <View id ="${ViewObject.name} table" style={{marginVertical: 10, width: "100%", }}>
    <ScrollView horizontal id="${ViewObject.name} table" contentContainerStyle={{flexDirection: "column"}}>
    
      <View style={{flexDirection: "row", paddingVertical: 7, backgroundColor: "${primaryColor}",  borderRadius: 3, justifyContent: "flex-start", alignItems: "center",}}>
        <FlatList
          id="Headings"
          data={(() => {
            var sampleObjectWithIdNegative1 = {}
            for(var obj of HybridDataObjects["${ViewObject.name}"])
            {
              if(obj["id"] == "-1")
                sampleObjectWithIdNegative1 = obj
            }
            return Object.values(sampleObjectWithIdNegative1).filter((columnName) => columnName != "-1")
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
                              storeData("HybridDataObjects", newHybridDataObjects,CurrentScreenId )
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
     <View id="subview${SubViewNumber}" style={{marginVertical: 5, borderWidth: 0, borderColor: "grey", justifyContent: "center", alignItems: "center"}}>
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
            console.log("########## Text field encountered #########")
            console.log(subViewObject.fields[componentNumber])
            var currentTextFieldObject = subViewObject.fields[componentNumber]
            if(currentTextFieldObject.type == "fromApi")
              {
                console.log("############# currentTextfieldObject ########")
                console,log(currentTextFieldObject)
                newComponentCode = `
                <Text
                style={{...styles.input, width: "${widthPerCompenent}"}}
                >
                ${currentTextFieldObject.title} : ${currentTextFieldObject.value}
                </Text> 
                    `}
            else if(currentTextFieldObject.type == "fromPlaceholder")
              {
                console.log("############# currentTextfieldObject ########")
                console,log(currentTextFieldObject)
                newComponentCode = `
              <Text
              style={{...styles.input, width: "${widthPerCompenent}"}}
              >
              ${currentTextFieldObject.title} : {(
                () => {
                  return "From Placeholder"
                }
                
                )()}
              </Text> 
                  `}
            else
              {
                console.log("############# currentTextfieldObject ########")
                console,log(currentTextFieldObject)
                newComponentCode = `
              <Text
              style={{...styles.input, width: "${widthPerCompenent}"}}
              >
              ${currentTextFieldObject.title} : {FieldList["${currentTextFieldObject.name}"]}
              </Text> 
                  `}

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
                   ${Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                   console.log("#### New dropdown list ######")
                   console.log(newDropdownList)
                   SetDropdownList(newDropdownList)
                   
                 }}
                 selectedItems={DropdownList.${subViewObject.fields[componentNumber].name}["SelectedValue"]}
                 //onItemSelect called after the selection from the dropdown
                 containerStyle={{ padding: 10 ,width: "${widthPerCompenent}" ,
                 borderWidth:2,
                 borderRadius:5,
                 borderColor:"grey",
                 marginHorizontal: 5,
                 marginVertical:5,
                 backgroundColor: "white"
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
                 items={DropdownList["${subViewObject.fields[componentNumber].name}"].ValuesList}
                 //mapping of item array
                 //default selected item index
                 placeholder={"Select ${subViewObject.fields[componentNumber].title != null ? subViewObject.fields[componentNumber].title: subViewObject.fields[componentNumber].name}"}
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
            
         <View style={{width: "${widthPerCompenent}", height: 45, marginHorizontal: 2, marginVertical: 2}}>  
         <FloatingLabelInput
              label="${subViewObject.fields[componentNumber].title != null ? subViewObject.fields[componentNumber].title: subViewObject.fields[componentNumber].name}"
              labelStyles={{color: "red", fontSize: 10, fontWeight: "bold"}}
              containerStyles={{
                borderWidth: 2,
                padding: 10,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderRadius: 5,
              }}
              inputStyles={{fontWeight: "bold", fontSize: 15, color: "gray"}}
              keyboardType=${subViewObject.fields[componentNumber].inputType != null ? `"`+subViewObject.fields[componentNumber].inputType+`"` : `"default"`}
              maxLength={50}
              value={FieldList["${subViewObject.fields[componentNumber].name}"]}
              editable={${subViewObject.fields[componentNumber].editable != null ? subViewObject.fields[componentNumber].editable : true}}
              onChangeText = {(newValue) => {
                var newFieldList = {...FieldList}
                newFieldList["${subViewObject.fields[componentNumber].name}"] = newValue
                ${Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                
                
                
                SetFieldList(newFieldList)
            }}
          />
          </View>

            `
          }


          if(subViewObject.type == "button")
          {
            newComponentCode = `
            <View style={{borderColor: "grey", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
              <TouchableOpacity
                style={{ ...styles.openButton, marginHorizontal: 10, marginVertical: 10, alignSelf: "center"}}
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
                    
                    newRowObject["id"] = (HybridDataObjects["${ViewObject.name}"].length).toString()

                    var newHybridObjectList = {...HybridDataObjects}
                    newHybridObjectList["${ViewObject.name}"].push(newRowObject)
                    console.log("####### Adding new row to table for ${ViewObject.name} ############")
                    console.log(newRowObject)

                    console.log("############# Hybrid data object being stored for screen id "+ CurrentScreenId+" ##############")
                    console.log(newHybridObjectList)
                    
                    SetHybridDataObjects(newHybridObjectList)

                    SetFieldList(newFieldList)
                    SetRadioButtonList(newRadioButtonList)

                    ${Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                    storeData("HybridDataObjects", newHybridObjectList, CurrentScreenId)
                  }}
              >
                <Text style={styles.textStyle}>${subViewObject.fields[componentNumber].title}</Text>
      
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

  {/* ######################################## HYBRID block for ${ViewObject.name} ends ##################################################################### */}
      `
      
      SubViewNumber += 1

  }               // block for hybrid ends here           

  // ############################################################################################
  
    var componentsLeft = ViewObject.type != "hybrid" && ViewObject.type != "checklist" ? ViewObject.fields.length : 0
    var componentNumber = 0
    var widthPerCompenent = ViewObject.type != "hybrid" && ViewObject.type != "checklist" ? (100/(ViewObject.componentPerRow)-1).toString()+"%": "0%"

    

    while(componentsLeft != 0)      // Wont be executed if ViewObject.type was hybrid, since components left made zero
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
 //############################################## TEXT FIELD #############################################
          if(ViewObject.type == "textField")
          {
            var currentTextFieldObject = ViewObject.fields[componentNumber]
            if(currentTextFieldObject.type == "fromApi")
              newComponentCode = `
                {/* ######################################### TEXT FIELD ${fieldName} ########################################################## */}
                <Text
                style={{...styles.input, width: "${widthPerCompenent}"}}
                >
                ${currentTextFieldObject.title} : ${currentTextFieldObject.value}
                </Text> 
                    `
            else if(currentTextFieldObject.type == "fromPlaceholder")
            newComponentCode = `
            <Text
            style={{...styles.input, width: "${widthPerCompenent}"}}
            >
            ${currentTextFieldObject.title} : {(
              () => {
                ${Placeholders.CodeSnippets[currentTextFieldObject.name] != null ? Placeholders.CodeSnippets[currentTextFieldObject.name]: `return "Value to come from Placeholder"`}
                
              }
              
              )()}
            </Text> 
                `
            else
              newComponentCode = `
              <Text
              style={{...styles.input, width: "${widthPerCompenent}"}}
              >
              ${currentTextFieldObject.title} : {FieldList["${currentTextFieldObject.name}"]}
              </Text> 

            {/* ######################################### TEXT FIELD BLOC OF ${fieldName} ends ############################################## */}
                  `

          }
//################################################# DROPDOWN #############################################
          if(ViewObject.type == "dropdown")
          {
            newComponentCode = `
          {/* ################################################ DROPDOWN ${fieldName} #################################################### */}
            <SearchableDropdown
               //On text change listner on the searchable input
                 onTextChange={(text) => console.log(text)}
                 onItemSelect={selectedObject => { 
                   
                   var newDropdownList = {...DropdownList}
                   newDropdownList.${fieldName}["SelectedValue"] = selectedObject
                   ${Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                   console.log("#### New dropdown list ######")
                   console.log(newDropdownList)
                   SetDropdownList(newDropdownList)
                   storeData("DropdownList", newDropdownList, CurrentScreenId)
                 }}
                 selectedItems={DropdownList.${fieldName}["SelectedValue"]}

                 //onItemSelect called after the selection from the dropdown
                 containerStyle={{ padding: 10 ,width: "${widthPerCompenent}" ,
                 borderWidth:2,
                 borderRadius:5,
                 borderColor:"grey",
                 marginHorizontal: 5,
                 marginVertical:2,
                 backgroundColor: "white"
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
                 items={DropdownList["${ViewObject.fields[componentNumber].name}"].ValuesList}
                 //mapping of item array
                 //default selected item index
                 //"Select ${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}"
                 placeholder={DropdownList["${ViewObject.fields[componentNumber].name}"].SelectedValue == "" ? "Select ${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}" : "${ViewObject.fields[componentNumber].name}: " + DropdownList["${ViewObject.fields[componentNumber].name}"].SelectedValue.name }
                 placeholderTextColor="#00334e80"
                 //place holder for the search input
                 resetValue={false}
                 //reset textInput Value with true and false state
                 underlineColorAndroid="transparent"
                 //To remove the underline from the android input
             />
                {/* ################################################ DROPDOWN ${fieldName} ends #################################################### */}
            `
          }
//############################################### TEXTINPUT FIELD ###########################################
          if(ViewObject.type == "textInputField")
          {
            newComponentCode = `

          {/* ############################################ TEXTINPUT FIELD ${ViewObject.fields[componentNumber].name} ###################################################### */}
         <View style={{width: "${widthPerCompenent}", marginHorizontal: 5, marginVertical: 2}}>  
         <FloatingLabelInput
              label="${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}"
              labelStyles={{fontSize: 12, fontWeight: "bold", backgroundColor: "${secondaryColor}", paddingHorizontal: 4, borderRadius: 2, paddingVertical: 1}}
              staticLabel
              customLabelStyles={{
                colorFocused: 'red',
                fontSizeFocused: 12,
              }}
              keyboardType=${ViewObject.fields[componentNumber].inputType != null ? `"`+ViewObject.fields[componentNumber].inputType+`"` : `"default"`}
              containerStyles={{
                borderWidth: 2,
                padding: 10,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderRadius: 5,
              }}
              inputStyles={{fontWeight: "bold", fontSize: 15, color: "gray"}}
              maxLength={50}
              value={FieldList["${ViewObject.fields[componentNumber].name}"]}
              editable={${ViewObject.fields[componentNumber].editable != null ? ViewObject.fields[componentNumber].editable : true}}
              onChangeText = {(newValue) => {
                  
                  var newFieldsObject = {...FieldList}
                  newFieldsObject["${fieldName}"] = newValue
                  ${Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                  

                  SetFieldList(newFieldsObject)
                  storeData("FieldList", newFieldsObject, CurrentScreenId)
              }}
          />
          </View>
            {/* ############################################ TEXTINPUT FIELD ${ViewObject.fields[componentNumber].name} ends ###################################################### */}
            `
          }
//################################################## RADIO BUTTON ##########################################
          if(ViewObject.type == "radioButton")
          {
            newComponentCode = `
          {/* ################################################## RADIO BUTTON ${ViewObject.name} ########################################## */}
            <View style={{borderColor: "grey", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
                <Text style={{color: "red", fontSize: 15, marginHorizontal: 10, marginTop: 10}}>${ViewObject.name}</Text>
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
                    ${Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                    SetRadioButtonList(newRadioButtonList)
                    storeData("RadioButtonList", newRadioButtonList, CurrentScreenId)
                    
                    }}
                    initial={(() => {
                      
                      var index = 1
                      for (var labelObject of ${JSON.stringify(ViewObject.fields)})
                      {
                          if(RadioButtonList["${ViewObject.name}"] == labelObject.name)
                            return index

                          index = index + 1
                      }
                      
                      return -1

                  })()}
                    circleSize={10}
                    boxStyle={{height: 45, backgroundColor: "white"}}
                    deactiveColor="grey"
                    activeColor="green"
                    
                    // boxActiveBgColor={InspectionOutcome == "FAILED" ? "#f08080" : "#90ee90"}

                />   
            </View>
                {/* ################################################## RADIO BUTTON ${ViewObject.name} ends ########################################## */}
            `
            
          }
// ################################################## BUTTON ################################################
          if(ViewObject.type == "button")
          {
            newComponentCode = `
          {/* ################################################## BUTTON ${ViewObject.fields[componentNumber].name} ################################################ */}
            <View style={{borderColor: "green", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
              <TouchableOpacity
                style={{ ...styles.openButton, marginHorizontal: 10, marginVertical: 10, alignSelf: "center"}}
                onPress={() => {
                  
                  ${Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
              }}
              >
                <Text style={styles.textStyle}>${ViewObject.fields[componentNumber].title}</Text>
      
              </TouchableOpacity>
            </View>
            {/* ################################################## BUTTON ${ViewObject.fields[componentNumber].name} ends ################################################ */}
            `
            
          }
// ##########################################################################################################
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
var ChecklistDataObjects = {}




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
          TextInputObjectList[field.name] = field.default != null ?  field.default: ""
          newFieldCollectionForHybridObject[field.name] = field.title != null ? field.title : field.name
          //HybridDataObjects[viewObj.name][field.name] = []
        }
      }
      if(subViewObject.type == "dropdown")
      {
        for(var field of subViewObject.fields)
        {
          DropdownInputObjectList[field.name] = {"SelectedValue": "", 
                                                  "ValuesListFunction": field.valueListFunction, 
                                                  "ValuesListUrl": Placeholders.ApiUrls[field.name] != null ? Placeholders.ApiUrls[field.name] : field.valueListUrl != null ? field.valueListUrl : "",
                                                  "ValuesList": [{"id": "1", "name": "option1",}, {"id": "2", "name": "option2"}]
                                                }
          newFieldCollectionForHybridObject[field.name] = field.title != null ? field.title : field.name
          //HybridDataObjects[viewObj.name][field.name] = []
        }
      }
      
    }
    HybridDataObjects[viewObj.name].push(newFieldCollectionForHybridObject)
  }              // block of hybrid ends here

  if(viewObj.type == "checklist")
  {
    ChecklistDataObjects[viewObj.name.toString()] = []
    var newFieldCollectionForChecklistObject = {"id": "-1", "ApiUrl": Placeholders.ApiUrls[viewObj.name],}
 
    var columnsInfoObject = {}
    for (var columnObject of viewObj.columns)
      columnsInfoObject[columnObject.name] =  { "type": columnObject.type, "title": columnObject.title, "options": columnObject.options != null ?columnObject.options  : [{"id": "1", "name": "Yes"}, {"id": "2", "name": "No"}] }
    
    for(var column of Object.keys(columnsInfoObject))
    {
      newFieldCollectionForChecklistObject[column] = columnsInfoObject[column]

    }
    ChecklistDataObjects[viewObj.name].push(newFieldCollectionForChecklistObject)
    
    {/*
      
      var rowList = []
    if(viewObj.rows != null)
      rowList = [].concat(viewObj.rows)

      const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        //body: JSON.stringify(data)
    }
    if(Placeholders.ApiUrls[viewObj.name] != null && Placeholders.ApiUrls[viewObj.name] != "")
    {
      const response = await fetch(Placeholders.ApiUrls[viewObj.name], config);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
        }
      
      const newRowlist = await response.json();
      console.log("############# new rowlist for checklist from api ##############")
      console.log(newRowlist)

      rowList = rowList.concat(newRowlist)
    }
    
    console.log("######### pushing checklist objects in checklist list ##############")
    for(var i = 0; i< rowList.length; i++)
    {
      var newRowObject = {"id": i.toString()}
      

      for( var column of Object.keys(columnsInfoObject))
      { 
        if(columnsInfoObject[column]["type"] == "textField")
        {
          newRowObject[column] = {"type": "textField", "value": rowList[i][column]}
        }
        if(columnsInfoObject[column]["type"] == "textInputField") 
        {
          TextInputObjectList[`${column}_id_${i}`] = ""
          //newRowObject[column] = `INPUT:${columnsInfoObject[column]["type"]}:${column}_id_${i}`
          newRowObject[column] = {"type": `${columnsInfoObject[column]["type"]}`, "variableName": `${column}_id_${i}`}
        }
        if(columnsInfoObject[column]["type"] == "radioButton") 
        {
          RadioButtonSelectionObjectList[`${column}_id_${i}`] = ""
          //newRowObject[column] = `INPUT:${columnsInfoObject[column]["type"]}:${column}_id_${i}`
          newRowObject[column] = {"type": `${columnsInfoObject[column]["type"]}`, 
                                  "variableName": `${column}_id_${i}`, 
                                  "options": columnsInfoObject[column]["options"]
                                }
        }
        if(columnsInfoObject[column]["type"] == "dropdown") 
        {
          DropdownInputObjectList[`${column}_id_${i}`] = {"SelectedValue": "", 
                                                          "ValuesListFunction": "", 
                                                          "ValuesListUrl": Placeholders.ApiUrls[`${column}_id_${i}`] != null ? Placeholders.ApiUrls[`${column}_id_${i}`] : "",
                                                          "ValuesList": [{"id": "1", "name": "option1",}, {"id": "2", "name": "option2"}]
                                                        }
          //newRowObject[column] = `INPUT:${columnsInfoObject[column]["type"]}:${column}_id_${i}`
          newRowObject[column] = {"type": `${columnsInfoObject[column]["type"]}`, "variableName": `${column}_id_${i}`}
        }
      }
      
      ChecklistDataObjects[viewObj.name].push(newRowObject)
    }

    */}
  }
  


  if(viewObj.type == "textInputField")
  {
    for(var field of viewObj.fields)
      TextInputObjectList[field.name] = field.default != null ?  field.default: ""
  }
  if(viewObj.type == "dropdown")
  {
    for(var field of viewObj.fields)
      DropdownInputObjectList[field.name] = {"SelectedValue": "", 
                                              "ValuesListFunction": field.valueListFunction != null ? field.valueListFunction : "", 
                                              "ValuesListUrl": Placeholders.ApiUrls[field.name] != null ? Placeholders.ApiUrls[field.name] : field.valueListUrl != null ? field.valueListUrl : "",
                                              "ValuesList": [{"id": "1", "name": "option1",}, {"id": "2", "name": "option2"}]
                                            }
  }
  if(viewObj.type == "radioButton")
  {
    RadioButtonSelectionObjectList[viewObj.name] = ""
  }

}
console.log("############## Hybrid Objects ##########")
console.log(HybridDataObjects)

var code = {
  "structure": "",
  "style": ""
}
code["structure"] = 
`
import React, { useState, useEffect} from "react";
import {StyleSheet,Text,TextInput,View, TouchableOpacity, FlatList, ScrollView, Alert, ActivityIndicator} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown'
import { Dimensions } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native'
import SwitchSelector from "react-native-switch-selector"
import { FloatingLabelInput } from "react-native-floating-label-input"
import ModalDropdown from 'react-native-modal-dropdown'
import styles from "../../assets/styles"

import AsyncStorage from '@react-native-async-storage/async-storage'

const screenFunctions = ${ObjectFromAPI.functions}

const storeData = async (key, value, CurrentScreenId, autoSave = true) => {
  //console.log("#################### screen id recieved in storeData function #############")
  //console.log(CurrentScreenId)
  //console.log("##################### value recieved in storeData function ##############")
  //console.log(value)
  autoSave = ${Placeholders.AutoSave != null ? Placeholders.AutoSave : `autoSave`}
  if(!autoSave)
  {
    console.log("AutoSave is currently false")
    return
  }

  try {
    const currentCodeData = await getData(CurrentScreenId) 
    var newScreenData = currentCodeData != null ? {...currentCodeData} : null
    //const jsonValue = JSON.stringify(value)
    if(newScreenData != null)
      {    
        //if(newScreenData[key] != null)           // the key doesn't get removed otherwise and another object with same key is added
          //delete newScreenData[key]

        newScreenData[key] = value
      }
      
    else
      {
        newScreenData = {}
        newScreenData[key] = value
      }

      

      //console.log("############# Current screen  data with screen code "+ CurrentScreenId +" after updation #####################")
      //console.log(newScreenData)
    
     
    await AsyncStorage.setItem(CurrentScreenId, JSON.stringify(newScreenData))
    
    //console.log("######## stored key "+key+" with value #######")
  } catch (e) {
    // saving error
    console.log("################ Error saving value to asysync storage ###############")
    console.log(e)
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    //console.log("########### Got data from async storage ############")
    //console.log(jsonValue)
  } catch(e) {
    console.log("################ Error getting value from asysync storage ###############")
    console.log(e)
  }
}

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    // remove error
    console.log("################### Error in deleting record for key "+key)
    console.log(e)
  }

  console.log("Romoval of data for screen with ID " + key + "Done")
}

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
  console.log(' Clearing storage Done.')
}

const getCleanData = (currentScreenDataObject, FieldList = {}, DropdownList = {}, HybridDataObjects = {}, ChecklistDataObjects = {}, RadioButtonList = {}) => {


  console.log("############## Screen data object passed to getCleanData function ###################")
  console.log(currentScreenDataObject)

  var cleandataObject = {}

  if(currentScreenDataObject.screenBackgroundInfo != null)
    cleandataObject["screenBackgroundInfo"] = currentScreenDataObject.screenBackgroundInfo
  else
    console.log("############ No background information found for the screen to put in clean data ##################")

  if(currentScreenDataObject["FieldList"] == null)
    currentScreenDataObject["FieldList"] = FieldList
  
  if(currentScreenDataObject["DropdownList"] == null)
    currentScreenDataObject["DropdownList"] = DropdownList

  if(currentScreenDataObject["HybridDataObjects"] == null)
    currentScreenDataObject["HybridDataObjects"] = HybridDataObjects

  if(currentScreenDataObject["ChecklistDataObjects"] == null)
    currentScreenDataObject["ChecklistDataObjects"] = ChecklistDataObjects

  if(currentScreenDataObject["RadioButtonList"] == null)
    currentScreenDataObject["RadioButtonList"] = RadioButtonList

  Object.keys(currentScreenDataObject["FieldList"]).forEach(key => {
    cleandataObject[key] = currentScreenDataObject["FieldList"][key]
  })

  Object.keys(currentScreenDataObject["DropdownList"]).forEach(key => {
    cleandataObject[key] = currentScreenDataObject["DropdownList"][key]["SelectedValue"]["name"] != null ? currentScreenDataObject["DropdownList"][key]["SelectedValue"]["name"] : currentScreenDataObject["DropdownList"][key]["SelectedValue"]
  })

  Object.keys(currentScreenDataObject["HybridDataObjects"]).forEach(key => {
    cleandataObject[key] = currentScreenDataObject["HybridDataObjects"][key].filter(obj => {return obj.id != "-1"})
  })

  Object.keys(currentScreenDataObject["ChecklistDataObjects"]).forEach(key => {
    var currentChecklist = currentScreenDataObject["ChecklistDataObjects"][key].filter(obj => {return obj.id != "-1"})

  Object.keys(currentScreenDataObject["RadioButtonList"]).forEach(key => {
    cleandataObject[key] = currentScreenDataObject["RadioButtonList"][key]
  })

    var compactList = []
    for(var checklistObj of currentChecklist)
    {
      var compactObject = {"id": checklistObj["id"]}
        Object.keys(checklistObj).forEach(key => {
          if(checklistObj[key].type == null)
            return

            if(checklistObj[key].type == "textField")
            {
              compactObject[key] = checklistObj[key]["value"]
              return
            }
            if(checklistObj[key].type == "textInputField")
            {
              compactObject[key] = checklistObj[key]["value"]
              return
            }

            if(checklistObj[key].type == "dropdown")
            {
              compactObject[key] = checklistObj[key]["SelectedValue"].name != null ? checklistObj[key]["SelectedValue"].name : checklistObj[key]["SelectedValue"]
              return
            }

            if(checklistObj[key].type == "radioButton")
            {
              compactObject[key] = checklistObj[key]["value"]
              return
            }
          
          })
      
      compactList.push(compactObject)
    }

    cleandataObject[key] = compactList
  })

  return cleandataObject
}

${Placeholders.CodeSnippets["CustomDataModifierFunction"] != null ? Placeholders.CodeSnippets["CustomDataModifierFunction"] : `//Could be Some Code from placeholder`}


const GeneratedCode = (props) => {
  const [Sentence, SetSentence] = useState("")
  const [FieldList, SetFieldList] = useState(${JSON.stringify(TextInputObjectList)})
  const [DropdownList, SetDropdownList] = useState(${JSON.stringify(DropdownInputObjectList)})
  const [RadioButtonList, SetRadioButtonList] = useState(${JSON.stringify(RadioButtonSelectionObjectList)})
  const [HybridDataObjects, SetHybridDataObjects] = useState(${JSON.stringify(HybridDataObjects)})
  const [ChecklistDataObjects, SetChecklistDataObjects] = useState(${JSON.stringify(ChecklistDataObjects)})
  const [PlaceholderStates, SetPlaceholderStates] = useState(${JSON.stringify(Placeholders.StateVariables)})
  const [CompleteCurrentScreenData, SetCompleteCurrentScreenData] = useState("")
  const [DataLoaded, SetDataLoaded] = useState(false)
  

  var CurrentScreenId = -1
  var CurrentScreenBackgroundInfo = {}

  ${Placeholders.CodeSnippets["currentScreenBackgroundInfo"] != null ? Placeholders.CodeSnippets["currentScreenBackgroundInfo"]: `return "Value to come from Placeholder"`}
  

  useEffect(() => {

    
    
    getData(CurrentScreenId)
    .then(data => {
      //console.log("################ Data for screen code "+ CurrentScreenId + " ###################")
      //console.log(data)

      //console.log(JSON.stringify(data, null, 4))
      if(data != null)
        
        {
          data["screenBackgroundInfo"] = CurrentScreenBackgroundInfo
          SetCompleteCurrentScreenData(data)
        }
      else
        SetCompleteCurrentScreenData({"screenBackgroundInfo": CurrentScreenBackgroundInfo })

      
      

// ################# Extracting Text input fields from async storage into the states ##############
      if(data != null && data["FieldList"] != null)
        SetFieldList(data["FieldList"])

// ################## Extracting dropdowns information from async storage into the states #######################

      if(data != null && data["DropdownList"] != null)
        SetDropdownList(data["DropdownList"])
      else
      // ######################## fetching the dropdown information from api since nothing present in async stotage #########
      {
        var tasks = []
        var dropdownsListObject = {...DropdownList}
        Object.keys(dropdownsListObject).forEach((dropdownObjectName) => {

          tasks.push((async (dropdownObject) => {
          dropdownObject = dropdownsListObject[dropdownObjectName]

          if(dropdownObject.ValuesListUrl == "" || dropdownObject.ValuesListUrl == null)
          {
            console.log("############### Couldn't find working or valid url for dropdown: "+dropdownObjectName)
            return
          }
          // fetching configurations should come from placeholder, following is the default configuration
          const fetchConfig = {
              method: "POST",
                    body: JSON.stringify({
                      "basicparams": {
                          "companyID": 84,
                          "userID": 13
                      }
                  }),
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
          }
          const response = await fetch(dropdownObject.ValuesListUrl, fetchConfig)
          var body = await response.json()

          body = body.result != null ? body.result : body
                var modifiedList = []
                if(body.length != 0)
                {
                  var idKey = ""
                  var valueKey = ""
                  for(var key of Object.keys(body[0]))
                  { 
                    ${Placeholders.CodeSnippets["AQLObjectModifier"] != null ? Placeholders.CodeSnippets["AQLObjectModifier"] : `//Could be Some Code from placeholder`}
                    if(key.toString().toLowerCase().includes("id"))
                    {
                      idKey = key
                      continue
                    }
                    if(key.toString().toLowerCase().includes("name") || key.toString().toLowerCase().includes("value"))
                    {
                      valueKey = key
                      continue
                    }
                  }
                  if(body[0][idKey] != null && body[0][valueKey] != null)
                  {
                    for( var obj of body)
                    {

                      var modifiedObject = {...obj}
                      modifiedObject["id"] = obj[idKey].toString()
                      modifiedObject["value"] = obj[valueKey].toString()
                      modifiedObject["name"] = obj[valueKey].toString()
    
                      modifiedList.push(modifiedObject)
                    }
                  }
                }
    
                
                
                dropdownsListObject[dropdownObjectName]["ValuesList"] = modifiedList
                //console.log("########### "+ dropdownObjectName +"Dropdown object after calling its API #########")
                //console.log(dropdownsListObject[dropdownObjectName])

          })(dropdownObjectName))

        })     // Loop ends here

        Promise.all(tasks)
        .then(() => {
          SetDropdownList(dropdownsListObject)
          //storeData("DropdownList", dropdownObject, CurrentScreenId)
          //console.log("################## Setting dropdown list object to ###################")
          //console.log(dropdownsListObject)
        })
        .catch(e => {
          console.log("############### Error in fetching dropdown list information ##########")
          console.log(e)
        })

      }     // dropdown fetching ends here

// ######################################## dropdown fetching ends ###############################################

// ################## Extracting checklist information from async storage into the states ###########################
      if(data != null && data["ChecklistDataObjects"] != null)
      {
        //console.log("######################### Checklist object from async storage ###################")
        //console.log(data["ChecklistDataObjects"])
        SetChecklistDataObjects(data["ChecklistDataObjects"])
      }
      else
      {
        var newChecklistDataObjects = {...ChecklistDataObjects}
        const tasks = [];
        Object.keys(ChecklistDataObjects).forEach((checklistEntity) => {
          tasks.push(
            (async (checklistEntity) => {
              var ChecklistStructureInfoObject = ChecklistDataObjects[
                checklistEntity
              ].filter((obj) => obj.id == "-1")[0];
              //console.log("############ Checklist structure info object for " + checklistEntity +" ########");
              //console.log(ChecklistStructureInfoObject);
              if (
                ChecklistStructureInfoObject.ApiUrl == null ||
                ChecklistStructureInfoObject.ApiUrl == ""
              )
                return;
        
              var rowList = [];
              console.log(
                "########### Requesting url for checklist " +
                  checklistEntity +
                  "############"
              );
              console.log(ChecklistStructureInfoObject.ApiUrl);
        
              const response = await fetch(ChecklistStructureInfoObject.ApiUrl, {
                method: "POST",
                ${Placeholders.CodeSnippets["ChecklistApiFetch"] != null ? Placeholders.CodeSnippets["ChecklistApiFetch"]: `return "Value to come from Placeholder"`}
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              });
              // .then(response => response.json())
        
              const body = await response.json();
        
              const newRowlist = body.result != null ? body.result : body;
              //console.log("############# new rowlist for checklist named " +checklistEntity +" from api ##############");
              //console.log(newRowlist);
        
              rowList = rowList.concat(newRowlist);
        
             
    
              for (var i = 0; i < rowList.length; i++) {
                var newRowObject = { id: i.toString() };
        
                for (var column of Object.keys(ChecklistStructureInfoObject)) {
                  if (column == "id" || column == "ApiUrl") continue;
                  //console.log("################ row list object ##############")
                  //console.log(rowList[i])
                  if (ChecklistStructureInfoObject[column]["type"] == "textField") {
                    newRowObject[column] = {
                      type: "textField",
                      value: rowList[i][column],
                    };
                  }
                  if (
                    ChecklistStructureInfoObject[column]["type"] == "textInputField"
                  ) {
                    newRowObject[column] = {
                      type: ChecklistStructureInfoObject[column]["type"],
                      variableName: column + "_" + i,
                      value: ""
                    };
                  }
                  if (ChecklistStructureInfoObject[column]["type"] == "radioButton") {
                    newRowObject[column] = {
                      type: ChecklistStructureInfoObject[column]["type"],
                      variableName: column + "_" + i,
                      options: ChecklistStructureInfoObject[column]["options"],
                      value: ""
                    };
                  }
                  if (ChecklistStructureInfoObject[column]["type"] == "dropdown") {
                    newRowObject[column] = {
                      type: ChecklistStructureInfoObject[column]["type"],
                      variableName: column + "_" + i,
                      SelectedValue: "",
                      ValueListUrl: "",
                      ValuesList: ChecklistStructureInfoObject[column]["options"] ,
                    };
                  }
                }
        
                newChecklistDataObjects[checklistEntity].push(newRowObject);
                // SetChecklistDataObjects(newChecklistDataObjects)
                //ChecklistDataObjects[checklistEntity].push(newRowObject)
              }
            })(checklistEntity)
          );
        
        
        
        
        });
        
        Promise.all(tasks).then(() => {
            SetChecklistDataObjects(newChecklistDataObjects)
            //console.log("##################### newChecklistDataObjects ################")
            //console.log(newChecklistDataObjects)
          }).catch(e => {
            console.log("############## Error in fetching from APIs and adding rows to checklist #############")
            console.log(e)
          })
       
      }

// ########################################### fetching info from api for checklist ends ############################

// ################## Extracting hybrid information from async storage into the states ###########################
      if(data != null && data["HybridDataObjects"] != null)
      {
        //console.log("######################### Combined Hybrid object from async storage ###################")
        //console.log(data["HybridDataObjects"])
        SetHybridDataObjects(data["HybridDataObjects"])
      }

// ################## Extracting hybrid information from async storage into the states ###########################
      if(data != null && data["RadioButtonList"] != null)
      {
        //console.log("######################### Combined radio object from async storage ###################")
        //console.log(data["RadioButtonList"])
        SetRadioButtonList(data["RadioButtonList"])
      }


    })
    .then(() => {
      SetDataLoaded(true)
    })
    .catch( e => {
      console.log("################ Error in fetching data object for Screen Id: "+ CurrentScreenId)
      console.log(e)
    })

    
  }, [])
  

  return (
    <ScrollView 
    contentContainerStyle={{alignItems: "center"}}
    keyboardShouldPersistTaps="always"
    >
    {(() => {
      if(! DataLoaded)
          return (<View style = {{alignSelf: "center", alignItems: "center"}}><ActivityIndicator size="large" color={"green"} /></View>)
      })()}

       ${mainCode}

        <Text style={{color: "grey", fontSize: 20, fontWeight: "bold", marginVertical: 10}}>{Sentence}</Text>
    
    </ScrollView>
  );
};

{/*
  const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        paddingHorizontal: 15,
        borderColor: "grey",
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 5,
        color: "gray",
        fontSize: 15,
        fontWeight: "bold",
        borderRadius: 5,
        width: "100%"
       
       
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      openButton: {
        backgroundColor: "${secondaryColor}",
        borderRadius: 5,
        padding: 10,
        elevation: 10,

      }
});
*/}

export default GeneratedCode;

` 
code["style"] = `

import { StyleSheet } from "react-native"

export default StyleSheet.create({
  input: {
    borderWidth: 2,
    paddingHorizontal: 15,
    borderColor: "grey",
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 5,
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 5,
    width: "100%"
   
   
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  openButton: {
    backgroundColor: "${secondaryColor}",
    borderRadius: 5,
    padding: 10,
    elevation: 10,

  }
})

`
return code

}

codeGenerator(ObjectFromAPI)
.then(code => {
  // write to a new file named 2pac.txt
  fs.writeFile('/Users/geuser/Desktop/BluekaktusReactNativeScreens/src/screens/GeneratedCode.js', code["structure"], (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Screen structure code saved!');
  });

  fs.writeFile('/Users/geuser/Desktop/BluekaktusReactNativeScreens/assets/styles.js', code["style"], (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Screen style code saved!');
  });
})
.catch(error => {
  console.log("####### Error in writing file  ##########")
  console.log(error)
})

