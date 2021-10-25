let projectRow = document.getElementsByClassName("table-row");
const projectData = projectRow.children;
let size = projectData.length;
const deleteRow = document.getElementsByClassName("deleteRow");



/* Updating projact detail  */



for (let i = 0; i < deleteRow.length; i++) {
      console.log(deleteRow[i].addEventListener('click',
            function () {
                  projectRow[i].remove();
                  updateProjectData()
            }
      ))
};

