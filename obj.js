const obj1= [ 
    {name: "alex", 
        age: 18, 
        gender: "M"},
    {name: "diana", 
        age: 56, 
        gender: "F"},
    {name: "sachin", 
        age: 14, 
        gender: "M"},
    {name: "alia", 
        age: 12, 
        gender: "F"},
     {name: "yash", 
        age: 78 , 
        gender: "M"}
    ]

    console.log(obj1)

    const underage= obj1.filter(i=> i.age<18)
    console.log(underage)

    const females=obj1.filter(x=> x.gender==="F")
    females.forEach(u=>console.log(`${u.name} is a female`))

    