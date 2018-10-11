// 30 minutes max
    let students = [
        {name: 'Remy', cohort: 'Jan'},
        {name: 'Genevieve', cohort: 'March'},
        {name: 'Chuck', cohort: 'Jan'},
        {name: 'Osmund', cohort: 'June'},
        {name: 'Nikki', cohort: 'June'},
        {name: 'Boris', cohort: 'June'}
    ];
    for (var student of students){
    console.log('name: ' + student.name + " , " + 'cohort: ' + student.cohort)
    }


    let users = {
        employees: [
            {'first_name':  'Miguel', 'last_name' : 'Jones'},
            {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
            {'first_name' : 'Nora', 'last_name' : 'Lu'},
            {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
        ],
        managers: [
           {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
           {'first_name' : 'Gordon', 'last_name' : 'Poe'}
        ]
    };
    
    for (var item in users){
        console.log(item);
        for (var i = 0; i < users[item].length; i++){
            var index = i + 1;
            var first_name = users[item][i].first_name;
            var last_name = users[item][i].last_name;
            var num_letters = first_name.length + last_name.length;
            console.log(`${index} - ${last_name}, ${first_name} - ${num_letters}`);
        }
    };