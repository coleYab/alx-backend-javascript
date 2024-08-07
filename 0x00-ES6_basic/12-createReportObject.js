export default function createReportObject(employeesList) {
    const obj = {
        allEmployees : employeesList,

        function getNumberOfDepartment(employeesList) {
            return employeesList.keys().length;
        }
    };


    return obj;
}
