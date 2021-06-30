const fs = require('fs');
const fetch = require("node-fetch")
var Placeholders = {}
try{
  const Placeholders = require("./placeholders").Placeholders
}
catch(error){
  console.log("################### Placeholder.js file not containing js appropriate code")
}


const ScreenName = `GeneratedCode`

const StylingLibrary = {
  "textInputField": {"backgroundColor": "white", "fontSize": 12, "height": 50, },
  "buttons": {"backgroundColor": "#10226A"}
}

const ColorSchemeLibrary = {
  "appSpecific": {
    "primaryColor": `#3d4081`,           //darkest
    "secondaryColor": `white`,         //darker
    "tertiaryColor": `#e6e6fa`           // light
  }, 

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
  },

  "red": {
    "primaryColor": `#dc143c`,
    "secondaryColor": `#ffc0cb`,
    "tertiaryColor": `#ffb6c1`
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
                          "editable": false
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
                  "editable": false
              },
              {
                  "name": "doneqty_val",
                  "title": "Done Quantity",
                  "size": "small",
                  "minLength": 0,
                  "maxLength": 100,
                  "defaultValue": "",
                  "editable": false
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
                  "editable": false,
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
                  "editable": false,
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
                  "type": "radioButton",
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

const codeGenerator = async (ObjectFromAPI, Placeholders = {}, ScreenName = ScreenName, colorScheme = "blue") => {

  var ColorScheme = ObjectFromAPI.colorScheme != null ? ObjectFromAPI.colorScheme : ColorSchemeLibrary[colorScheme] != null ? colorScheme : "blue"
  const primaryColor = ColorSchemeLibrary[ColorScheme].primaryColor
const secondaryColor = ColorSchemeLibrary[ColorScheme].secondaryColor
const tertiaryColor = ColorSchemeLibrary[ColorScheme].tertiaryColor

console.log("########Placeholder beimg used #########")
console.log(Placeholders)

if( ObjectFromAPI == null || ObjectFromAPI.viewObjects == null)
{
  console.log("################ Invalid screen object passed in code generator function in fileWriter.js #############")
  console.log(ObjectFromAPI)

  return "Invalid Screen code passed"
}

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
            borderWidth: ${ ViewObject.type == "hybrid" ? 2 : 0}, 
            borderColor: "grey", justifyContent: "center", 
            alignItems: "center", borderRadius: 7,
            backgroundColor: ${ViewObject.type == "radioButton" || ViewObject.type == "textInputField" || ViewObject.type == "dropdown"? `'${secondaryColor}'` : `'${tertiaryColor}'`},
            paddingVertical: 5,
            //elevation: 50,

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
              if(sampleObjectWithIdNegative1[key].title == null)       // These have to be ignored for screen heading
               continue
              ColumnHeadings.push(sampleObjectWithIdNegative1[key])
            }
            //console.log("############### Column headings #########")
            //console.log(ColumnHeadings)
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
              style={{paddingVertical: 5, flexDirection: "row", borderWidth: 1, borderColor: "#800080", borderRadius: 3, justifyContent: "flex-start",  alignItem: "center", alignItems: "center"}}
              renderItem = {({item}) => {
                
               

                  if(item["valueObject"].type == "radioButton")
                  {
                    const InputKey = item["valueObject"].variableName
                    return (
                      <SwitchSelector
                                    disabled={ViewMode == true}
                                    options={(() => {
                                      var Options = []
                                      for(var optionObject of item["valueObject"]["options"])
                                        Options.push({"label": optionObject.name, "value": optionObject.name})
                                      
                                      return Options
                                    })()}
                                    initial={(() => {

                                      var optionsList = item["valueObject"]["options"]
                                      var value = ChecklistDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id == item.rowId)[0][item.type]["value"]
                                      var index = -1
                                      for (var optionObject of optionsList)
                                      {
                                        if(optionObject.name.toLowerCase() == value.toLowerCase())
                                          return index + 1

                                        index = index + 1
                                      }
                                      return -1
                                    })()}
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
                                    textContainerStyle={{height: "100%"}}
                           />
                    )
                  }
                  if(item["valueObject"].type == "dropdown")
                  {
                    const InputKey = item["valueObject"].variableName
                    return (
                      <ModalDropdown 
                        disabled={ViewMode == true}
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
                      style={{...${JSON.stringify(StylingLibrary.textInputField)}, borderBottomColor:'black', paddingHorizontal: 15, fontSize: 10, borderBottomWidth: 1, marginHorizontal: 15, width: 90}}
                      placeholder={""}
                      placeholderTextColor={"grey"}
                      maxLength={50}
                      // onBlur={Keyboard.dismiss}
                      value={ChecklistDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id == item.rowId)[0][item.type]["value"]}    //item.type means the column(name)
                      editable={ViewMode != true}
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
      {(() => {
        if(HybridDataObjects["${ViewObject.name}"].length > 1)
          return (

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
                
                // Ignoring current hybrid block's blueprint object's (having id "-1" ) keys which are not strings and assumed to be not for Title (like files key, whose value is list)

                return Object.values(sampleObjectWithIdNegative1).filter((columnName) => columnName != "-1" && (typeof columnName == "string"))  
              })() }
              keyExtractor={(columnName) => columnName}
              contentContainerStyle = {{flexDirection: "row"}}
              renderItem = {({item}) => {
                return <Text numberOfLines={10} style={{marginHorizontal: 2, color: "white", width: 60, textAlign: 'center', fontWeight: "bold", fontSize: 10, }}>{item}</Text>
              }}
            />
          </View>

          )
      })()}
      
      <FlatList
        id="Table content"
        data={HybridDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id != "-1")}
        keyExtractor={(dataObject) => dataObject.id.toString()}
        contentContainerStyle = {{borderColor: "black",}}
        renderItem = {({item}) => {
          var currentRowObject = item
          var currentRowArray = []
          var i = 0
          for(var key of Object.keys(item))
          {
            if(typeof item[key] != "string")                      // Ignoring anything accept texts/strings. Add such conditions to ignore the display of certain keys in the table
              continue
            
              //Creating currentRowArray list to have a list of objects with each object representing a text on the table row 
            // id is to be used for flatlist id, value contains the text value which will be visible, type is the keyname of the text, 
            currentRowArray.push({"id": i.toString(), value: item[key], type: key})    //Modifying the current row object's data (key , value pairs) into an array to be used further by a flatlist
            i += 1
          }
          return (
            
            <FlatList 
              id="rowContent"
              data={currentRowArray}
              keyExtractor={(currentElementObject) => currentElementObject.id.toString()}
              style={{paddingVertical: 3, flexDirection: "row", borderWidth: 1, borderColor: "#800080", borderRadius: 3, justifyContent: "flex-start",  alignItem: "center", alignItems: "center"}}
              renderItem = {({item}) => {

                // ###################### Camera and deletion icons come when id comes while iteration #####################
                if(item.type == "id")
                  return (
                    <View style={{flexDirection: "row", marginRight: 3}}>
                      
                      
                      {(() => {
                        if(currentRowArray.length > 2)                  // Just a random condition, may be used to set other conditions
                          return (

                          
                          
                            <TouchableOpacity
                            id="######################################## Camera button ################################"

                            //style={{borderColor: "grey", borderWidth: 2, borderRadius: 5, paddingHorizontal: 5}}
                            onPress={() => {
                               
                                SetCameraMode("image")
                                CurrentHybridTableRowObject = currentRowObject
                                if(ViewMode == true)
                                {
                                  if(CurrentHybridTableRowObject.files != null && (CurrentHybridTableRowObject.files).filter((fileObject) => fileObject.fileType == "image").length != 0)
                                    SetFileModalVisibility(true)

                                }
                                else
                                {
                                     //Setting the reference to current row to the global variable to be used in storing image
                                
                                  
                                  if(CurrentHybridTableRowObject.files == null || (CurrentHybridTableRowObject.files).filter((fileObject) => fileObject.fileType == "image").length == 0)
                                    {

                                      Alert.alert(
                        
                                        'Image Source',
                                        'Select the source of Image',
                                        [
                                          {
                                            text: 'Camera',
                                            onPress: () => {
                                              if (!CameraPermission) {
                                              
                                                SetCameraOpen(false)
                                                Alert.alert('Camera Access denied')
                                                return 
                                              } 
                                              else
                                                SetCameraOpen(true)
                                            },
                             
                                          },
                                          {
                                            text: 'Gallery', 
                                            onPress: () => {openImagePickerAsync(ImageComment)}
                                          },
                                        ],
                                        {cancelable: true},
                                      )

                                    }
                                  else
                                    SetFileModalVisibility(true)
                                }
                                
                            }}
                    
                        >
                            <View id="Image icon" style={{flexDirection: "row", justifyContent: "flex-start"}}>
                              <Icon
                                  name='ios-camera'
                                  type='ionicon'
                                  color={"blue"}
                                  size={25}
                              />
                              {(() => {
                                  if(currentRowObject.files != null && (currentRowObject.files).filter((fileObject)=> fileObject.fileType == "image").length!=0)
                                  return(
                                      <View style={{alignSelf: "flex-start", backgroundColor: "red", borderRadius: 10}}>
                                          <Text style={{paddingHorizontal:3,  color: "white", fontSize: 10, fontWeight:"bold"}}>{(currentRowObject.files).filter((fileObject) => fileObject.fileType == "image").length}</Text>
                                      </View>
                                  )
                              })()}
                          </View>

                          </TouchableOpacity>   
                          )
                      })()}

                      
                      
                      <TouchableOpacity
                          id="###################################### videoRecorder ###################################"
                          style={{marginHorizontal: 5}}
                          onPress={() => {
                            SetCameraMode("video")
                            CurrentHybridTableRowObject = currentRowObject
                            
                            
                           
                            
                            if(ViewMode == true)
                            {
                              if(CurrentHybridTableRowObject.files != null && (CurrentHybridTableRowObject.files).filter((fileObject) => fileObject.fileType == "video").length != 0)
                                SetFileModalVisibility(true)

                            }
                            else
                            {
                                 //Setting the reference to current row to the global variable to be used in storing image
                            
                              
                              if(CurrentHybridTableRowObject.files == null || (CurrentHybridTableRowObject.files).filter((fileObject) => fileObject.fileType == "video").length == 0)
                                {

                                  Alert.alert(
                    
                                    'Video Source',
                                    'Select the source of Video',
                                    [
                                      {
                                        text: 'Camera',
                                        onPress: () => {
                                          if (!CameraPermission) {
                                          
                                            SetCameraOpen(false)
                                            Alert.alert('Camera Access denied')
                                            return 
                                          } 
                                          else
                                              SetCameraOpen(true)
                                            
                                        },
                         
                                      },
                                      {
                                        text: 'Gallery', 
                                        onPress: () => { console.log("######## Would select video from gallery")}
                                      },
                                    ],
                                    {cancelable: true},
                                  )

                                }
                              else
                                SetFileModalVisibility(true)
                            } 



                          }}
                  
                      >
                       
                        <View id="Image icon" style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        <Icon
                          name='videocam-sharp'
                          type='ionicon'
                          color={"blue"}
                          size={25}
                        />
                        {(() => {
                            if(currentRowObject.files != null && (currentRowObject.files).filter((fileObject) => fileObject.fileType == "video").length!=0)
                            return(
                                <View style={{alignSelf: "flex-start", backgroundColor: "red", borderRadius: 10}}>
                                    <Text style={{paddingHorizontal:3,  color: "white", fontSize: 10, fontWeight:"bold"}}>{(currentRowObject.files).filter((fileObject) => fileObject.fileType == "video").length}</Text>
                                </View>
                            )
                        })()}
                    </View>


                      </TouchableOpacity> 
                     

                      
                      
                      <TouchableOpacity
                          id=" ##################################### rowDeletion button ##################################"
                          style={{marginHorizontal: 5}}
                          onPress={() => {
                              if(ViewMode == true)
                                return

                              console.log("deletion will take place")
                              var newHybridDataObjects = {...HybridDataObjects}
                              newHybridDataObjects["${ViewObject.name}"] = newHybridDataObjects["${ViewObject.name}"].filter((rowObject) => rowObject.id != item.value )
                              storeData("HybridDataObjects", newHybridDataObjects,CurrentScreenId )
                              SetHybridDataObjects(newHybridDataObjects)

                          }}
                  
                      >
                        <Icon
                          name='trash-outline'
                          type='ionicon'
                          color={"red"}
                          size={25}
                        />
                      </TouchableOpacity> 
                     
                    </View>  
                  )
                return <Text numberOfLines={10} style={{marginHorizontal: 2, textAlign: 'center', width: 60, color: "grey", fontWeight: "bold", fontSize: 10,}}>{item.value}</Text>

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
     <View pointerEvents={ViewMode == true ? "none" : "auto"} id="subview${SubViewNumber}" style={{marginVertical: 5, borderWidth: 0, borderColor: "grey", justifyContent: "center", alignItems: "center"}}>
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
                   if(ViewMode == true)
                    return

                   var newDropdownList = {...DropdownList}
                   newDropdownList.${subViewObject.fields[componentNumber].name}["SelectedValue"] = selectedObject
                   ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
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
                   color:"grey"
          
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
                   color:"grey",
                 }}
                 itemsContainerStyle={{
                   //items container style you can pass maxHeight
                   //to restrict the items dropdown hieght
                   maxHeight: '100%',
                 }}
                 items={ViewMode == true ? [] : DropdownList["${subViewObject.fields[componentNumber].name}"].ValuesList}
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
        

          <TextInput
              label="${subViewObject.fields[componentNumber].title != null ? subViewObject.fields[componentNumber].title: subViewObject.fields[componentNumber].name}"
              keyboardType=${subViewObject.fields[componentNumber].inputType != null ? `"`+subViewObject.fields[componentNumber].inputType+`"` : `"default"`}
              maxLength={50}
              value={FieldList["${subViewObject.fields[componentNumber].name}"]}
              editable={${subViewObject.fields[componentNumber].editable != null ? subViewObject.fields[componentNumber].editable : true} && !ViewMode}
              style={{width: "${widthPerCompenent}", ...${JSON.stringify(StylingLibrary.textInputField)}}}
              onChangeText={(newValue) => {
                var newFieldList = {...FieldList}
                newFieldList["${subViewObject.fields[componentNumber].name}"] = newValue
                ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                SetFieldList(newFieldList)
            }}
            />

            `
          }


          if(subViewObject.type == "button")
          {
            newComponentCode = `
            <View style={{borderColor: "grey", borderRadius: 5, marginTop: 10, borderWidth: 0, width: "80%"}}>
              <TouchableOpacity
                style={{ ...styles.openButton, marginHorizontal: 10, marginVertical: 10, alignSelf: "center"}}
                onPress={() => {
                  
                  if(ViewMode == true)
                    return

                  var CurrentObjectId = null
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
                        CurrentObjectId = DropdownList[fieldName].SelectedValue.id
                        continue
                      }
                      if(fieldName in RadioButtonList)
                      {
                        newRowObject[fieldName] = RadioButtonList[fieldName]
                        
                        newRadioButtonList[fieldName] = ""
                        
                        continue
                      }
                    }
                    
                    if(CurrentObjectId == null)
                      newRowObject["id"] = (HybridDataObjects["${ViewObject.name}"].length).toString()
                    else
                      newRowObject["id"] = CurrentObjectId

                    var newHybridObjectList = {...HybridDataObjects}
                    newHybridObjectList["${ViewObject.name}"].push(newRowObject)
                    console.log("####### Adding new row to table for ${ViewObject.name} ############")
                    console.log(newRowObject)

                    console.log("############# Hybrid data object being stored for screen id "+ CurrentScreenId+" ##############")
                    console.log(newHybridObjectList)
                    
                    SetHybridDataObjects(newHybridObjectList)

                    SetFieldList(newFieldList)
                    SetRadioButtonList(newRadioButtonList)

                    ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[subViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
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
      <View pointerEvents={ViewMode == true ? "none" : "auto"} style={{flexDirection: "row"}}>
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
                ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[currentTextFieldObject.name] != null ? Placeholders.CodeSnippets[currentTextFieldObject.name]: `return "Value to come from Placeholder"`}
                
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
                   if(ViewMode == true)
                    return
                   var newDropdownList = {...DropdownList}
                   newDropdownList.${fieldName}["SelectedValue"] = selectedObject
                   ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                 
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
                   color:"grey"
          
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
                   color:"grey",
                 }}
                 itemsContainerStyle={{
                   //items container style you can pass maxHeight
                   //to restrict the items dropdown hieght
                   maxHeight: '100%',
                 }}
                 items={ViewMode == true ? [] : DropdownList["${ViewObject.fields[componentNumber].name}"].ValuesList}
                 //mapping of item array
                 //default selected item index
                 //"Select ${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}"
                 placeholder={DropdownList["${ViewObject.fields[componentNumber].name}"].SelectedValue == "" ? "Select ${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}" : "${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}: " + (DropdownList["${ViewObject.fields[componentNumber].name}"].SelectedValue.name != null ? DropdownList["${ViewObject.fields[componentNumber].name}"].SelectedValue.name : DropdownList["${ViewObject.fields[componentNumber].name}"].SelectedValue ) }
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
         

            <TextInput
              label="${ViewObject.fields[componentNumber].title != null ? ViewObject.fields[componentNumber].title :ViewObject.fields[componentNumber].name}"
              keyboardType=${ViewObject.fields[componentNumber].inputType != null ? `"`+ViewObject.fields[componentNumber].inputType+`"` : `"default"`}
              maxLength={50}
              value={FieldList["${ViewObject.fields[componentNumber].name}"]}
              editable={${ViewObject.fields[componentNumber].editable != null ? ViewObject.fields[componentNumber].editable : true} && !ViewMode}
              onChangeText = {(newValue) => {
                  
                  var newFieldsObject = {...FieldList}
                  newFieldsObject["${fieldName}"] = newValue
                  ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
                  

                  SetFieldList(newFieldsObject)
                  storeData("FieldList", newFieldsObject, CurrentScreenId)
              }}
              style={{width: "${widthPerCompenent}",  ...${JSON.stringify(StylingLibrary.textInputField)}}}
            />
            {/* ############################################ TEXTINPUT FIELD ${ViewObject.fields[componentNumber].name} ends ###################################################### */}
            `
          }
//################################################## RADIO BUTTON ##########################################
          if(ViewObject.type == "radioButton")
          {
            newComponentCode = `
          {/* ################################################## RADIO BUTTON ${ViewObject.name} ########################################## */}
            <View pointerEvents={ViewMode == true ? "none" : "auto"} style={{marginTop: 10, width: "80%", backgroundColor: "${tertiaryColor}"}}>
                <Text style={{color: "red", fontSize: 15, marginHorizontal: 10, marginTop: 10}}>${ViewObject.title != null ? ViewObject.title : ViewObject.name}</Text>
                <RadioButtonRN
                    style={{width: "80%", marginHorizontal: 25, marginBottom: 15, }}
                    textStyle={{marginHorizontal: 10, fontSize: 12, fontWeight: "bold", color: "grey"}}
                    disabled={ViewMode == true}
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
                   
                    ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[ViewObject.name] != null ? Placeholders.CodeSnippets[ViewObject.name] : "//Some code from placeholder"}
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
                onPress={ async () => {
                  if(ViewMode == true)
                    return

                  ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] != null ? Placeholders.CodeSnippets[ViewObject.fields[componentNumber].name] : "//Some code from placeholder"}
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

    // newFieldCollectionForHybridObject is a blueprint object which stores all the filednames mapped to their titles
    // The field names are control(key) names and in this abject their vlue is the Title, wjich becomes heading in the table for hybrid bloc
    // If there is some extra data which is not to be shown in table contents like files. its value must not be a string in this blueprint object
    // id is an exception for above rule and is explicitly handles in the flatlist for hybrid table heading
    var newFieldCollectionForHybridObject = {"id": "-1", "files": []}
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
                                                  "ValuesListUrl": Placeholders.ApiUrls != null && Placeholders.ApiUrls[field.name] != null ? Placeholders.ApiUrls[field.name] : field.valueListUrl != null ? field.valueListUrl : "",
                                                  "ValuesList": [{"id": "1", "name": "option1",}, {"id": "2", "name": "option2"}],
                                                  "FetchConfig": Placeholders.FetchConfigs != null && Placeholders.FetchConfigs[field.name] != null ? Placeholders.FetchConfigs[field.name] : {"method": "GET"},
                                                }
          newFieldCollectionForHybridObject[field.name] = field.title != null ? field.title : field.name
          //HybridDataObjects[viewObj.name][field.name] = []
        }
      }
      
    }
    newFieldCollectionForHybridObject["files"] = []
    HybridDataObjects[viewObj.name].push(newFieldCollectionForHybridObject)
  }              // block of hybrid ends here

  if(viewObj.type == "checklist")
  {
    ChecklistDataObjects[viewObj.name.toString()] = []
    // Put condition for all three of these to be not shown in column heading
    var newFieldCollectionForChecklistObject = {"id": "-1", 
                                                "ApiUrl":Placeholders.ApiUrls!= null && Placeholders.ApiUrls[viewObj.name] != null ?  Placeholders.ApiUrls[viewObj.name] : "no_checklist_url_supplied",
                                                "FetchConfig": Placeholders.FetchConfigs != null && Placeholders.FetchConfigs[viewObj.name] != null ? Placeholders.FetchConfigs[viewObj.name] : {"method": "GET"}, 
                                              }
 
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
                                              "ValuesListUrl": Placeholders.ApiUrls != null && Placeholders.ApiUrls[field.name] != null ? Placeholders.ApiUrls[field.name] : field.valueListUrl != null ? field.valueListUrl : "",
                                              "ValuesList": [{"id": "1", "name": "option1",}, {"id": "2", "name": "option2"}],
                                              "FetchConfig": Placeholders.FetchConfigs != null && Placeholders.FetchConfigs[field.name] != null ? Placeholders.FetchConfigs[field.name] : {"method": "GET"},
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
import React, { useState, useEffect, useRef} from "react";
import {StyleSheet,Text,View, TouchableOpacity, FlatList, ScrollView, Alert, ActivityIndicator, Modal, ImageBackground, Button} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown'
import { Dimensions } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native'
import SwitchSelector from "react-native-switch-selector"
import { TextInput } from 'react-native-paper'
import ModalDropdown from 'react-native-modal-dropdown'
import {Camera} from 'expo-camera'
import { Icon } from 'react-native-elements'
import * as ImagePicker from "expo-image-picker"
import * as ImageManipulator from 'expo-image-manipulator'
import moment from "moment"

import { Audio, Video, AVPlaybackStatus } from 'expo-av'

import AsyncStorage from '@react-native-async-storage/async-storage'

${Placeholders.ScreenSpecificImports != null ? Placeholders.ScreenSpecificImports: "//Screen specific imports from placeholder could be here"}

const screenFunctions = ${ObjectFromAPI.functions}

const storeData = async (key, value, CurrentScreenId, autoSave = true, explicitSave = false) => {
  //console.log("#################### screen id recieved in storeData function #############")
  //console.log(CurrentScreenId)
  //console.log("##################### value recieved in storeData function ##############")
  //console.log(value)
  autoSave = ${Placeholders.AutoSave != null ? Placeholders.AutoSave : `autoSave`}
  if(!autoSave && !explicitSave)
  {
    console.log("AutoSave is currently false")
    return
  }

  if(explicitSave == true)
  {
    console.log("######## Saving data explicitcly at screen ID "+CurrentScreenId+"############")
  }

  try {
    const currentCodeData = await getScreenDataFromAsyncStorage(CurrentScreenId.toString()) 
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

const getScreenDataFromAsyncStorage = async (key) => {
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

  //if(currentScreenDataObject["FieldList"] == null)
    currentScreenDataObject["FieldList"] = FieldList
  
  //if(currentScreenDataObject["DropdownList"] == null)
    currentScreenDataObject["DropdownList"] = DropdownList

  //if(currentScreenDataObject["HybridDataObjects"] == null)
    currentScreenDataObject["HybridDataObjects"] = HybridDataObjects

  //if(currentScreenDataObject["ChecklistDataObjects"] == null)
    currentScreenDataObject["ChecklistDataObjects"] = ChecklistDataObjects

  //if(currentScreenDataObject["RadioButtonList"] == null)
    currentScreenDataObject["RadioButtonList"] = RadioButtonList

  Object.keys(currentScreenDataObject["FieldList"]).forEach(key => {
    cleandataObject[key] = currentScreenDataObject["FieldList"][key]
  })

  Object.keys(currentScreenDataObject["DropdownList"]).forEach(key => {
    cleandataObject[key] = currentScreenDataObject["DropdownList"][key]["SelectedValue"]
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


const SaveOfflineAsyncStorage = async (CurrentScreenId, FieldList, DropdownList, HybridDataObjects, ChecklistDataObjects, RadioButtonList) => {
  CurrentScreenId = CurrentScreenId.toString()
  await storeData("RadioButtonList", RadioButtonList, CurrentScreenId, true, true)
  await storeData("ChecklistDataObjects", ChecklistDataObjects, CurrentScreenId, true, true)
  await storeData("HybridDataObjects", HybridDataObjects, CurrentScreenId, true, true)
  await storeData("DropdownList", DropdownList, CurrentScreenId, true, true)
  await storeData("FieldList", FieldList, CurrentScreenId, true, true)

}

${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets["CustomDataModifierFunction"] != null ? Placeholders.CodeSnippets["CustomDataModifierFunction"] : `//Could be Some Code from placeholder`}

var CurrentHybridTableRowObject = {}  // This global variable is declared outside the screen function because if inside the screen function, 
                                      //it will get reinitialized and loose its data everytime some state changes
                                      // Modifying this reference also modifies the state since it is a refernce to an object of HybriddataObjects' subobject

const ${ScreenName} = (props) => {
  const [Sentence, SetSentence] = useState("")
  const [FieldList, SetFieldList] = useState(${JSON.stringify(TextInputObjectList)})
  const [DropdownList, SetDropdownList] = useState(${JSON.stringify(DropdownInputObjectList)})
  const [RadioButtonList, SetRadioButtonList] = useState(${JSON.stringify(RadioButtonSelectionObjectList)})
  const [HybridDataObjects, SetHybridDataObjects] = useState(${JSON.stringify(HybridDataObjects)})
  const [ChecklistDataObjects, SetChecklistDataObjects] = useState(${JSON.stringify(ChecklistDataObjects)})
  const [PlaceholderStates, SetPlaceholderStates] = useState(${JSON.stringify(Placeholders.StateVariables)})
  const [CompleteCurrentScreenData, SetCompleteCurrentScreenData] = useState("")
  const [DataLoaded, SetDataLoaded] = useState(false)
  const [RowsDatabaseViewMode, SetRowsDatabaseViewMode] = useState([])
  const [ViewMode, SetViewMode] = useState(props.route.params.screenInformation.ViewMode)
  const [CameraOpen, SetCameraOpen] = useState(false)
  const [CameraPressed, SetCameraPressed] = useState(false)
  const [FileModalVisibility, SetFileModalVisibility] = useState(false)
  const [CameraPermission, SetCameraPermission] = useState(false)
  const [GalleryPermission, SetGalleryPermission] = useState(false)
  const [ImageComment, SetImageComment] = useState("")
  const [RecordingVideo, SetRecordingVideo] = useState(false)
  const [CameraMode, SetCameraMode] = useState("image")
  const [VideoPlayStatus, SetVideoPlayStatus] = useState({})
  const VideoReference = useRef(null);
  

  // ######### Global variables/objects ################
  
  
  var CurrentScreenId = "0"
  var CurrentScreenBackgroundInfo = {}
  var cameraReference = null



  ${Placeholders["currentScreenBackgroundInfo"] != null ? Placeholders["currentScreenBackgroundInfo"]: `// Code to set screen background information to come from Placeholder`}
  
  ${Placeholders["DatabaseIntegration"] != null && Placeholders["DatabaseIntegration"] != null ? Placeholders["DatabaseIntegration"]: `// Code to set database configuration from Placeholder`}
  
  //###################################################### database integration ############################################


  const DeleteAllRows = async (tableName) => {
    let query = "delete from "+tableName
    await db.transaction((tx) => {
    tx.executeSql(
      query,
      [],
      (txObj, resultSet) => {
        
        console.log("Deleted all rows from "+tableName);
        console.log(resultSet)
      },
      (txObj, error) => {
        console.log("Error in deleting data from "+tableName, error);
      }
    )

    })
  }

  const ViewTableList = async () => {
    let query = "SELECT * FROM sqlite_master where type='table'"
    let result = []
   
    await  db.transaction(async (tx) => {
    await  tx.executeSql(
      query,
      [],
      async (txObj, resultSet) => {
        
        console.log("Selected all tables from the current database");
        console.log(resultSet["rows"]["_array"])
        //return resultSet["rows"]["_array"]
        //SetRowsDatabaseViewMode(resultSet["rows"]["_array"])
      
      },
      async (txObj, error) => {
        console.log("Error in fetching tables list ", error);
      }
    )

    })

  }

  const updateTable = async (tableName, query) => {

    if(db == null)
    {
      console.log("########## couldn't update the table "+ tableName+" as db reference is null ###########")
      return []
    }
    
    return new Promise((resolve, reject) => {
      db.transaction(async (tx) => {
        tx.executeSql(
          query,
          [],
          (txObj, resultSet) => {
            
            console.log("Updated "+tableName);
            console.log(resultSet["rows"]["_array"])
            resolve(resultSet["rows"]["_array"])
            
          
          },
          (txObj, error) => {
            console.log("Error in updating data in "+tableName, error)
            reject("Error in updating data in "+tableName);
            
          }
        )
  
      })
    })

  }
  const getAllRows = async (tableName) => {

    if(db == null)
    {
      console.log("########## couldn't populate the components from database as db reference is null ###########")
      return []
    }
    let query = "select * from "+tableName
    return new Promise((resolve, reject) => {
      db.transaction(async (tx) => {
        tx.executeSql(
          query,
          [],
          (txObj, resultSet) => {
            
            console.log("Selected all rows from "+tableName);
            console.log(resultSet["rows"]["_array"])
            resolve(resultSet["rows"]["_array"])
            
          
          },
          (txObj, error) => {
            console.log("Error in fetching data from "+tableName, error);
            resolve([])
          }
        )
  
      })
    })
  }
  const ViewTable = async (tableName) => {
    let query = "select * from "+tableName
    let result = []
   
    db.transaction(async (tx) => {
      tx.executeSql(
        query,
        [],
        (txObj, resultSet) => {
          
          console.log("Selected all rows from "+tableName);
          console.log(resultSet["rows"]["_array"])
          //return resultSet["rows"]["_array"]
          //SetRowsDatabaseViewMode(resultSet["rows"]["_array"])
        
        },
        (txObj, error) => {
          console.log("Error in fetching data from "+tableName, error);
        }
      )

    })

  }

  //ViewTable(componentsDataTableName)
  //ViewTableList()

  const SaveInspectionDataOfflineSQL = async (data, stringifiedFilesList = "stringifiedFilesList", stringifiedRequestObject = "someRequestObject") => {

    if(db == null)
    {
      console.log("database reference found to be null. Couldn't save to database")
      return
    }
    if(formDataTable == null)
    {
      console.log("############### Couldn't save data in database: formDataTable object coming out null ##############")
      return
    }
    for (let keyName of ["userId", "companyId", "date", "formId", "status", "files", "formData"])
    {
        if(formDataTable[keyName] == null)
        {
          console.log("################# Couldn't save data in database: formdataTable needs to have "+keyName+" key ##############")
          return
        }
    }
   
    await db.transaction((tx) => {
      let query = "UPDATE "+formDataTable.tableName+" SET "
      + formDataTable.formData + " = ?, "
      + formDataTable.files + " = ?, "
      + formDataTable.requestJSON + " = ? "
      + "WHERE " 
      + formDataTable.formId + " = ?" 

      console.log("############ formDataTable insertion query #################")
      console.log(query)
    
      let inputArray = [
        JSON.stringify(data),
        stringifiedFilesList, 
        stringifiedRequestObject,
        CurrentScreenId
      ]
    
      //let testDataArray = [userId, 1, moment().format("DD-MM-YYYY"), "testFormId", "testSatus", 12, "testFiles", "testFormData"]

      console.log("#######Final Query : ", query);
      //console.log("########Input Array : ", testDataArray);
      tx.executeSql(
        query,
        inputArray,
        //testDataArray,
        (txObj, resultSet) => {
          
          console.log(" ################ Inserted Date data successfully in database #################");
        },
        (txObj, error) => {
          
          console.log("Error in inserting  new data", error);
        }
      );
    });
  };



  // Code to create table if it doesn't exist
  {/*
  React.useEffect(() => {
    
    if(db == null)
      return 
    if(formDataTable == null)
    {
      console.log("############### Couldn't save data in database: formDataTable object coming out null ##############")
      return
    }
    for (let keyName of ["userId", "companyId", "date", "formId", "status", "files", "formData"])
    {
        if(formDataTable[keyName] == null)
        {
          console.log("################# Couldn't save data in database: formdataTable needs to have "+keyName+" key ##############")
          return
        }
    }
    
    db.transaction((tx) => {
      let query = "create table if not exists "+formDataTable.tableName+" ("
      +formDataTable.userId+" integer," 
      +formDataTable.companyId+" integer," 
      +formDataTable.date+" text," 
      +formDataTable.formId+" text,"
      +formDataTable.status+" text,"
      +formDataTable.files+" text,"
      +formDataTable.formData+" text, primary key("
        +formDataTable.date+","
        +formDataTable.companyId+","
        +formDataTable.userId+"))"

        console.log("Table creation query : ",query)
      tx.executeSql(
          query,
          [],
          (txObj, resultSet) => {
           
            console.log("############ Successfully created formData table #########");
          },
          (txObj, error) => {
            console.log("########### Error in creating formData table ############", error);
          }
      );
    });
  }, []);

*/}


  // ######################################################## database integration end ######################################


  const ModifyFetchConfig = (FetchConfig) => {

        if(FetchConfig.method != null && FetchConfig.method.toLowerCase() == "get")
        {
          console.log("############ fetch config left to defeault value as none specified through placeholder #########")
          return
        }
        for(var key of Object.keys(FetchConfig.body != null ? FetchConfig.body: {}))
          {
            if((FetchConfig["body"][key]).toString() in CurrentScreenBackgroundInfo)
              FetchConfig["body"][key] = CurrentScreenBackgroundInfo[FetchConfig["body"][key].toString()]
          }

          FetchConfig["body"] = JSON.stringify(FetchConfig["body"] != null ? FetchConfig["body"] : {})
          
          for(var key of Object.keys(FetchConfig.headers != null ? FetchConfig.headers: {}))
          {
            if(key == "Authorization")
            {
              var AuthObject = FetchConfig.headers["Authorization"]   // type,value being sent from placeholder
              var TokenType = (AuthObject["type"]).toString()
              var TokenValue = (AuthObject["value"]).toString() in CurrentScreenBackgroundInfo ? CurrentScreenBackgroundInfo[(AuthObject["value"]).toString()] : (AuthObject["value"]).toString()
              FetchConfig.headers["Authorization"] = TokenType + " " + TokenValue 
              continue
            }

            if((FetchConfig["headers"][key]).toString() in CurrentScreenBackgroundInfo)
              FetchConfig["headers"][key] = CurrentScreenBackgroundInfo[FetchConfig["headers"][key].toString()]
          }

      }

      const openImagePickerAsync = async (fileComment) => {
       
    
        if (GalleryPermission === false) {
          alert("Permission to gallery not granted");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [500, 250],
        });
        
        if(pickerResult.uri == null)
        {
          console.log("############# Image selection from gallery cancelled ##############")
          return
        }
        {/*
        var newImageObject = {
            
            name: pickerResult.uri.split("/").pop(),
            type: "image/jpeg",
            uri: pickerResult.uri
          }
        */}
    
        const resizedPhoto = await ImageManipulator.manipulateAsync(
        pickerResult.uri,
        // [{ resize: { width: 300, height: 250} }], // resize to width of 300 and preserve aspect ratio 
        [],
        { compress: 0.2, format: 'jpeg' },
        );

    
        if(!("files"in CurrentHybridTableRowObject))
          CurrentHybridTableRowObject["files"] = []

        var newImageObject = {"fileName": resizedPhoto.uri, "fileUri": resizedPhoto.uri, "fileComment": fileComment, fileType: "image"}
        CurrentHybridTableRowObject["files"].push(newImageObject)

        SetHybridDataObjects({...HybridDataObjects})

  
      }

  const takePicture = async (imageComment = "") => {
    if (!cameraReference) 
    {
      console.log("############# Camera reference couldn't be set ##################")
      return
    }
    SetCameraPressed(true)
    const photo = await cameraReference.takePictureAsync()
    console.log("################## Image uri of newly clicked image ############## " )
    console.log(photo.uri)
    SetCameraOpen(false)
    //props.callback(photo, props.currentDefectObject)
    console.log("##################### Current hybrid row object ###############")
    console.log(CurrentHybridTableRowObject)
    //CurrentHybridTableRowObject["maindefect"] = "chutmaar department"

    if(!("files"in CurrentHybridTableRowObject))
     CurrentHybridTableRowObject["files"] = []

    var newImageObject = {"fileName": photo.uri, "fileUri": photo.uri, "fileComment": imageComment, fileType: "image"}
    CurrentHybridTableRowObject["files"].push(newImageObject)

    SetHybridDataObjects({...HybridDataObjects})
  }

  const RecordVideo = async () => {

    if (!cameraReference) 
    {
      console.log("############# Camera reference couldn't be set ##################")
      return
    }

    if(!RecordingVideo)
      cameraReference.stopRecording()
    

   
     var video = await cameraReference.recordAsync({mute: true, quality : "480p"})
     console.log("################# Recorded video ##################")
     console.log(video)

     if(!("files"in CurrentHybridTableRowObject))
     CurrentHybridTableRowObject["files"] = []

      var newVideoObject = {"fileName": (video.uri).split("/").pop(), "fileUri": video.uri, "fileComment": "", fileType: "video"}
      CurrentHybridTableRowObject["files"].push(newVideoObject)

      SetHybridDataObjects({...HybridDataObjects})

  }


  // ############################################# function to get data from database with current form ID ##############################
  
  const getFormDataFromDb = async (tableName, formId) => {

    if(db == null)
    {
      console.log("######## database reference found to be null #############")
      return []
    }
    if(tableName == null)
    {
      console.log("########## undefined table name recieved in getFormDataFromDb function ##############")
      return []
    }
    let query = "select * from "+tableName+" where formId='"+formId+"'"
    console.log("### Query to fetch data with form ID "+formId+" ####")
    console.log(query)
    return new Promise((resolve, reject) => db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (txObj, resultSet) => {
          
          console.log("Selected all rows from "+tableName+" with formId"+formId);
          
          //SetRowsDatabaseViewMode(resultSet["rows"]["_array"][0]["formData"])
          //console.log("######### Current form ID data ########")
          //console.log(JSON.parse(resultSet["rows"]["_array"][0]["formData"]))
          //populateForm(JSON.parse(resultSet["rows"]["_array"][0]["formData"]))
          resolve(resultSet["rows"]["_array"])
        },
        (txObj, error) => {
          console.log("Error in fetching data from "+tableName+" with formId "+formId, error);
          resolve([])
        }
      )

      }) )
    
    }
// ##################################### Function to populate form's components (checklists and dropdowns) from database ########################################

const populateComponentsFromDB = async (componentsDataObjectList, notTobePopulatedComponentTypes = []) => {


  console.log("############### Seraching components' data from database  ##############")

  let newChecklistDataObjects = {...ChecklistDataObjects}
  let newDropdownsListObject = {...DropdownList}
  let componentsTraversed = []
  for (let componentDataObject of componentsDataObjectList)
  {
    if(notTobePopulatedComponentTypes.includes(componentDataObject.componentType))
      continue
    if(componentsTraversed.includes(componentDataObject.componentName + " " +componentDataObject.componentType))
      continue

    componentsTraversed.push(componentDataObject.componentName +" "+ componentDataObject.componentType)
    if(componentDataObject.componentType == "checklist")
    {

      let ChecklistStructureInfoObject = ChecklistDataObjects[
        componentDataObject.componentName
      ].filter((obj) => obj.id == "-1")[0]

      let rowList = JSON.parse(componentDataObject.componentData)

      for (var i = 0; i < rowList.length; i++) {
        let newRowObject = { id: rowList[i].id != null ? rowList[i]["id"].toString() : i.toString() }; //if id is coming from the api, use that

        for (let column of Object.keys(ChecklistStructureInfoObject)) {
          if (column == "id" || column == "ApiUrl" || column == "FetchConfig") continue;
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

        newChecklistDataObjects[componentDataObject.componentName].push(newRowObject);
      
      }
      
    }
    else if(componentDataObject.componentType == "dropdown")
      { // ############################# if dropdown type component #########################

        
        let dropdownValueList = JSON.parse(componentDataObject.componentData)
        let modifiedList = []
        if(dropdownValueList.length != 0)
        {
          var idKey = ""
          var valueKey = ""
          for(var key of Object.keys(dropdownValueList[0]))
          { 
            {/*
            ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets["AQLObjectModifier"] != null ? Placeholders.CodeSnippets["AQLObjectModifier"] : `//Could be Some Code from placeholder`}
            */}
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
          if(dropdownValueList[0][idKey] != null && dropdownValueList[0][valueKey] != null)
          {
            for( let obj of dropdownValueList)
            {

              var modifiedObject = {...obj}
              modifiedObject["id"] = obj[idKey].toString()
              modifiedObject["value"] = obj[valueKey].toString()
              modifiedObject["name"] = obj[valueKey].toString()

              modifiedList.push(modifiedObject)
            }
          }
        }

        newDropdownsListObject[componentDataObject.componentName]["ValuesList"] = modifiedList
      }
      
    }

  SetChecklistDataObjects(newChecklistDataObjects)
  SetDropdownList(newDropdownsListObject)

}

  // ##################################################### Function to populate form's dropdowns and checklists  with data from api or async storage ##################################
  const populateFormWithApiAsyncStorate = async (data) => {

    

    console.log("################ Data for screen code "+ CurrentScreenId + " in async storage ###################")
    console.log(data)

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
      console.log("######################## fetching the dropdown information from api since nothing present in async stotage #########")
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
        // fetching configurations should come from placeholder
        
        
        // ############################# Evaluating the fetch config's variable names passed as strings from placeholder ########
            var FetchConfig = dropdownObject.FetchConfig
            ModifyFetchConfig(FetchConfig)

            console.log("################ fetch config created for dropdown "+dropdownObjectName+" ############")
            console.log(FetchConfig)


        const response = await fetch(dropdownObject.ValuesListUrl, FetchConfig)
        var body = await response.json()
        console.log("########################## Data recieved from API for dropdown "+dropdownObjectName+" ###########")
        console.log(body)

        body = body.result != null ? body.result : body
              var modifiedList = []
              if(body.length != 0)
              {
                var idKey = ""
                var valueKey = ""
                for(var key of Object.keys(body[0]))
                { 
                  ${Placeholders.CodeSnippets != null && Placeholders.CodeSnippets["AQLObjectModifier"] != null ? Placeholders.CodeSnippets["AQLObjectModifier"] : `//Could be Some Code from placeholder`}
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

      // ############################ Even if a single dropdown fetching fails, none of the dropdown list will be populated ####
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

   if(data != null && data["ChecklistDataObjects"] != null )
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
              
            // ############################# Evaluating the fetch config's variable names passed as strings from placeholder ########
            var FetchConfig = ChecklistStructureInfoObject.FetchConfig
            
            ModifyFetchConfig(FetchConfig)

            console.log("################ fetch config created for checklist "+checklistEntity+" ############")
            console.log(FetchConfig)
            
            const response = await fetch(ChecklistStructureInfoObject.ApiUrl, FetchConfig );
            // .then(response => response.json())
      
            const body = await response.json();
      
            const newRowlist = body.result != null ? body.result : body;
            //console.log("############# new rowlist for checklist named " +checklistEntity +" from api ##############");
            //console.log(newRowlist);
      
            rowList = rowList.concat(newRowlist);
      
           
  
            for (var i = 0; i < rowList.length; i++) {
              var newRowObject = { id: rowList[i].id != null ? rowList[i]["id"].toString() : i.toString() }; //if id is coming from the api, use that
      
              for (var column of Object.keys(ChecklistStructureInfoObject)) {
                if (column == "id" || column == "ApiUrl" || column == "FetchConfig") continue;
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
      
      // ############################ Even if a single checklist fetching fails, none of the checklist will be populated ####
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

  }


// ######################################### Function to populate the form from a json object which may come from API or database (in View Mode) ##########

  const populateForm = async (screenData) => {
    //SetDataLoaded(true)

  console.log("############## screen data recieved in populateForm function ####################")
  console.log(screenData)

  var newFieldList = {...FieldList}
  var newDropdownList = {...DropdownList}
  var newRadioButtonList = {...RadioButtonList}
  var newHybridDataObjects = {...HybridDataObjects}
  var newChecklistDataObjects = {...ChecklistDataObjects}

  Object.keys(screenData).forEach((key) => {

    if(key in ChecklistDataObjects)
    {

      var ChecklistStructureInfoObject = ChecklistDataObjects[key].filter((obj) => obj.id == "-1")[0]

      var rowList = screenData[key]

      for (var i = 0; i < rowList.length; i++) {
        var newRowObject = { id: rowList[i].id != null ? rowList[i]["id"].toString() : i.toString() }; //if id is coming from the api, use that

        for (var column of Object.keys(ChecklistStructureInfoObject)) {
          if (column == "id" || column == "ApiUrl") continue;
          //console.log("################ row list object ##############")
          //console.log(rowList[i])
          if (ChecklistStructureInfoObject[column]["type"] == "textField") {
            newRowObject[column] = {
              type: "textField",
              value: (rowList[i][column]).toString(),
            };
          }
          if (
            ChecklistStructureInfoObject[column]["type"] == "textInputField"
          ) {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              value: (rowList[i][column]).toString()
            };
          }
          if (ChecklistStructureInfoObject[column]["type"] == "radioButton") {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              options: ChecklistStructureInfoObject[column]["options"],
              value: (rowList[i][column]).toString()
            };
          }
          if (ChecklistStructureInfoObject[column]["type"] == "dropdown") {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              SelectedValue: rowList[i][column],
              ValueListUrl: "",
              ValuesList: ChecklistStructureInfoObject[column]["options"] ,
            };
          }
        }

        newChecklistDataObjects[key].push(newRowObject);

      }
      return
    }

    if(key in HybridDataObjects)
    {
      var blueprintObject = {}
      for(var obj of newHybridDataObjects[key])
      {
        if(obj["id"] == "-1")
        {
          blueprintObject = obj
          break
        }
      }
      var newCurrentHybridList = []
      newCurrentHybridList.push(blueprintObject)
      for(var obj of screenData[key])
      {
        var newObj = {}
        for(var keyName of Object.keys(blueprintObject))
        {
          if(keyName == "id")
            continue
          newObj[keyName] = obj[keyName]
        }
        newObj["id"] = obj["id"]
        if(newObj["files"] ==  null)
          newObj["files"] = []
        newCurrentHybridList.push(newObj)
      }
      newHybridDataObjects[key] = newCurrentHybridList
      console.log("############### new hybrid list for "+key+" ################")
      console.log(newHybridDataObjects)
      return
    }

    if(key in FieldList)
    {
      newFieldList[key] = (screenData[key]).toString()
      return
    }

    if(key in DropdownList)
    {
      console.log("################# Dropdown "+key+" found to have value "+screenData[key] +"from api #############")
      newDropdownList[key]["SelectedValue"] = screenData[key]
      return
    }

    if(key in RadioButtonList)
    {
      newRadioButtonList[key] = (screenData[key]).toString()
      return
    }

    
  })

  SetFieldList(newFieldList)
  SetDropdownList(newDropdownList)
  SetRadioButtonList(newRadioButtonList)
  SetHybridDataObjects(newHybridDataObjects)
  SetChecklistDataObjects(newChecklistDataObjects)



    //############################# populated form with data inside populateForm function ####################
  }


 

  useEffect(() => {

    // ###################################### code for showing data in view mode ###########################################


    var ViewApiUrlFromPlaceholder = ${Placeholders.ApiUrls != null && Placeholders.ApiUrls["ViewDataApi"] != null ? `"${Placeholders.ApiUrls["ViewDataApi"]}"`: `""`}
     
    
    if( !ViewMode)
      return


    (async () => {

      //fetching screen data from api 
      var ScreenDataFromApi = {}

      try{

        console.log("##################### Api Url passed ################### "+ViewApiUrlFromPlaceholder)
        console.log("#################### request object for view api ##############")
        console.log(props.route.params.screenInformation["requestObjectForViewData"])
      
          const { data } = await axios.post(ViewApiUrlFromPlaceholder, props.route.params.screenInformation["requestObjectForViewData"])
          console.log("############## Data recieved for current screen in view mode from api ##################")
          console.log(data)
          ScreenDataFromApi = (data.result)[0]

        }
        catch(e){
          console.log("########## Error in fetching form data drom api in view mode ############")
          console.log(e)
        }
        
      try{
        await populateForm(ScreenDataFromApi)
        SetDataLoaded(true)
        
      }
      catch(e){
        console.log("################## Error in populating the screen with data from API ########")
        console.log(e)
      }
    
    })()


   

    var SampleScreenDataFromApi = {
      "aqllevel": {
        "aqlDtDetails":[
          {
            "grade": "C",
            "majorAcceptance": 1,
            "maxValue": 15,
            "minValue": 9,
            "minorAcceptance": 2,
            "sampleSize": 3,
          },
          {
            "grade": "D",
            "majorAcceptance": 2,
            "maxValue": 25,
            "minValue": 16,
            "minorAcceptance": 3,
            "sampleSize": 8,
          },
          {
            "grade": "E",
            "majorAcceptance": 3,
            "maxValue": 51,
            "minValue": 26,
            "minorAcceptance": 4,
            "sampleSize": 13,
          },
          {
            "grade": "F",
            "majorAcceptance": 5,
            "maxValue": 90,
            "minValue": 51,
            "minorAcceptance": 6,
            "sampleSize": 20,
          },
          {
            "grade": "G",
            "majorAcceptance": 7,
            "maxValue": 150,
            "minValue": 91,
            "minorAcceptance": 8,
            "sampleSize": 32,
          },
          {
            "grade": "H",
            "majorAcceptance": 10,
            "maxValue": 280,
            "minValue": 151,
            "minorAcceptance": 11,
            "sampleSize": 50,
          },
          {
            "grade": "J",
            "majorAcceptance": 14,
            "maxValue": 500,
            "minValue": 281,
            "minorAcceptance": 15,
            "sampleSize": 80,
          },
          {
            "grade": "K",
            "majorAcceptance": 21,
            "maxValue": 1200,
            "minValue": 501,
            "minorAcceptance": 22,
            "sampleSize": 125,
          },
        ],
        "aqlLevel": 10,
        "id": "10",
        "minorToMajorValue": 3,
        "name": "10",
        "value": "10",
      },
      "auditchecklist": [
        {
          "id": "123",
          "name": "Print",
          "remarks": "Okay",
          "result": "Ok",
        },
        {
          "id": "111",
          "name": "Embroidery",
          "remarks": "Not okay",
          "result": "Not Ok",
        },
        {
          "id": "110",
          "name": "Embellishment",
          "remarks": "",
          "result": "",
        },
        {
          "id": "106",
          "name": "Button",
          "remarks": "",
          "result": "",
        },
        {
          "id": "128",
          "name": "Zipper",
          "remarks": "",
          "result": "",
        },
        {
          "id": "119",
          "name": "Joker Tag",
          "remarks": "",
          "result": "",
        },
        {
          "id": "126",
          "name": "Wash",
          "remarks": "",
          "result": "",
        },
        {
          "id": "122",
          "name": "Polybag",
          "remarks": "",
          "result": "",
        },
        {
          "id": "121",
          "name": "Main Label",
          "remarks": "",
          "result": "",
        },
        {
          "id": "107",
          "name": "Care Label",
          "remarks": "",
          "result": "",
        },
        {
          "id": "127",
          "name": "Weight [Gsm]",
          "remarks": "",
          "result": "",
        },
        {
          "id": "116",
          "name": "Handfeel",
          "remarks": "",
          "result": "",
        },
        {
          "id": "120",
          "name": "Loose Thread",
          "remarks": "",
          "result": "",
        },
        {
          "id": "115",
          "name": "Garment Odor",
          "remarks": "",
          "result": "",
        },
        {
          "id": "117",
          "name": "Hangtag",
          "remarks": "",
          "result": "",
        },
        {
          "id": "118",
          "name": "Ironing",
          "remarks": "",
          "result": "",
        },
        {
          "id": "113",
          "name": "Fold Size",
          "remarks": "",
          "result": "",
        },
        {
          "id": "104",
          "name": "Barcode At Garment",
          "remarks": "",
          "result": "",
        },
        {
          "id": "124",
          "name": "Ratio Pack",
          "remarks": "",
          "result": "",
        },
        {
          "id": "109",
          "name": "Carton Qty Accuracy",
          "remarks": "",
          "result": "",
        },
        {
          "id": "108",
          "name": "Carton Marking",
          "remarks": "",
          "result": "",
        },
        {
          "id": "125",
          "name": "Visual Audit",
          "remarks": "",
          "result": "",
        },
        {
          "id": "105",
          "name": "Bulk Garment Measurement",
          "remarks": "",
          "result": "",
        },
        {
          "id": "112",
          "name": "Fabric Lab Test Report",
          "remarks": "",
          "result": "",
        },
        {
          "id": "114",
          "name": "Garment Lab Test Report",
          "remarks": "",
          "result": "",
        },
        {
          "id": "103",
          "name": "Availability Of Approved PP Sample",
          "remarks": "",
          "result": "",
        },
        {
          "id": "136",
          "name": "RFID Security tag attached",
          "remarks": "",
          "result": "",
        },
        {
          "id": "130",
          "name": "Others",
          "remarks": "",
          "result": "",
        },
      ],
      "buyername": "Baba elaichi",
      "cartonsamplesize": "2",
      "cartonselected": "2",
      "cutqty_val": "",
      "defectrate": "166.66666666666669%",
      "doneqty_val": "",
      "excessshortqty": "",
      "factoryrepresentative": "babu rao apte",
      "fg1qty": "10",
      "fg2qty": "2",
      "finalRemarks": "Good Job",
      "inserttotalnoofcarton": "3",
      "maindefect":[
        {
          "id": "65",
          "maindefect": "ARMHOLE SHAPE OFF",
          "maindefect_crit": "0",
          "maindefect_maj": "2",
          "maindefect_min": "0",
        },
      ],
      "maindefect_crit": "",
      "maindefect_maj": "2",
      "maindefect_min": "",
      "measurementDeviation": "Wide ",
      "measurementdefect": [
        {
          "id": "1",
          "measurementdefect": "Defect 1",
          "measurementdefect_crit": "0",
          "measurementdefect_maj": "0",
          "measurementdefect_min": "2",
        },
      ],
      "measurementdefect_crit": "",
      "measurementdefect_maj": "",
      "measurementdefect_min": "2",
      "miscdefect":[
        {
          "id": "1",
          "miscdefect": "Defect 3",
          "miscdefect_crit": "0",
          "miscdefect_maj": "0",
          "miscdefect_min": "1",
        },
      ],
      "miscdefect_crit": "",
      "miscdefect_maj": "",
      "miscdefect_min": "1",
      "offeredqty": "",
      "orderqty": "",
      "packedqty": "12",
      "pono": [
        {
          "excessshortqty": "3",
          "id": "1",
          "offeredqty": "15",
          "orderqty": "12",
          "pono": "1A",
        },
      ],
      "pqqty_val": "",
      "result": "onhold",
      "samplesize": "3",
      "screenBackgroundInfo": {},
      "totalcritdefect": "0",
      "totaldefect": "5",
      "totalmajordefect": "2",
      "totalminordefect": "3",
    }
   
  }, [])

  // Getting permission
  useEffect(() => {

    if(ViewMode == true)
      return

      const getGalleryPermission = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          SetGalleryPermission(status === 'granted');
        }
      }

     const getCameraPermission = async () => {

      const { status } = await Camera.requestPermissionsAsync();
      SetCameraPermission(status === 'granted');

    }

    
    const getAudioPermission = async () => {

      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 

    }
    
     
    (async () => {

      await getGalleryPermission()
      await getCameraPermission()
      await getAudioPermission()

    })()

  }, [])


  

  useEffect(() => {


    if(ViewMode == true)
      return
    //fetching data from database if available

    
    (async () => {

      {/*
      if(formDataTable == null || formDataTable.tableName == null)
      {
        console.log("################# Coouldn't fetch from formDataTable as either it is null or has no tableName key ###############")
        
        try{
          let data = await getScreenDataFromAsyncStorage(CurrentScreenId.toString())
          await populateFormWithApiAsyncStorate(data)
          
          
        }catch(e){
          //console.log("####### Error in fetching and populating data from async storage/APIs for current screen ########")
          console.log("####### Error in fetching and populating components data from database ########")
          console.log(e)
        }

        return
      }
    */}
    
    let dataFromDatabase = {}
    const componentsDataObjectList = await getAllRows(componentsDataTableName)

    if(formDataTable != null)
    {
      dataFromDatabase = await getFormDataFromDb(formDataTable.tableName, CurrentScreenId)
      console.log("########### Data recieved from database ###################")
      console.log(dataFromDatabase)
    }
     

      if(formDataTable == null || dataFromDatabase.length == 0 || dataFromDatabase[0]["formData"] == null)
      {
        
        try{
          
          
          if(componentsDataObjectList == null || componentsDataObjectList.length == 0 )
          {
            console.log("############### Seraching component data from Apis and async storage since none provided from db##############")
            let dataFromApisAndAsyncStorage = await getScreenDataFromAsyncStorage(CurrentScreenId.toString())
            await populateFormWithApiAsyncStorate(dataFromApisAndAsyncStorage)
          }
          else
            {
              console.log("############### Seraching component data from db ##############")
              await populateComponentsFromDB(componentsDataObjectList)
            }
          
        }catch(e){
          
          console.log("####### Error in fetching and populating components data from database ########")
          console.log(e)
        }
      }
      else
        {
    
            console.log("############## database data for current form ID ###############")
            console.log(dataFromDatabase[0])
            await populateComponentsFromDB(componentsDataObjectList, ["checklist"])
            populateForm(JSON.parse(dataFromDatabase[0]["formData"]))
        
        }
        

      SetDataLoaded(true)
      
    })()

  }, [])


  
  if(CameraOpen)
    return (<Camera
      style={{flex: 1,width:"100%"}}
      ref={(r) => {  
        cameraReference = r
      }}
    >
        <View style={{alignSelf: "center", borderColor: "green", borderWidth: 3, marginTop: "30%", height: 250, width: "80%"}}>

        </View>

       

        
        <TouchableOpacity
          style={{alignSelf: "center", marginTop: 50 , alignItems: "center", justifyContent: "center"}}
          onPress={() => {
            if(CameraMode == "image")
            {
              takePicture(ImageComment)
              SetImageComment("")
            }
            else
            {
              if(RecordingVideo)
              {
                SetRecordingVideo(false)
                SetCameraOpen(false)
              }
              else
                {
                  SetRecordingVideo(true)
                  RecordVideo()
                }
                

            }
            
          }}
        >
        {(() => {
          // Condition depending upon the mode of camaera 
          if(CameraMode == "image")
            return ( <Icon
              reverse
              name='ios-camera'
              type='ionicon'
              color={ !CameraPressed ? "blue" : "grey"}
              size={40}
            />)

          if(RecordingVideo)
           return (
              <Icon
                name='md-stop-circle'
                type='ionicon'
                color={"green"}
                size={80}
              />
           )

           return (
              <Icon
                name='md-ellipse'
                type='ionicon'
                color={"red"}
                size={80}
            />
           )
        })()}
           
        </TouchableOpacity>
    </Camera>)

  return (
    <ScrollView 
    contentContainerStyle={{alignItems: "center", backgroundColor: "white"}}
    keyboardShouldPersistTaps="always"
    >

                <Modal
                    id="ImageListView"
                    animationType="slide"
                    transparent={true}
                   
                    visible = {FileModalVisibility}
                    onRequestClose={() => {SetFileModalVisibility(false)}}
                >
                    <View style={{width: "100%", height: "100%", backgroundColor: "white", alignSelf: "center", alignItems: "center"}}>
                        <TouchableOpacity
                            id="ImageModalHeader"
                            style={{backgroundColor: "blue", padding: 10, margin: 5, borderRadius: 5, alignSelf: "flex-start"}}
                            onPress={() => {SetFileModalVisibility(false)}}
                        >
                            <Text style={{color: "white", fontSize: 20}}>Back</Text>
                        </TouchableOpacity>


                        {/*<View style={{marginHorizontal: 10, marginTop: 20, marginBottom: 10}}>*/}
                            <FlatList
                                data={CurrentHybridTableRowObject.files != null ? (CurrentHybridTableRowObject.files).filter((fileObject) => fileObject.fileType == CameraMode) : []}
                                keyExtractor={(fileObject) => fileObject.fileUri}
                                style={{marginVertical:5}}
                                renderItem = {({item}) => {
                                    return (
                                        <View style={{marginVertical: 12}}>

                                        {(() => {
                                          if(CameraMode == "image")              // ############## If the camera icon is clicked
                                            return (
                                                      <ImageBackground
                                                source={{ uri: item.fileUri }}
                                                style={{
                                                    width: 300,
                                                    height: 250,
                                                    marginVertical: 10,
                                          
                                                    alignItems: "flex-end",
                                                    justifyContent: "flex-start"
                                                }}
                                                >   
                                                <View style={{flexDirection: "row", marginTop: 5, marginHorizontal: 7}}>
                                                    <TouchableOpacity
                                                        style={{marginRight: 25, width: 20, alignItems: "center", borderRadius: 10, justifyContent: "center"}}
                                                        onPress={() => {

                                                            if(ViewMode == true)
                                                              return
                                                            Alert.alert(
                            
                                                                'File deletion',
                                                                'Are you sure you want to delete the file?',
                                                                [
                                                                  {
                                                                    text: 'No',
                                                                    onPress: () => console.log('####### Image deletion cancelled #######'),
                                                    
                                                                  },
                                                                  {
                                                                    text: 'Confirm', 
                                                                    onPress: () => {
                                                                      CurrentHybridTableRowObject.files = (CurrentHybridTableRowObject.files ).filter((fileObject) => fileObject.fileName != item.fileName)
                                                                      SetHybridDataObjects({...HybridDataObjects})
                                                                    }
                                                                  },
                                                                ],
                                                                {cancelable: false},
                                                              )
                                                            
                                                            
                                                        }}
                                                        //disabled={SelectedOrderInfo.inspectionID != 0}
                                                    >
                                                        <Icon
                                                            reverse
                                                            name='ios-trash'
                                                            type='ionicon'
                                                            color={"red"}
                                                            size={20}
                                                        />
                                                    </TouchableOpacity>
                                                    
                                                </View>
                                                
                                            </ImageBackground>
                                            )

                                        if(CameraMode == "video")
                                          return (
                                            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black',}}>
                                                  <Video
                                                  style={{alignSelf: 'center', width: 350, height: 200,}}
                                                    ref={VideoReference}
                                                    source={{
                                                      uri: item.fileUri,
                                                    }}
                                                    useNativeControls
                                                    resizeMode="contain"
                                                    onPlaybackStatusUpdate={status => SetVideoPlayStatus(() => status)}
                                                  />
                                                  <View style={{padding: 5}}>
                                                    {/*
                                                    <Button
                                                      title={VideoPlayStatus.isPlaying ? 'Pause' : 'Play'}
                                                      onPress={() =>
                                                        VideoPlayStatus.isPlaying ? VideoReference.current.pauseAsync() : VideoReference.current.playAsync()
                                                        
                                                      }
                                                    />
                                                    */}
                                                  </View>
                                                </View>
                                          )

                                        })()}
                                        
                                    
                                    <TextInput
                                      label="Comments"
                                      maxLength={50}
                                      value={item.fileComment != null ? item.fileComment : ""}
                                      editable={!ViewMode}
                                      onChangeText = {(newValue) => {
                              
                                        for(var fileObject of CurrentHybridTableRowObject.files)
                                        {
                                          if(fileObject.fileName == item.fileName)
                                            fileObject.fileComment = newValue
                                        }
                                        SetHybridDataObjects({...HybridDataObjects})
                                      }}
                                      style={{marginVertical: 5, alignSelf: "center", width: "100%",  ...${JSON.stringify(StylingLibrary.textInputField)}}}
                                    />
                                        
                                        </View>
                                        
                                    )
                                }}
                            />
                        {/*</View>*/} 
                            
                        <TouchableOpacity 
                            style={{alignSelf: "flex-start", bottom: 10, marginHorizontal: 10, backgroundColor: "grey", borderRadius: 10, padding: 7}}
                            onPress={() => {
                                // openImagePickerAsync(CurrentSelectedDefectObjectForImageInput)
                                // __startCamera(CurrentSelectedDefectObjectForImageInput)
                                if(ViewMode == true)
                                  return

                                
                                Alert.alert(
                        
                                    CameraMode.toUpperCase() + ' Source',
                                    'Select the source of '+CameraMode,
                                    [
                                      {
                                        text: 'Camera',
                                        onPress: () => {
                                          if (!CameraPermission) {
                                          
                                            SetCameraOpen(false)
                                            Alert.alert('Camera Access denied')
                                            return 
                                          } 
                                          else
                                            SetCameraOpen(true)
                                        },
                         
                                      },
                                      {
                                        text: 'Gallery', 
                                        onPress: () => {openImagePickerAsync(ImageComment)}
                                      },
                                    ],
                                    {cancelable: true},
                                  )
                                  

                            }}
                        >
                            <Text style={{fontWeight: "bold", fontSize: 20, color: "white"}} numberOfLines={1}>
                            +
                            </Text>
                        </TouchableOpacity>


                    </View>

                </Modal>


    {(() => {
      if(! DataLoaded)
          return (<View style = {{alignSelf: "center", alignItems: "center"}}><ActivityIndicator size="large" color={"green"} /></View>)
      })()}

       ${mainCode}

       {(() => {
        if(! DataLoaded)
            return (<View style = {{alignSelf: "center", alignItems: "center"}}><ActivityIndicator size="large" color={"green"} /></View>)
        })()}
    
    </ScrollView>
  );
};

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
        backgroundColor: "${StylingLibrary.buttons != null && StylingLibrary.buttons.backgroundColor != null ? StylingLibrary.buttons.backgroundColor  : secondaryColor }",
        borderRadius: 5,
        padding: 10,
        elevation: 10,

      }
});


export default ${ScreenName};

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
    backgroundColor: "${StylingLibrary.buttons != null && StylingLibrary.buttons.backgroundColor != null ? StylingLibrary.buttons.backgroundColor  : secondaryColor }",
    borderRadius: 5,
    padding: 10,
    elevation: 10,

  }
})

`
return code

}

{/*
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
*/}

module.exports.codeGenerator = codeGenerator
