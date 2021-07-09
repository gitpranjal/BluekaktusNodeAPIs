const Placeholders = {
    "AutoSave": false,
    "ScreenSpecificImports": `
      import axios from "@networkConfig";
      import { useSelector, useDispatch } from "react-redux"
      import { selectUser } from "../../../slices/authSlice";
      import * as SQLite from "expo-sqlite"
      import Toast from "react-native-root-toast"
      import { InspectionDataTable as formDataTable, AdhocData} from "../../../DB/tables"
      //import { connection } from "../../../components/NetworkConnection"
      import NetInfo, {
        NetInfoStateType,
        useNetInfo,
      } from "@react-native-community/netinfo"
      
    //import { InspectionDataTable  as formDataTable} from "../DB/tables"
     import db from "@dbUtils"
     import { sendFormData } from "@utils"
  
  
    `,
    "ApiUrls": {
        //"ApiUrl1": "",
        //"auditchecklist": "http://866400e0773e.ngrok.io/quality/getFormattedChecklistRows",
        //"auditchecklist": "https://devsourcingapi.bluekaktus.com/quality/getFormattedChecklistRows",
        "millfabricchecklist": "https://devsourcingapi.bluekaktus.com/quality/getFormattedChecklistRows",
        //"aqllevel": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getNestedAQLDetails",
        //"maindefect": "http://125.63.109.206:112/api/reactScreenTool/controls/getFormattedDefectsList",
        "ViewDataApi": "https://devsourcingapi.bluekaktus.com/quality/getInspectionDetails"
        
    },
    
    "FetchConfigs": {
      "auditchecklist": {
            method: "POST",
                body: {
                  "companyID": "companyId",            // Will try to find companyId in screenBackgroundInfo
              },
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: {"type": "Bearer", "value" : "authToken"},  // Will try to find authToken in screenBackgroundInfo
                "companyID": "companyId"
              },
        },
        "millfabricchecklist": {
          method: "POST",
              body: {
                "companyID": "companyId",            // Will try to find companyId in screenBackgroundInfo
            },
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: {"type": "Bearer", "value" : "authToken"},  // Will try to find authToken in screenBackgroundInfo
              "companyID": "companyId"
            },
      },

      "maindefect": {
                    method: "POST",
                          body: {
                            "basicparams": {
                                "companyID": 84,
                                "userID": 13
                            }
                        },
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                },
                
      "aqllevel": {
        method: "POST",
              body: {
                "basicparams": {
                    "companyID": 84,
                    "userID": 13
                }
            },
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
        },
    },


    "StateVariables": {
        "DefectsSummary": {
            "totalCritical": "0",
            "totalMajor": "0",
            "totalMinor": "0"
        },
    },

    "currentScreenBackgroundInfo": `

                CurrentScreenBackgroundInfo = props.route.params.screenInformation
                CurrentScreenId = CurrentScreenBackgroundInfo["formId"]
                let connection = useNetInfo().isInternetReachable
                


                console.log("############ Current screen Id ################")
                console.log(CurrentScreenId)

                console.log("############## Current screen background information #############")
                console.log(CurrentScreenBackgroundInfo)

                //const currentUser = useSelector(selectUser)
                //console.log("########### Current user ##################")
                //console.log(currentUser)
                
                const { companyId, authToken } = useSelector(selectUser);

                useEffect(() => {
                  // ######### Effect hook to pre fill text fields #############
                  let prQty = CurrentScreenBackgroundInfo["prQty"] != null ? CurrentScreenBackgroundInfo["prQty"].toString() : ""
                  let doneQty = CurrentScreenBackgroundInfo["totalPackedQty"] != null ? CurrentScreenBackgroundInfo["totalPackedQty"].toString() : ""
                  let cutQty = "0"

                  let newFieldList = {...FieldList}
                  newFieldList["prqty_val"] = prQty
                  newFieldList["doneqty_val"] = doneQty
                  newFieldList["cutqty_val"] = cutQty

                  SetFieldList(newFieldList)

                }, [])
                

            `,

    
    "DatabaseIntegration": `


  
  //const db = props.route.params.databaseReference
  //const formDataTable = props.route.params.formDataTable
  const componentsDataTableName = props.route.params.componentsDataTableName
  

  
     
    `,



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
                    "AQL_LEVEL": cleanDataFromScreen.aqllevel["name"],
                    "MAX_MAJOR_ACCEPTANCE": "0",
                    "MAX_MINOR_ACCEPTANCE": "0",
                    "INSPECTION_REQUEST_ID": cleanDataFromScreen.screenBackgroundInfo["requestId"],
                    "INSPECTION_ACTIVITY_ID": cleanDataFromScreen.screenBackgroundInfo["activityID"],
                    "USER_ID": "801",
                    "MOBILE_APP_VERSION": "A_1.17",
                    "INSPECTION_RECORD_TYPE": cleanDataFromScreen.screenBackgroundInfo["requestId"] == null || cleanDataFromScreen.screenBackgroundInfo["requestId"] == 0 ? "ADH" : IR,
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
                    "IS_PARTIAL": cleanDataFromScreen.isPartInspection.toLowerCase() == "yes" ? "1" : "0",
                    "START_TIME": inspectionStartTime,
                    "END_TIME": moment().format("DD-MMM-YYYY HH:mm:ss"),
                    "LATITUDE": "28.6879133",
                    "LONGITUDE": "77.2797417",
                    "INVOICE_NO": "",
                    "INVOICE_QTY": "",
                    "PROCESS_DEVIATION": "",
                    "MEASUREMENT_DEVIATION": cleanDataFromScreen.measurementDeviation,
                    "RE_INSPECTION": "N",
                    "CARTON_SAMPLE_SIZE": cleanDataFromScreen.cartonsamplesize,
                    "CUT_QTY": "0.000",
                    "SELF_AUDIT": cleanDataFromScreen.isSelfAudit.toLowerCase() == "yes" ? "1" : "0",
                    "MOBILE_REF_NO": "21032012220737641686118466",
                    "INLINE_INSPECTION_FLAG": "0",
                    "INTERIM_INSPECTION_FLAG": "0",
                    "COMMENT": cleanDataFromScreen.finalRemarks,
                    "FG1_QTY": cleanDataFromScreen.fg1qty,
                    "FG2_QTY": cleanDataFromScreen.fg2qty,
                    "CARTON_SELECTED": cleanDataFromScreen.cartonselected,
                    "FACTORY_REPRESENTATIVE": cleanDataFromScreen.factoryrepresentative,
                    "FINAL_SAMPLE_SIZE": "",
                    "TOTAL_CORTONS_GOH": cleanDataFromScreen.inserttotalnoofcarton,
                    "RE_AUDIT": cleanDataFromScreen.isReAudit.toLowerCase() == "yes" ? "1" : "0",
                    "TNA_ACTIVITY_ID": cleanDataFromScreen.screenBackgroundInfo["tnaActivityID"],
                    "QFE_STATUS": "",
                    "SUSTAINABILITY": cleanDataFromScreen.buyername,               // This means buyer name
                    "GPT_REPORT_NO": "",
                    "GPT_APPROVAL_STATUS": "",
                    "GPT_APPROVAL_REMARK": "",
                    "TIMELINE": "",
                    "SUGGESTION_BY_LIFESTYLE": "",
                    "LOG_COMMERCIAL_APPROVAL": "",
                    "REMARK": cleanDataFromScreen.finalRemarks,
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
                    "DEFECT_TYPE": "Defect",
                    "DEFECT_ID": defectObj.id,
                    "MEASUREMENT_VALUE": defectObj.maindefect,
                    "CRITICAL": defectObj.maindefect_crit,
                    "DEFECT_FILES": [],

                  }
                  if(defectObj.files != null)
                  {
                    for(var fileObject of defectObj.files)
                    {
                      var newDefectFileObj = {"FILE_NAME": fileObject["fileName"], "KEY_NAME": fileObject["fileName"]}
                      newDefectObject["DEFECT_FILES"].push(newDefectFileObj)
                    }
                  }
                 

                  targetObject["saveInspList"][0]["DEFECT_LIST"].push(newDefectObject)
                }

                for (let defectObj of cleanDataFromScreen["measurementdefect"])
                {
                  var newDefectObject = {
                    "MAJOR": defectObj.measurementdefect_maj,
                    "MINOR": defectObj.measurementdefect_min,
                    "DEFECT_TYPE": "Measurement",
                    "DEFECT_ID": "0",
                    "MEASUREMENT_VALUE": defectObj.measurementdefect,
                    "CRITICAL": defectObj.measurementdefect_crit,
                    "DEFECT_FILES": [],
                  }

                 
                  if(defectObj.files != null)
                  {
                    for(let fileObject of defectObj.files)
                    {
                      var newDefectFileObj = {"FILE_NAME": fileObject["fileName"], "KEY_NAME": fileObject["fileName"]}
                      newDefectObject["DEFECT_FILES"].push(newDefectFileObj)
                    }
                  }
                  
                  targetObject["saveInspList"][0]["DEFECT_LIST"].push(newDefectObject)
                }

                for (var defectObj of cleanDataFromScreen["miscdefect"])
                {
                  var newDefectObject = {
                    "MAJOR": defectObj.miscdefect_maj,
                    "MINOR": defectObj.miscdefect_min,
                    "DEFECT_TYPE": "MISC Defect",
                    "DEFECT_ID": "0",
                    "MEASUREMENT_VALUE": defectObj.miscdefect,
                    "CRITICAL": defectObj.miscdefect_crit,
                    "DEFECT_FILES": [],
                  }

                  if(defectObj.files != null)
                  {
                    for(var fileObject of defectObj.files)
                    {
                      var newDefectFileObj = {"FILE_NAME": fileObject["fileName"], "KEY_NAME": fileObject["fileName"]}
                      newDefectObject["DEFECT_FILES"].push(newDefectFileObj)
                    }
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
        console.log("############ Current aql object ##############")
        console.log(DropdownList["aqllevel"].SelectedValue)

        if(DropdownList["aqllevel"] == null || DropdownList["aqllevel"].SelectedValue == "")
        {
          //Alert.alert("Please select an aql value")
          Toast.show("Please select an AQL value", {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM - 50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
          return
        }
        try{
        
          let newPackedQty = parseInt(newValue)
          let newRadioButtonList = {...RadioButtonList}
          if(newFieldsObject["prqty_val"] != "" && newPackedQty < parseInt(newFieldsObject["prqty_val"]))
            newRadioButtonList["isPartInspection"] = "Yes"
          else
            newRadioButtonList["isPartInspection"] = "No"
          
          SetRadioButtonList(newRadioButtonList)

          let SelectedAqlObject = DropdownList["aqllevel"].SelectedValue
          let rangeFound = false
          for(let i = 0; i<(SelectedAqlObject.aqlDetails).length; i++)
          {
            let currentRangeObject = SelectedAqlObject.aqlDetails[i]
            if(newPackedQty <= parseInt(currentRangeObject.maxValue) && newPackedQty >= parseInt(currentRangeObject.minValue))
            {
              newFieldsObject["samplesize"] = (currentRangeObject.sampleSize).toString()
              rangeFound = true
              break
            }
          }

          if(!rangeFound)
          {
            let arrayLength = SelectedAqlObject.aqlDetails.length

            if(newPackedQty >= parseInt((SelectedAqlObject.aqlDetails)[arrayLength - 1].maxValue))
              newFieldsObject["samplesize"] = ((SelectedAqlObject.aqlDetails)[ arrayLength - 1].sampleSize).toString()
            else
              newFieldsObject["samplesize"] = ((SelectedAqlObject.aqlDetails)[0].sampleSize).toString()
          }
        }
        catch(e){
          console.log("sample size couldn't be reset")
          newFieldsObject["samplesize"] = ""
          console.log(e)
        }
  
            //newFieldsObject["samplesize"] = "5"

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
                //Alert.alert("Pleae enter valid fg and packed quantities")
                Toast.show("Pleae enter valid FG and Packed quantities", {
                  duration: Toast.durations.SHORT,
                  position: Toast.positions.BOTTOM - 50,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 0,
                });
                return
            }   

            if(parseInt(currentPackedQty) < parseInt(currentFg1Qty))
            {
                
                newFieldsObject["fg1qty"] = ""
                newFieldsObject["fg2qty"] = ""
                SetFieldList(newFieldsObject)
                //storeData("FieldList", newFieldsObject)
                //Alert.alert("fg values cannot be greater than packed quantity")
                Toast.show("FG values cannot be greater than packed quantity", {
                  duration: Toast.durations.SHORT,
                  position: Toast.positions.BOTTOM - 50,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 0,
                });
                
                return
            }
            currentPackedQty = parseInt(currentPackedQty)
            currentFg1Qty = parseInt(currentFg1Qty)
            var newFg2Qty = currentPackedQty - currentFg1Qty

            
            newFieldsObject["fg2qty"] = newFg2Qty.toString()

        
        `,

        "maindefect_add": 
        `
            if(FieldList["samplesize"] == "")
            {
              //Alert.alert("Please enter packed quantity")
              Toast.show("Pleae Packed quantity", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM - 50,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              return
            }

            if(DropdownList["maindefect"].SelectedValue == "")
            {
              //Alert.alert("Please select a defect")
              Toast.show("Please select a defect", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM - 50,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              return
            }

            if(newRowObject.maindefect_crit == "" && newRowObject.maindefect_maj == "" && newRowObject.maindefect_min == "")
            {
              //Alert.alert("Please enter atleast one defect")
              Toast.show("Please enter atleast one defect", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM - 50,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              return
            }
            
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
                if(FieldList["samplesize"] == "")
                {
                  //Alert.alert("Please enter packed quantity")
                  Toast.show("Please enter packed quantity", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM - 50,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                  });
                  return
                }

                if(FieldList["measurementdefect"] == "")
                {
                  //Alert.alert("Please enter a defect")
                  Toast.show("Please enter a defect", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM - 50,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                  });
                  return
                }

                if(newRowObject.measurementdefect_crit == "" && newRowObject.measurementdefect_maj == "" && newRowObject.measurementdefect_min == "")
                {
                  //Alert.alert("Please enter atleast one defect")
                  Toast.show("Please enter atleast one defect", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM - 50,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                  });
                  return
                } 

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
                    if(FieldList["samplesize"] == "")
                    {
                      //Alert.alert("Please enter packed quantity")
                      Toast.show("Please enter packed quantity", {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM - 50,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                      });
                      return
                    }
                    if(FieldList["miscdefect"] == "")
                    {
                      //Alert.alert("Please enter a defect")
                      Toast.show("Please enter a defect", {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM - 50,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                      });
                      return
                    }
    
                    if(newRowObject.miscdefect_crit == "" && newRowObject.miscdefect_maj == "" && newRowObject.miscdefect_min == "")
                    {
                      //Alert.alert("Please enter atleast one defect")
                      Toast.show("Please enter atleast one defect", {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM - 50,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                      });
                      return
                    } 

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
                        //Alert.alert("Enter valid number of total cartons")
                        Toast.show("Enter valid number of total cartons", {
                          duration: Toast.durations.SHORT,
                          position: Toast.positions.BOTTOM - 50,
                          shadow: true,
                          animation: true,
                          hideOnPress: true,
                          delay: 0,
                        });
                        return
                    }

                    if(currentSampleSize > totalCartons)
                    {
                        //Alert.alert("Carton sample size cannot be greater than total cartons")
                        Toast.show("Carton sample size cannot be greater than total cartons", {
                          duration: Toast.durations.SHORT,
                          position: Toast.positions.BOTTOM - 50,
                          shadow: true,
                          animation: true,
                          hideOnPress: true,
                          delay: 0,
                        });
                        return
                    }
                    
            `,

            
            "InspectionResult": `
                
               //Some placeholder code
            
            `,

            "finalSubmission": `
                
            if(RadioButtonList["result"] == "")
            {
              //Alert.alert("Please select a result")
              Toast.show("Please select a result", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM - 50,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              return
            }

            if(FieldList["totaldefect"] == "" || FieldList["totaldefect"] == "0")
            {
              //Alert.alert("Please enter a defect")
              Toast.show("Please enter a defect", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM - 50,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              return
            }
            SetDataLoaded(false)
                
            

            var cleanData = getCleanData({screenBackgroundInfo: CurrentScreenBackgroundInfo}, {...FieldList}, {...DropdownList}, {...HybridDataObjects}, {...ChecklistDataObjects} , {...RadioButtonList})
            console.log("############################ Cleaned data for current screen ##########################")
            console.log(cleanData)
        


            var resquestObject = CustomDataModifierFunction(cleanData)

            const nestedRequestObject = {
              "companyID": CurrentScreenBackgroundInfo.companyId,
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

            //var formData  = new FormData()
            //formData.append("json", JSON.stringify(nestedRequestObject))

            let filesUriList = []
            Object.keys(HybridDataObjects).forEach(hybridObjectName => {
              for(let defectObject of HybridDataObjects[hybridObjectName])
              {
                if("files" in defectObject)
                {
                  for(var fileObject of defectObject["files"])
                  {
                    const newFileUri =  fileObject.fileUri
                    var fileType = fileObject.fileType
                    if(fileType == "image")
                      fileType = 'image/jpeg'
                    else if(fileType == "video")
                        fileType = "video/mp4"
                    else 
                      fileType = "please specify"
                    //formData.append(fileObject.fileName, {"name": fileObject.fileName, type: fileType, "uri": newFileUri})
                    filesUriList.push(newFileUri)
                  }
                }
              }

            
            })

            let statusUpdationQuery = ""

              if(cleanData.result == "onhold")

                  statusUpdationQuery = "update "+formDataTable.tableName+" set status = 'onhold' where formId = "+CurrentScreenId
                  
              else

                statusUpdationQuery = "update "+formDataTable.tableName+" set status = 'complete' where formId = "+CurrentScreenId


              let stringifiedFilesList =  JSON.stringify(filesUriList)
              let stringifiedRequestObject = JSON.stringify(nestedRequestObject)
               //await SaveOfflineAsyncStorage(CurrentScreenId.toString(), FieldList, DropdownList, HybridDataObjects, ChecklistDataObjects, RadioButtonList)

              await updateTable(formDataTable.tableName, statusUpdationQuery)
              
              await SaveInspectionDataOfflineSQL(cleanData, stringifiedFilesList, stringifiedRequestObject)
              
              console.log("################### Connection object value ####################", connection)
              
              if(connection == true && cleanData.result != "onhold")
              {
                console.log("############################# sending form data to the database as connection is available and inspection result is not onhold ###############")
                let statusObject = await sendFormData(CurrentScreenId)

                if(statusObject.status == true)
                {
                  try{
                    let currentFormRowDeletionQuery = "delete from "+formDataTable.tableName+" where formId = "+CurrentScreenId
                    let updateAdhocDataQuery = "delete from "+AdhocData.tableName+" where tnaActivityID = "+cleanData.screenBackgroundInfo["tnaActivityID"]
                    await updateTable(formDataTable.tableName, currentFormRowDeletionQuery )
                    await updateTable(AdhocData.tableName, updateAdhocDataQuery)
                    //Alert.alert("Data sent successfully to API")
                    Toast.show("Form submitted successfully", {
                      duration: Toast.durations.SHORT,
                      position: Toast.positions.BOTTOM - 50,
                      shadow: true,
                      animation: true,
                      hideOnPress: true,
                      delay: 0,
                    });
                  }
                  catch(e){
                    console.log("###################### Error in sending data to api ##############")
                    console.log(e)
                    Alert.alert("An error has occured")
                  }
                }
                else
                {
                  Alert.alert("Data couldn't be sent to API")
                }
                
              }
             else
              //Alert.alert(cleanData.result == "onhold" ? "Form saved Onhold" : "Form saved. Will be sent when internet available.")
              Toast.show("Data saved offline", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM - 100,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
             


              props.navigation.navigate("Quality", {"screenInformation": {}})
              //props.navigation.goBack()
              
              
              SetDataLoaded(true)
              return
              
              //console.log("############################### Request object to be sent #########################")
              //console.log(nestedRequestObject)
              
             
                


              console.log("####################### Form Data created ####################")
              console.log(formData)
            
              
              const fetchConfig = {
                method: "POST",
                      body: formData,
                      headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                        Authorization: "Bearer " + CurrentScreenBackgroundInfo.authToken,
                        "companyID": CurrentScreenBackgroundInfo["companyId"]
                      },
                }

                fetch("https://devsourcingapi.bluekaktus.com/Quality/saveInspectionDetails", fetchConfig)
                .then(response => {
                  console.log("############## Response status ##################### ", response.status)
                  return response.json()
                })
                .then(body => {
                  console.log("$$$$$$$$$$$$$$$$", body)
                  Alert.alert(body.result)
                  //removeValue(cleanData.screenBackgroundInfo["TNA_ACTIVITY_ID"])
                  //removeValue(CurrentScreenId)
                  if(body.result == "Success")
                    removeValue(CurrentScreenId)

                })
                .then(() => {
                  props.navigation.navigate("Quality")
                })
                
                .catch(error => {
                  Alert.alert("Could not submit inspection!")
                  console.log("######## Error in posting inspection data ##############")
                  console.log(error)
                })



                  
            `,
    

       
    }
}

module.exports.Placeholders = Placeholders