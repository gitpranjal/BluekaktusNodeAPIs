const { codeGenerator } = require("./fileWriter")
const { Placeholders } = require("./placeholders")
const fs = require('fs');
const fetch = require("node-fetch")
const finalInspectionForm = {
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

const midlineInspection = {
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
                    "valueListUrl": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getFactoryList"
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
                    "name": "prqty",
                    "title": "PR Quantity",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false
                },
                {
                    "name": "doneqty",
                    "title": "Done Quantity",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false
                },
                {
                    "name": "cutqty",
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
                    "required": false
                },
                {
                    "name": "samplesize",
                    "title": "Sample Size",
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
                    "name": "productionstatus",
                    "title": "Production Status",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 0,
                    "required": false,
                    "valueListUrl": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getFactoryList"
                }
            ],
            "groups": [],
            "columns": [],
            "rows": []
        },
        {
            "type": "checklist",
            "name": "millfabricchecklist",
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
                    "type": "dropdown",
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
                    "type": "textInputField",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "maindefect",
                            "title": "Main Defect",
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
                            "name": "maindefect_crit",
                            "title": "Critical",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false
                        },
                        {
                            "name": "maindefect_maj",
                            "title": "Major",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false
                        },
                        {
                            "name": "maindefect_min",
                            "title": "Minor",
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
                            "title": "Measurements",
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
                            "required": false
                        },
                        {
                            "name": "measurementdefect_maj",
                            "title": "Major",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false
                        },
                        {
                            "name": "measurementdefect_min",
                            "title": "Minor",
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
                            "title": "Miscellaneous",
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
                            "required": false
                        },
                        {
                            "name": "miscdefect_maj",
                            "title": "Major",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false
                        },
                        {
                            "name": "miscdefect_min",
                            "title": "Minor",
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
                    "title": "Minor",
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
        }
    ]
}

const sizesetInspection = {
    "viewObjects": [
        {
            "type": "textInputField",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "buyername",
                    "title": "Buyer Name",
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
            "name": "uploadimage",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "uploadimage",
                    "title": "Upload Image",
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
        },
        {
            "type": "checklist",
            "name": "millfabricchecklist",
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
            "type": "dropdown",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "productionstatus",
                    "title": "Production Status",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 0,
                    "required": false,
                    "valueListUrl": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getFactoryList"
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
                    "name": "stylingcomments",
                    "title": "Styling Comments",
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
                    "name": "constructionworkmanshipcomments",
                    "title": "Construction/Workmanship Comments",
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
                    "name": "measurementfinishingcomments",
                    "title": "Measurement/Finishing Comments",
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
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "conclusion",
                    "title": "Conclusion",
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
            type: "button",
            componentPerRow: 1,
            fields: [
              {"name": "finalSubmission", title: "Submit",}
              ]
          },
    ]
}

