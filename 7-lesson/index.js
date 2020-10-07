const object = {
    array: [
        { title: "Some title 1", desc: "Some desc 1"},
        { title: "Some title 2", desc: "Some desc 22"},
        { title: "Some title 3", desc: "Some desc 333"},
        { title: "Some title 4", desc: "Some desc 444"},
        { title: "Some title 5", desc: "Some desc 5555"},
        { title: "Some title 6", desc: "Some desc 66666"},
    ],
};

const getTheLongestTitle = (object) => {
    let longestDesc = '';
    let longestDescTitle = '';

    for (const entry of object.array) {
        const { title, desc } = entry;
        if (desc.length > longestDesc.length) {
            longestDesc = desc;
            longestDescTitle = title;
        }
    }

    return longestDescTitle;        
};

console.log(getTheLongestTitle(object));