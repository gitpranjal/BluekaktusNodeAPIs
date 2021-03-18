const tasks = [];
Object.keys(ChecklistDataObjects).forEach((checklistEntity) => {
  tasks.push(
    (async (checklistEntity) => {
      var ChecklistStructureInfoObject = ChecklistDataObjects[
        checklistEntity
      ].filter((obj) => obj.id == "-1")[0];
      console.log(
        "############ Checklist structure info object for " +
          checklistEntity +
          " ########"
      );
      console.log(ChecklistStructureInfoObject);
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      // .then(response => response.json())

      const body = await response.json();

      const newRowlist = body;
      console.log(
        "############# new rowlist for checklist named " +
          checklistEntity +
          " from api ##############"
      );
      console.log(newRowlist);

      rowList = rowList.concat(newRowlist);

      console.log(
        "######### pushing checklist objects in checklist list ##############"
      );
      for (var i = 0; i < rowList.length; i++) {
        var newRowObject = { id: i.toString() };

        for (var column of Object.keys(ChecklistStructureInfoObject)) {
          if (column == "id" || column == "ApiUrl") continue;

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
            };
          }
          if (ChecklistStructureInfoObject[column]["type"] == "radioButton") {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              options: ChecklistStructureInfoObject[column]["options"],
            };
          }
          if (ChecklistStructureInfoObject[column]["type"] == "dropdown") {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              SelectedValue: "",
              ValueListUrl: "",
              ValuesList: [
                { id: "1", name: "option1" },
                { id: "2", name: "option2" },
              ],
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
  });

Object.keys(ChecklistDataObjects).forEach((checklistEntity) => {
  var ChecklistStructureInfoObject = ChecklistDataObjects[
    checklistEntity
  ].filter((obj) => obj.id == "-1")[0];
  console.log(
    "############ Checklist structure info object for " +
      checklistEntity +
      " ########"
  );
  console.log(ChecklistStructureInfoObject);
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

  fetch(ChecklistStructureInfoObject.ApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      const newRowlist = body;
      console.log(
        "############# new rowlist for checklist named " +
          checklistEntity +
          " from api ##############"
      );
      console.log(newRowlist);

      rowList = rowList.concat(newRowlist);

      console.log(
        "######### pushing checklist objects in checklist list ##############"
      );
      for (var i = 0; i < rowList.length; i++) {
        var newRowObject = { id: i.toString() };

        for (var column of Object.keys(ChecklistStructureInfoObject)) {
          if (column == "id" || column == "ApiUrl") continue;

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
            };
          }
          if (ChecklistStructureInfoObject[column]["type"] == "radioButton") {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              options: ChecklistStructureInfoObject[column]["options"],
            };
          }
          if (ChecklistStructureInfoObject[column]["type"] == "dropdown") {
            newRowObject[column] = {
              type: ChecklistStructureInfoObject[column]["type"],
              variableName: column + "_" + i,
              SelectedValue: "",
              ValueListUrl: "",
              ValuesList: [
                { id: "1", name: "option1" },
                { id: "2", name: "option2" },
              ],
            };
          }
        }

        newChecklistDataObjects[checklistEntity].push(newRowObject);
        // SetChecklistDataObjects(newChecklistDataObjects)
        //ChecklistDataObjects[checklistEntity].push(newRowObject)
      }
    })
    .catch((e) => {
      console.log(
        "################ Error in fetching from API for " + checklistEntity
      );
      console.log(e);
    });
});
