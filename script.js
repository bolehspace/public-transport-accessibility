// $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
//     var min = parseInt($('#min').val(), 10);
//     var max = parseInt($('#max').val(), 10);
//     var age = parseFloat(data[3]) || 0; // use data for the age column

//     if (
//         (isNaN(min) && isNaN(max)) ||
//         (isNaN(min) && age <= max) ||
//         (min <= age && isNaN(max)) ||
//         (min <= age && age <= max)
//     ) {
//         return true;
//     }
//     return false;
// });

var xmlhttp = new XMLHttpRequest();
var url = "https://opensheet.elk.sh/1JySbzz_M85kzFQcKGXl8TRq5Tmz49reBVISeJjlZ-EQ/Read%20Only";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            print
            var table = $('#example').DataTable({
            "data": data,
            "columns": [
                { "data": "Type" },
                { "data": "Line " },
                { "data": "Station Code" },
                { "data": "Station Name" },
                { "data": "Elevator Functionality" },
                { "data": "Escalator Functionality" },
                { "data": "Accessibility Code" }
                ]
            });


        }
    }
    //this is  jsonData.json
    //{
    //   "data": [
    //     {
    //       "id": "1",
    //       "name": "Tiger Nixon",
    //       "position": "System Architect",
    //       "salary": "$320,800",
    //       "start_date": "2011/04/25",
    //       "office": "Edinburgh",
    //       "extn": "5421"
    //     }
    //   ]
    // }
