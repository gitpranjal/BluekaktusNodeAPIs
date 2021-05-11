const Placeholders = {
    "AutoSave": false,
    "ScreenSpecificImports": `
      import axios from "@networkConfig";
      import { useSelector, useDispatch } from "react-redux"
      import { selectUser } from "../slices/authSlice";
    `,
    "ApiUrls": {
        //"ApiUrl1": "",
        "auditchecklist": "http://125.63.109.206:112/api/reactScreenTool/controls/getFormattedChecklistRows",
        "millfabricchecklist": "http://125.63.109.206:112/api/reactScreenTool/controls/getFormattedChecklistRows",
        "aqllevel": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getNestedAQLDetails",
        "maindefect": "http://125.63.109.206:112/api/reactScreenTool/controls/getFormattedDefectsList",
        "ViewDataApi": "https://devsourcingapi.bluekaktus.com/quality/getInspectionDetails"
        
    },
    "StateVariables": {
        "DefectsSummary": {
            "totalCritical": "0",
            "totalMajor": "0",
            "totalMinor": "0"
        },
    },
    "CodeSnippets": {

        "CustomDataModifierFunction": `

            const CustomDataModifierFunction = (cleanDataFromScreen) => {

                var resultantObject = {}



                var targetObject = {
                    "saveInspList": [
                  {
                    "ORDER_ID": cleanDataFromScreen.screenBackgroundInfo["orderId"],
                    "PACKED_QTY": cleanDataFromScreen.packedqty,
                    "SAMPLE_SIZE":cleanDataFromScreen.samplesize ,
                    "INSPECTION_DATE": cleanDataFromScreen.screenBackgroundInfo["presentDate"],
                    "ACTUAL_RELEASE_TIME": "142",
                    "AQ_LEVEL": cleanDataFromScreen.aqllevel["name"],
                    "MAX_MAJOR_ACCEPTANCE": "0",
                    "MAX_MINOR_ACCEPTANCE": "0",
                    "INSPECTION_REQUEST_ID": "0",
                    "INSPECTION_ACTIVITY_ID": cleanDataFromScreen.screenBackgroundInfo["activityID"],
                    "USER_ID": "801",
                    "MOBILE_APP_VERSION": "A_1.17",
                    "INSPECTION_RECORD_TYPE": "ADH",
                    "DEFECT_LIST": [
                      {
                        "MAJOR": "1",
                        "MINOR": "1",
                        "TYPE": "Defect",
                        "DEFECT_ID": "58",
                        "MEASUREMENT_VALUE": "",
                        "CRITICAL": "0"
                      },
                      {
                        "MAJOR": "0",
                        "MINOR": "1",
                        "TYPE": "Measurement",
                        "DEFECT_ID": "0",
                        "MEASUREMENT_VALUE": "measurement def",
                        "CRITICAL": "0"
                      },
                      {
                        "MAJOR": "1",
                        "MINOR": "1",
                        "TYPE": "MISC Defect",
                        "DEFECT_ID": "0",
                        "MEASUREMENT_VALUE": "misc defect",
                        "CRITICAL": "0"
                      }
                    ],
                    "CHECK_LIST": [
                      {
                        "CHECK_LIST_ID": "123",
                        "CHECK_LIST_NAME": "Print",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "111",
                        "CHECK_LIST_NAME": "Embroidery",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "110",
                        "CHECK_LIST_NAME": "Embellishment",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "106",
                        "CHECK_LIST_NAME": "Button",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "128",
                        "CHECK_LIST_NAME": "Zipper",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "119",
                        "CHECK_LIST_NAME": "Joker Tag",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "126",
                        "CHECK_LIST_NAME": "Wash",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "122",
                        "CHECK_LIST_NAME": "Polybag",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "121",
                        "CHECK_LIST_NAME": "Main Label",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "107",
                        "CHECK_LIST_NAME": "Care Label",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "127",
                        "CHECK_LIST_NAME": "Weight [Gsm]",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "116",
                        "CHECK_LIST_NAME": "Handfeel",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "120",
                        "CHECK_LIST_NAME": "Loose Thread",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "115",
                        "CHECK_LIST_NAME": "Garment Odor",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "117",
                        "CHECK_LIST_NAME": "Hangtag",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "118",
                        "CHECK_LIST_NAME": "Ironing",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "113",
                        "CHECK_LIST_NAME": "Fold Size",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "104",
                        "CHECK_LIST_NAME": "Barcode At Garment",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "124",
                        "CHECK_LIST_NAME": "Ratio Pack",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "109",
                        "CHECK_LIST_NAME": "Carton Qty Accuracy",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "108",
                        "CHECK_LIST_NAME": "Carton Marking",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "125",
                        "CHECK_LIST_NAME": "Visual Audit",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "105",
                        "CHECK_LIST_NAME": "Bulk Garment Measurement",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "112",
                        "CHECK_LIST_NAME": "Fabric Lab Test Report",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "114",
                        "CHECK_LIST_NAME": "Garment Lab Test Report",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "103",
                        "CHECK_LIST_NAME": "Availability Of Approved PP Sample",
                        "CHECK_STATUS": "0",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "136",
                        "CHECK_LIST_NAME": "RFID Security tag attached",
                        "CHECK_STATUS": "1",
                        "REMARKS": "",
                        "BUYER_NAME": ""
                      },
                      {
                        "CHECK_LIST_ID": "130",
                        "CHECK_LIST_NAME": "Others",
                        "CHECK_STATUS": "1",
                        "REMARKS": "checklist other remark",
                        "BUYER_NAME": ""
                      }
                    ],
                    "RESULT": cleanDataFromScreen.result ,
                    "IS_PARTIAL": "1",
                    "START_TIME": "2021-03-20 12:22:07",
                    "END_TIME": "2021-03-20 12:24:03",
                    "LATITUDE": "28.6879133",
                    "LONGITUDE": "77.2797417",
                    "INVOICE_NO": "",
                    "INVOICE_QTY": "",
                    "PROCESS_DEVIATION": "",
                    "MEASUREMENT_DEVIATION": cleanDataFromScreen.measurementDeviation,
                    "RE_INSPECTION": "N",
                    "CARTON_SAMPLE_SIZE": "1",
                    "CUT_QTY": "0.000",
                    "SELF_AUDIT": "0",
                    "MOBILE_REF_NO": "21032012220737641686118466",
                    "INLINE_INSPECTION_FLAG": "0",
                    "INTERIM_INSPECTION_FLAG": "0",
                    "COMMENT": cleanDataFromScreen.finalRemarks,
                    "FG1_QTY": cleanDataFromScreen.fg1qty,
                    "FG2_QTY": cleanDataFromScreen.fg2qty,
                    "CARTON_SELECTED": "1",
                    "FACTORY_REPRESENTATIVE": cleanDataFromScreen.factoryrepresentative,
                    "FINAL_SAMPLE_SIZE": "",
                    "TOTAL_CARTONS_GOH": "2",
                    "RE_AUDIT": "0",
                    "TNA_ACTIVITY_ID": cleanDataFromScreen.screenBackgroundInfo["tnaActivityID"],
                    "QFE_STATUS": "",
                    "SUSTAINABILITY": cleanDataFromScreen.buyername,               // This means buyer name
                    "GPT_REPORT_NO": "",
                    "GPT_APPROVAL_STATUS": "",
                    "GPT_APPROVAL_REMARK": "",
                    "TIMELINE": "",
                    "SUGGESTION_BY_LIFESTYLE": "",
                    "LOG_COMMERCIAL_APPROVAL": "",
                    "REMARK": "",
                    "PACKING_ACCURACY_CHECK": "",
                    "WAREHOUSE_LOCATION": "",
                    "DIGITAL_TAB_REMARK": "",
                    "PO_WISE_DT": [
                      {
                        "PO_NUMBER": "1",
                        "ORDER_QTY": "2",
                        "OFFERED_QTY": "3",
                        "BAL_QTY": "1"
                      }
                    ],
                    "ONHOLD_REASON": [],
                    "PASS_FAIL_REASON": [],
                    "PRODUCTION_STATUS": [],
                    "TOTAL_CTNS_FOR_SHIPMENT": ""
                  }
                ]
                }



                targetObject["saveInspList"][0]["DEFECT_LIST"] = []
                for (var defectObj of cleanDataFromScreen["maindefect"])
                {
                  var newDefectObject = {
                    "MAJOR": defectObj.maindefect_maj,
                    "MINOR": defectObj.maindefect_min,
                    "TYPE": "Defect",
                    "DEFECT_ID": defectObj.id,
                    "MEASUREMENT_VALUE": "",
                    "CRITICAL": defectObj.maindefect_crit
                  }

                  targetObject["saveInspList"][0]["DEFECT_LIST"].push(newDefectObject)
                }

                for (var defectObj of cleanDataFromScreen["measurementdefect"])
                {
                  var newDefectObject = {
                    "MAJOR": defectObj.measurementdefect_maj,
                    "MINOR": defectObj.measurementdefect_min,
                    "TYPE": "Measurement",
                    "DEFECT_ID": "0",
                    "MEASUREMENT_VALUE": defectObj.measurementdefect,
                    "CRITICAL": defectObj.measurementdefect_crit
                  }
                  targetObject["saveInspList"][0]["DEFECT_LIST"].push(newDefectObject)
                }

                for (var defectObj of cleanDataFromScreen["miscdefect"])
                {
                  var newDefectObject = {
                    "MAJOR": defectObj.miscdefect_maj,
                    "MINOR": defectObj.miscdefect_min,
                    "TYPE": "MISC Defect",
                    "DEFECT_ID": "0",
                    "MEASUREMENT_VALUE": defectObj.miscdefect,
                    "CRITICAL": defectObj.miscdefect_crit
                  }
                  targetObject["saveInspList"][0]["DEFECT_LIST"].push(newDefectObject)
                }

                targetObject["saveInspList"][0]["CHECK_LIST"] = []

                for(var checklistObj of cleanDataFromScreen["auditchecklist"])
                {
                  var newChecklistObj = {
                    "CHECK_LIST_ID": checklistObj.id,
                    "CHECK_LIST_NAME": checklistObj.name,
                    "CHECK_STATUS": checklistObj.result,
                    "REMARKS": checklistObj.remarks,
                    "BUYER_NAME": ""
                  } 

                  if((checklistObj.result).toLowerCase().trim() == "ok")
                    newChecklistObj["CHECK_STATUS"] = "0"
                  else if((checklistObj.result).toLowerCase().trim() == "not ok")
                    newChecklistObj["CHECK_STATUS"] = "1"
                  else
                   newChecklistObj["CHECK_STATUS"] = "2"


                  targetObject["saveInspList"][0]["CHECK_LIST"].push(newChecklistObj)
                }


                return targetObject
                




            }  // function definition ends
        
        `,
        "ChecklistApiFetch": `
            body: JSON.stringify({
                "userID": 801,
                "factoryID": 548
        
            }),
        `,
        "AQLObjectModifier": `
            if(dropdownObjectName == "aqllevel")
            {
            idKey = "aqlLevel"
            valueKey = "aqlLevel"
            continue
            }
        `,
        "orderqty": `
            if(newFieldList["orderqty"] != "" && newFieldList["offeredqty"] != "")
            {
                var excessQty = parseInt(newFieldList["offeredqty"]) - parseInt(newFieldList["orderqty"])
                newFieldList["excessshortqty"] = excessQty.toString()
            } 
            else
                newFieldList["excessshortqty"] = ""

        `,
        "offeredqty": `
            if(newFieldList["orderqty"] != "" && newFieldList["offeredqty"] != "")
            {
                var excessQty = parseInt(newFieldList["offeredqty"]) - parseInt(newFieldList["orderqty"])
                newFieldList["excessshortqty"] = excessQty.toString()
            }
            else
                newFieldList["excessshortqty"] = ""
        `,
        "packedqty": `

            var NestedAqlObject = DropdownList["aqllevel"].SelectedValue
            var currentPackedQty = parseInt(newValue)
            var sampleSize = ""
            var smallestMinValue = Number.MAX_VALUE
            var greatestMaxValue = Number.MIN_VALUE
            var smallestMinValueRangeObject = {minValue: Number.MAX_VALUE}
            var greatestMaxValueRangeObject = {maxValue: Number.MIN_VALUE}
            var rangeFound = false
            for(var rangeObject of NestedAqlObject.aqlDtDetails)
            {
            if(currentPackedQty <= rangeObject.maxValue &&  currentPackedQty >= rangeObject.minValue)
            {
                sampleSize = rangeObject.sampleSize.toString()
                rangeFound = true
                break
            }
            if(rangeObject.minValue <= smallestMinValueRangeObject.minValue)
                smallestMinValueRangeObject = {...rangeObject}
            

            if(rangeObject.maxValue >= greatestMaxValueRangeObject.maxValue )
                greatestMaxValueRangeObject = {...rangeObject}
            
            }

            if( !rangeFound)
            {
            if(currentPackedQty >= greatestMaxValueRangeObject.maxValue)
                sampleSize = greatestMaxValueRangeObject.sampleSize
            else if(currentPackedQty >= smallestMinValueRangeObject.minValue)
                sampleSize = smallestMinValueRangeObject.sampleSize 
            }

            newFieldsObject["samplesize"] = currentPackedQty != "" ? sampleSize.toString() : ""    


        `,

        "fg1qty": `
            var currentPackedQty = newFieldsObject["packedqty"]
            var currentFg1Qty = newValue

            console.log("############## current packed quantity #############")
            console.log(currentPackedQty)

            console.log("#################### current Fg1 quantity ################")
            console.log(currentFg1Qty)

            if(currentPackedQty == "" || currentFg1Qty == "")
            {
                
                newFieldsObject["fg1qty"] = ""
                newFieldsObject["fg2qty"] = ""
                SetFieldList(newFieldsObject)
                //storeData("FieldList", newFieldsObject)
                Alert.alert("Pleae enter valid fg and packed quantities")
                return
            }   

            if(parseInt(currentPackedQty) < parseInt(currentFg1Qty))
            {
                
                newFieldsObject["fg1qty"] = ""
                newFieldsObject["fg2qty"] = ""
                SetFieldList(newFieldsObject)
                //storeData("FieldList", newFieldsObject)
                Alert.alert("fg values cannot be greater than packed quantity")
                return
            }
            currentPackedQty = parseInt(currentPackedQty)
            currentFg1Qty = parseInt(currentFg1Qty)
            var newFg2Qty = currentPackedQty - currentFg1Qty

            
            newFieldsObject["fg2qty"] = newFg2Qty.toString()

        
        `,

        "maindefect_add": 
        `
            
            var newFieldList = {...FieldList}
            
            if(newRowObject.maindefect_crit == "")
              newRowObject.maindefect_crit = "0"

            if(newRowObject.maindefect_maj == "")
              newRowObject.maindefect_maj = "0"

            if(newRowObject.maindefect_min == "")
              newRowObject.maindefect_min = "0"

            newFieldList["totalcritdefect"] = newFieldList["totalcritdefect"] != "" ? (parseInt(newFieldList["totalcritdefect"]) + parseInt(newRowObject.maindefect_crit)).toString() :  newRowObject.maindefect_crit.toString()
            newFieldList["totalmajordefect"] = newFieldList["totalmajordefect"] != "" ? (parseInt(newFieldList["totalmajordefect"]) + parseInt(newRowObject.maindefect_maj)).toString() : newRowObject.maindefect_maj.toString()
            newFieldList["totalminordefect"] = newFieldList["totalminordefect"] != "" ? (parseInt(newFieldList["totalminordefect"]) + parseInt(newRowObject.maindefect_min)).toString() :  newRowObject.maindefect_min.toString()
            newFieldList["totaldefect"] = (parseInt(newFieldList["totalcritdefect"]) + parseInt(newFieldList["totalmajordefect"]) + parseInt(newFieldList["totalminordefect"])).toString()
            
            var SampleSize = newFieldList["samplesize"]
            var defectRate = SampleSize != "" && newFieldList["totaldefect"] != "" ? ((parseInt(newFieldList["totaldefect"])/parseInt(SampleSize))*100).toString() : ""
            newFieldList["defectrate"] = defectRate + "%"
            SetFieldList(newFieldList)
            storeData("FieldList",newFieldList , CurrentScreenId)
        
            `,

            "measurementdefect_add": 
            `
                
                var totalCriticals = 0
                var totalMajors = 0
                var totalMinors  = 0
    
    
                for(var defectObj of HybridDataObjects["measurementdefect"])
                {
                    if(defectObj.id == "-1")
                        continue
    
                    totalCriticals += parseInt(defectObj.measurementdefect_crit)
                    totalMajors += parseInt(defectObj.measurementdefect_maj)
                    totalMinors += parseInt(defectObj.measurementdefect_min)
                }
    
                var newFieldList = {...FieldList}
    
                if(newRowObject.measurementdefect_crit == "")
                  newRowObject.measurementdefect_crit = "0"

                if(newRowObject.measurementdefect_maj == "")
                  newRowObject.measurementdefect_maj = "0"

                if(newRowObject.measurementdefect_min == "")
                  newRowObject.measurementdefect_min = "0"

                newFieldList["totalcritdefect"] = newFieldList["totalcritdefect"] != "" ? (parseInt(newFieldList["totalcritdefect"]) + parseInt(newRowObject.measurementdefect_crit)).toString() :  newRowObject.measurementdefect_crit.toString()
                newFieldList["totalmajordefect"] = newFieldList["totalmajordefect"] != "" ? (parseInt(newFieldList["totalmajordefect"]) + parseInt(newRowObject.measurementdefect_maj)).toString() : newRowObject.measurementdefect_maj.toString()
                newFieldList["totalminordefect"] = newFieldList["totalminordefect"] != "" ? (parseInt(newFieldList["totalminordefect"]) + parseInt(newRowObject.measurementdefect_min)).toString() :  newRowObject.measurementdefect_min.toString()
                newFieldList["totaldefect"] = (parseInt(newFieldList["totalcritdefect"]) + parseInt(newFieldList["totalmajordefect"]) + parseInt(newFieldList["totalminordefect"])).toString()
                
                var SampleSize = newFieldList["samplesize"]
                var defectRate = SampleSize != "" && newFieldList["totaldefect"] != "" ? ((parseInt(newFieldList["totaldefect"])/parseInt(SampleSize))*100).toString() : ""
                newFieldList["defectrate"] = defectRate + "%"

                
                SetFieldList(newFieldList)
                storeData("FieldList",newFieldList , CurrentScreenId)
                `,

                "miscdefect_add": 
                `
                    
                    var totalCriticals = 0
                    var totalMajors = 0
                    var totalMinors  = 0
        
        
                    for(var defectObj of HybridDataObjects["miscdefect"])
                    {
                        if(defectObj.id == "-1")
                            continue
        
                        totalCriticals += parseInt(defectObj.miscdefect_crit)
                        totalMajors += parseInt(defectObj.miscdefect_maj)
                        totalMinors += parseInt(defectObj.miscdefect_min)
                    }
        
                    var newFieldList = {...FieldList}
        
                    if(newRowObject.miscdefect_crit == "")
                      newRowObject.miscdefect_crit = "0"

                    if(newRowObject.miscdefect_maj == "")
                      newRowObject.miscdefect_maj = "0"

                    if(newRowObject.miscdefect_min == "")
                      newRowObject.miscdefect_min = "0"

                    newFieldList["totalcritdefect"] = newFieldList["totalcritdefect"] != "" ? (parseInt(newFieldList["totalcritdefect"]) + parseInt(newRowObject.miscdefect_crit)).toString() :  newRowObject.miscdefect_crit.toString()
                    newFieldList["totalmajordefect"] = newFieldList["totalmajordefect"] != "" ? (parseInt(newFieldList["totalmajordefect"]) + parseInt(newRowObject.miscdefect_maj)).toString() : newRowObject.miscdefect_maj.toString()
                    newFieldList["totalminordefect"] = newFieldList["totalminordefect"] != "" ? (parseInt(newFieldList["totalminordefect"]) + parseInt(newRowObject.miscdefect_min)).toString() :  newRowObject.miscdefect_min.toString()
                    newFieldList["totaldefect"] = (parseInt(newFieldList["totalcritdefect"]) + parseInt(newFieldList["totalmajordefect"]) + parseInt(newFieldList["totalminordefect"])).toString()
                    
                    var SampleSize = newFieldList["samplesize"]
                    var defectRate = SampleSize != "" && newFieldList["totaldefect"] != "" ? ((parseInt(newFieldList["totaldefect"])/parseInt(SampleSize))*100).toString() : ""
                    newFieldList["defectrate"] = defectRate + "%"
                    
                    
                    SetFieldList(newFieldList)
                    storeData("FieldList",newFieldList , CurrentScreenId)
                    `,

            "cartonsamplesize": `
                    var totalCartons = parseInt(newFieldsObject["inserttotalnoofcarton"])
                    var currentSampleSize = parseInt(newFieldsObject["cartonsamplesize"])

                    if(Number.isNaN(totalCartons))
                    {
                        Alert.alert("Enter valid number of total cartons")
                        return
                    }

                    if(currentSampleSize > totalCartons)
                    {
                        Alert.alert("Carton sample size cannot be greater than total cartons")
                        return
                    }
                    
            `,

            "currentScreenBackgroundInfo": `

                CurrentScreenBackgroundInfo = props.route.params.screenInformation
                CurrentScreenId = CurrentScreenBackgroundInfo["screenId"]


                const currentUser = useSelector(selectUser)
                console.log("########### Current user ##################")
                console.log(currentUser)
                


                useEffect(() => {

                    console.log("############# Current screen background information ##############")
                    console.log(CurrentScreenBackgroundInfo)
 
                    ////
                    var newFieldList = {...FieldList}
                    newFieldList["pqqty_val"] = CurrentScreenBackgroundInfo["prQty"].toString()
                    newFieldList["doneqty_val"] = "0"
                    SetFieldList(newFieldList)
                    ////

                    //SetViewMode(CurrentScreenBackgroundInfo["ViewMode"])
                    

                }, [])

              
            `,
            "InspectionResult": `
                
               //Some placeholder code
            
            `,

            "finalSubmission": `
                //clearAll()
                //return 


                
                
                var cleanData = getCleanData({...CompleteCurrentScreenData}, {...FieldList}, {...DropdownList}, {...HybridDataObjects}, {...ChecklistDataObjects} , {...RadioButtonList})
                console.log("############################ Cleaned data for current screen ##########################")
                console.log(cleanData)
            


                var resquestObject = CustomDataModifierFunction(cleanData)

                if(cleanData.result == "onhold")
                {
                  
                    await SaveOffline(CurrentScreenId, FieldList, DropdownList, HybridDataObjects, ChecklistDataObjects, RadioButtonList)
                    props.navigation.navigate("AdhocInspection", {"screenInformation": {}})
                    Alert.alert("Data saved to phone!")
                    return
                    
                }
                
                //console.log("############## Data being sent to API ################")
                //console.log(resquestObject)

                
                

                const nestedRequestObject = {
                  "companyID": currentUser.companyId,
                  "inspectionDetails": {
                    "saveInspList1": {
                      "INSPECTION_MT": resquestObject["saveInspList"],
                      "INSPECTION_ORDER_DT": [{
                        "ORDER_ID":resquestObject["saveInspList"][0]["ORDER_ID"],
                        "PACKED_QTY": resquestObject["saveInspList"][0]["PACKED_QTY"],
                        "SAMPLE_SIZE": resquestObject["saveInspList"][0]["SAMPLE_SIZE"],
                        "FG1_QTY": resquestObject["saveInspList"][0]["FG1_QTY"],
                        "FG2_QTY": resquestObject["saveInspList"][0]["FG2_QTY"]
                    }],
                      "INSPECTION_DEFECT_DT": resquestObject["saveInspList"][0]["DEFECT_LIST"],
                      "INSPECTION_CHECK_LIST": resquestObject["saveInspList"][0]["CHECK_LIST"]
                    }
                  }
                }
                
                console.log("############################### Request being sent #########################")
                console.log(nestedRequestObject)

                const fetchConfig = {
                  method: "POST",
                        body: JSON.stringify(nestedRequestObject),
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                          Authorization: "Bearer " + currentUser.authToken
                        },
                  }

                  fetch("http://386f88d3aada.ngrok.io/quality/saveInspectionDetails", fetchConfig)
                  .then(response => response.json())
                  .then(body => {
                    console.log("$$$$$$$$$$$$$$$$", body)
                    Alert.alert(body.result)
                    //removeValue(cleanData.screenBackgroundInfo["TNA_ACTIVITY_ID"])
                    //removeValue(CurrentScreenId)
                    if(body.result == "Success")
                      removeValue(CurrentScreenId)

                  })
                  .then(() => {
                    props.navigation.navigate("AdhocInspection", {"screenInformation": {}})
                  })
                  .catch(error => {
                    Alert.alert("Could not submit inspection!")
                    console.log("######## Error in posting inspection data ##############")
                    console.log(error)
                  })
                
              
                
               {/*
                axios.post("/quality/saveInspectionDetails", {
                  "companyID": currentUser.companyID,
                  "inspectionDetails": resquestObject
                })
                .then(response => {
                  console.log("######### Response after posting inspection data #########")
                  console.log(response)
                  Alert.alert(response.result != null ? response.result : "Response has no result key" )
                })
                .catch(error => {
                  Alert.alert("Could not submit inspection!")
                  console.log("######## Error in posting inspection data ##############")
                  console.log(error)
                })
                */}

                {/*
                try {
                  const response = await axios.post("/quality/saveInspectionDetails", {
                    "companyID": currentUser.companyID,
                    "inspectionDetails": resquestObject
                  });
            
                  console.log(response.data, "token");
                  if (response.status == "200") {
                    const { data } = response;
                    Alert.alert(data.result)
                    }
                  
                } 
                catch (error) {
                  console.log("############## Error in sending save inspection post request #########")
                  console.log(error)
                }

              */}
              
                  
            `,
    

       
    }
}

module.exports.Placeholders = Placeholders