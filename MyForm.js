import React, { useState } from 'react';



function MyForm() {



    function flatten(arr) {
        const newArr = arr.reduce((acc, item) => {
            if (Array.isArray(item)) {
                acc = acc.concat(flatten(item));
            } else {
                acc.push(item);
            }

            return acc;
        }, []);

        return newArr;
    }


    const flattenObj = (ob) => {

        let result = {};
        for (const i in ob) {

            if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
                const temp = flattenObj(ob[i]);
                for (const j in temp) {
                    result[i + '.' + j] = temp[j];
                }
            }
            else {
                result[i] = ob[i];
            }
        }
        return result;
    };




    const arr1 = [
        {
            name: "John",
            sname: "Smith",
        },
        null,
        undefined,
        "Hello",
        3445,
        {},
        [1, 2, 3, 4],
        [[{ ram: [] }], [], 45, "Hello"],
        [{}, {}, 45, "Hello"],
    ];



    // console.log(":::::::::::::::::::;", arrayPurify(arr1))
    // console.log(":::::obj::::::::::::::;", flattenObj({ show: { man: { power: 2, pk: { rr: "fdfd", hyjuhjsdhjfh: "" }, raj: { p: {} } } } }))


    function arrayPurify(arr) {
        const newArray = []
        arr.forEach(cur => {
            if (Array.isArray(cur)) {
                // console.log("array")
                if (cur === undefined || cur.length === 0 || cur === null) {
                    return
                } else {

                    let flattenedArray = flatten(cur)
                    const neArray = arrayPurify(flattenedArray)
                    if (neArray.length > 0) {
                        // console.log("thisArray: ", flattenedArray)
                        newArray.push(neArray)
                        return
                    }
                }
            }
            else if (typeof cur === "string") {
                if (String.length > 0) {
                    newArray.push(cur)
                    return
                }
            }
            else if (typeof cur === "number") {
                newArray.push(cur)
                return
            }
            if (typeof cur === "object") {
                if (cur === null) {
                    return
                } else {
                    const newObj = flattenObj(cur)
                    const neArray = arrayPurify(Object.values(newObj))
                    if (neArray.length > 0) {
                        newArray.push(newObj)
                        return
                    }
                }
            }
        })
        return newArray
    }



    return (
        <h1>
            Array
        </h1>
    )
}

export default MyForm;