var finalInspectionFormArvind = {
    "viewObjects": [
        {
            "type": "dropdown",
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "aql_level",
                    "title": "AQL Level",
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
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "factory_representative",
                    "title": "Factory Representative",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "text"
                }
            ],
            "groups": [],
            "columns": [],
            "rows": []
        },
        {
            "type": "textInputField",
            "title": "",
            "componentPerRow": 3,
            "fields": [
                {
                    "name": "pr_qty",
                    "title": "PR Quantity",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "numeric"
                },
                {
                    "name": "done_qty",
                    "title": "Done Quantity",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "numeric"
                },
                {
                    "name": "cut_qty",
                    "title": "Cut Quantity",
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
            "title": "",
            "componentPerRow": 2,
            "fields": [
                {
                    "name": "packed_qty",
                    "title": "Packed Qty",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "numeric"
                },
                {
                    "name": "sample_size",
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
            "title": "",
            "componentPerRow": 2,
            "fields": [
                {
                    "name": "fg1_qty",
                    "title": "FG1 Qty",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "numeric"
                },
                {
                    "name": "fg2_qty",
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
            "title": "",
            "componentPerRow": 2,
            "fields": [
                {
                    "name": "carton_sample_size",
                    "title": "Carton Sample Size",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "numeric"
                },
                {
                    "name": "carton_selected",
                    "title": "Carton Selected",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "text"
                }
            ],
            "groups": [],
            "columns": [],
            "rows": []
        },
        {
            "type": "textInputField",
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "insert_total_cartons",
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
            "type": "radioButton",
            "name": "part_inspection",
            "title": "Part Inspection",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "Yes",
                    "minLength": 0,
                    "maxLength": 0,
                    "required": false
                },
                {
                    "name": "No",
                    "minLength": 0,
                    "maxLength": 0,
                    "required": false
                }
            ],
            "groups": [],
            "columns": [],
            "rows": []
        },
        {
            "type": "radioButton",
            "name": "reaudit",
            "title": "Re-Audit",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "Yes",
                    "minLength": 0,
                    "maxLength": 0,
                    "required": false
                },
                {
                    "name": "No",
                    "minLength": 0,
                    "maxLength": 0,
                    "required": false
                }
            ],
            "groups": [],
            "columns": [],
            "rows": []
        },
        {
            "type": "hybrid",
            "name": "main_defect",
            "componentPerRow": 1,
            "fields": [],
            "groups": [
                {
                    "type": "dropdown",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "main_defect",
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
                    "title": "",
                    "componentPerRow": 3,
                    "fields": [
                        {
                            "name": "main_defect_crit",
                            "title": "Critical",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "numeric"
                        },
                        {
                            "name": "main_defect_maj",
                            "title": "Major",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "numeric"
                        },
                        {
                            "name": "main_defect_min",
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
                    "type": "textInputField",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "main_defect_add",
                            "title": "Add",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "text"
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
            "name": "measurement_defect",
            "componentPerRow": 1,
            "fields": [],
            "groups": [
                {
                    "type": "textInputField",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "measurement_defect",
                            "title": "Measurement Defect",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "text"
                        }
                    ],
                    "groups": [],
                    "columns": [],
                    "rows": []
                },
                {
                    "type": "textInputField",
                    "title": "",
                    "componentPerRow": 3,
                    "fields": [
                        {
                            "name": "measurement_defect_crit",
                            "title": "Critical",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "numeric"
                        },
                        {
                            "name": "measurement_defect_maj",
                            "title": "Major",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "numeric"
                        },
                        {
                            "name": "measurement_defect_min",
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
                    "type": "textInputField",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "measurement_defect_add",
                            "title": "Add",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "text"
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
            "name": "misc_defect",
            "componentPerRow": 1,
            "fields": [],
            "groups": [
                {
                    "type": "textInputField",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "misc_defect",
                            "title": "Miscellaneous Defect",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "text"
                        }
                    ],
                    "groups": [],
                    "columns": [],
                    "rows": []
                },
                {
                    "type": "textInputField",
                    "title": "",
                    "componentPerRow": 3,
                    "fields": [
                        {
                            "name": "misc_defect_crit",
                            "title": "Critical",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "numeric"
                        },
                        {
                            "name": "misc_defect_maj",
                            "title": "Major",
                            "size": "small",
                            "minLength": 0,
                            "maxLength": 100,
                            "defaultValue": "",
                            "required": false,
                            "inputType": "numeric"
                        },
                        {
                            "name": "misc_defect_min",
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
                    "name": "misc_defect_add",
                    "componentPerRow": 1,
                    "fields": [
                        {
                            "name": "misc_defect_add",
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
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "total_crit",
                    "title": "Total Critical Defect",
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
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "total_maj",
                    "title": "Major",
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
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "total_min",
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
            "type": "textInputField",
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "total_defect",
                    "title": "Total Defect",
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
            "title": "",
            "componentPerRow": 1,
            "fields": [
                {
                    "name": "defect_rate",
                    "title": "Defect Rate",
                    "size": "small",
                    "minLength": 0,
                    "maxLength": 100,
                    "defaultValue": "",
                    "required": false,
                    "inputType": "text"
                }
            ],
            "groups": [],
            "columns": [],
            "rows": []
        }
    ]
}



var ObjectFromAPI = finalInspectionForm
//var ObjectFromAPI = sizesetInspection
//var ObjectFromAPI = midlineInspection
//var ObjectFromAPI = finalInspectionFormArvind
var ScreenName = `GeneratedCode1`

codeGenerator(ObjectFromAPI, Placeholders, ScreenName, colorScheme = "appSpecific")
.then(code => {
  // write to a new file named 2pac.txt
  fs.writeFile(`/Users/geuser/Desktop/bk-sourcing/screens/${ScreenName}.js`, code["structure"], (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Screen structure code saved!');
  });

  {/*fs.writeFile('/Users/geuser/Desktop/BluekaktusReactNativeScreens/assets/styles.js', code["style"], (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Screen style code saved!');
  });
*/}

})
.catch(error => {
  console.log("####### Error in writing file  ##########")
  console.log(error)
})


///Users/geuser/Desktop/bk-sourcing/screens                                                    //bk-sourcing
///Users/geuser/Desktop/BluekaktusReactNativeScreens/src/screens/GeneratedCode.js              //bluekaktusReactnativescreens