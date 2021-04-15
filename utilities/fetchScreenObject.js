
  const fetchScreenObject = async () => {

    const ObjectFromAPI = {
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
    
      return ObjectFromAPI
  }

  module.exports.fetchScreenObject = fetchScreenObject 