const Placeholders = {
    "ApiUrls": {
        //"ApiUrl1": "",
        "auditchecklist": "http://9e4b4954ef15.ngrok.io/api/reactScreenTool/controls/getFormattedChecklistRows",
        "aqllevel": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getNestedAQLDetails",
        "maindefect": "http://9e4b4954ef15.ngrok.io/api/reactScreenTool/controls/getFormattedDefectsList",
    },
    "StateVariables": {
        "DefectsSummary": {
            "totalCritical": "0",
            "totalMajor": "0",
            "totalMinor": "0"
        },
    },
    "CodeSnippets": {
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

                CurrentScreenBackgroundInfo = props.navigation.getParam("orderInfo")
                CurrentScreenId = props.navigation.getParam("orderInfo")["TNA_ACTIVITY_ID"]

                


                useEffect(() => {

                    console.log("############# Current screen background information ##############")
                    console.log(CurrentScreenBackgroundInfo)
                    
                    var newFieldList = {...FieldList}
                    newFieldList["pqqty_val"] = CurrentScreenBackgroundInfo["PR_QTY"]
                    newFieldList["doneqty_val"] = "0"
                    SetFieldList(newFieldList)
                    

                }, [])

  
            `,

            "finalSubmission": `
                //clearAll()

                var cleaneData = getCleanData({...CompleteCurrentScreenData})
                console.log("############################ Cleaned data for current screen ##########################")
                console.log(cleaneData)
            
            `,
    

       
    }
}

module.exports.Placeholders = Placeholders