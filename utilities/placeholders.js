const Placeholders = {
    "ApiUrls": {
        //"ApiUrl1": "",
        "auditchecklist": "http://4a39a4160cc8.ngrok.io/api/reactScreenTool/controls/getFormattedChecklistRows",
        "aqllevel": "https://qualitylite.bluekaktus.com/api/bkQuality/auditing/getNestedAQLDetails" 
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
            if(field == "aqllevel")
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
            var currentPackedQty = FieldList["packedqty"] != "" ? parseInt(FieldList["packedqty"]) : 0
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
            var currentFg1Qty = newFieldsObject["fg1qty"]

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

        "TotalCriticalDefect": `
           
            return PlaceholderStates.DefectsSummary.totalCritical
        `,
        "TotalMajorDefect": `
            return PlaceholderStates.DefectsSummary.totalMajor
        `,
        "TotalMinorDefect": `
            return PlaceholderStates.DefectsSummary.totalMinor
        `,
        
        "AddMainDefect": `
                //From Placeholder AddMainDefect key
                var newPlaceholderStates = {...PlaceholderStates}
                var newTotalCritical = newPlaceholderStates.DefectsSummary.totalCritical != null  ? parseInt(newPlaceholderStates.DefectsSummary.totalCritical) : 0
                var newTotalMajor = newPlaceholderStates.DefectsSummary.totalMajor != null ? parseInt(newPlaceholderStates.DefectsSummary.totalMajor) : 0
                var newTotalMinor = newPlaceholderStates.DefectsSummary.totalMinor != null ? parseInt(newPlaceholderStates.DefectsSummary.totalMinor) : 0
                for (var MainDefectObject of HybridDataObjects["Main Defect"])
                {
                    if(MainDefectObject.id != "-1")
                    {
                        newTotalCritical += (parseInt(MainDefectObject.mainCritical))
                        newTotalMajor += (parseInt(MainDefectObject.mainMajor))
                        newTotalMinor += (parseInt(MainDefectObject.mainMinor))
                    }
                }
                newPlaceholderStates.DefectsSummary.totalCritical = newTotalCritical.toString()
                newPlaceholderStates.DefectsSummary.totalMajor = newTotalMajor.toString()
                newPlaceholderStates.DefectsSummary.totalMinor = newTotalMinor.toString()
                SetPlaceholderStates(newPlaceholderStates)
        `,

        "AddMissDefect": `
                //From Placeholder AddMissDefect key
                var newPlaceholderStates = {...PlaceholderStates}
                var newTotalCritical = newPlaceholderStates.DefectsSummary.totalCritical != null  ? parseInt(newPlaceholderStates.DefectsSummary.totalCritical) : 0
                var newTotalMajor = newPlaceholderStates.DefectsSummary.totalMajor != null ? parseInt(newPlaceholderStates.DefectsSummary.totalMajor) : 0
                var newTotalMinor = newPlaceholderStates.DefectsSummary.totalMinor != null ? parseInt(newPlaceholderStates.DefectsSummary.totalMinor) : 0
                for (var MissDefectObject of HybridDataObjects["Miss Defect"])
                {
                    if(MissDefectObject.id != "-1")
                    {
                        newTotalCritical += (parseInt(MissDefectObject.missCritical))
                        newTotalMajor += (parseInt(MissDefectObject.missMajor))
                        newTotalMinor += (parseInt(MissDefectObject.missMinor))
                    }
                }
                newPlaceholderStates.DefectsSummary.totalCritical = newTotalCritical.toString()
                newPlaceholderStates.DefectsSummary.totalMajor = newTotalMajor.toString()
                newPlaceholderStates.DefectsSummary.totalMinor = newTotalMinor.toString()
                SetPlaceholderStates(newPlaceholderStates)
        `
    }
}

module.exports.Placeholders = Placeholders