import { Fragment, useState, useCallback } from "react"
import CustomInput from "./CustomInput"


// note : this form customises output based on keys only
const Form = ({ formFields, onSubmitSuccess }) => {
    let initialFormData = {}

    initialFormData = initialisationFunction({ ...formFields })

    const [formData, setFormData] = useState(initialFormData)





    function createElementArray(fieldObject = [], parent = null, parentname = "") {
        let finalArray = []
        Object.keys(fieldObject).forEach(key => {
            if (fieldObject[key].fields) {
                const namevalue = parent ? `${parent}.${key}` : key
                finalArray.push(...createElementArray(fieldObject[key].fields, namevalue, key))
            } else {
                finalArray.push({ ...fieldObject[key], namevalue: `${parent}.${key}`, parentname: parentname })
            }
        })
        return finalArray
    }


    const AllFields = createElementArray(formFields)
    // console.log("AllFields::::::::::::", AllFields)
    // console.log("AllFields::::::::::::", initialFormData)


    const handleInputChange = useCallback((e, namevalue) => {
        setFormData({ ...formData, [namevalue]: e.target.value })
    }, [])
    const handleSubmit = (e) => {

        e.preventDefault()


        function convertObject(obj) {
            const result = {};

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const keys = key.split('.');
                    let current = result;

                    for (let i = 0; i < keys.length; i++) {
                        if (!current.hasOwnProperty(keys[i])) {
                            if (i === keys.length - 1) {
                                current[keys[i]] = obj[key];
                            } else {
                                current[keys[i]] = {};
                            }
                        }

                        current = current[keys[i]];
                    }
                }
            }

            return result;
        }



        onSubmitSuccess(convertObject(formData))
    }


    return (

        <div>
            {/* {element} */}
            <form onSubmit={handleSubmit}>
                {
                    AllFields.map((field, i) => {
                        const {
                            name,
                            label,
                            type,
                            required,
                            namevalue,
                            parentname
                        } = field

                        return <Fragment key={field.namevalue}>

                            {AllFields[i - 1]?.parentname !== parentname && <h1>{parentname}</h1>}
                            <label htmlFor="">{label}</label>:
                            <CustomInput {...field} inputChange={handleInputChange} />
                            <br />
                            <br />
                        </Fragment>
                    })
                }

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form





const initialisationFunction = (fieldObject = {}) => {


    function formatTheObject(fieldObject = {}) {
        let storeData = {}
        Object.keys(fieldObject).forEach(key => {
            if (fieldObject[key].fields) {
                storeData[key] = formatTheObject(fieldObject[key].fields)
            } else {
                storeData[key] = ""
            }
        })
        return storeData
    }


    function flattenObj(obj) {
        let result = {};
        for (const i in obj) {
            if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
                const temp = flattenObj(obj[i]);
                for (const j in temp) {
                    result[i + '.' + j] = temp[j];
                }
            } else {
                result[i] = obj[i];
            }
        }
        return result;
    };


    return flattenObj(formatTheObject(fieldObject))

}