const Placeholders = {
    "ApiUrls": {
        //"ApiUrl1": "",
        "auditchecklist": "http://ca63d96353b2.ngrok.io/api/reactScreenTool/controls/getAuditChecklistValues"
    },
    "StateVariables": {
        "DefectsSummary": {
            "totalCritical": "0",
            "totalMajor": "0",
            "totalMinor": "0"
        },
    },
    "CodeSnippets": {
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