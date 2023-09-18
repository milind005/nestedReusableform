
import Form from "../reusable/Form"
import fields from "../constants/formFields"

const { name, age, email, area, city, pincode, facebook,
    twitter,
    insta } = fields

const SignIn = () => {



    const formFields = {
        person: {
            name: 'person',
            label: 'Personal Details',
            fields: {
                name: name,
                age: age,
                email: email,

                address: {
                    name: 'address',
                    label: 'Address',
                    fields: {
                        area: area,
                        city: city,
                        pincode: pincode,
                    },
                },
            },
        },
        socialMedia: {
            name: 'socialMedia',
            label: 'social Media',
            fields: {
                facebook: facebook,
                twitter: twitter,
                insta: insta,

            },
        },
    };



    const handleSubmit = (finalObject = {}) => {

        // console.log(finalObject)
        // function convertObject(obj) {
        //     const result = {};

        //     for (const key in obj) {
        //         if (obj.hasOwnProperty(key)) {
        //             const keys = key.split('.');
        //             let current = result;

        //             for (let i = 0; i < keys.length; i++) {
        //                 if (!current.hasOwnProperty(keys[i])) {
        //                     if (i === keys.length - 1) {
        //                         current[keys[i]] = obj[key];
        //                     } else {
        //                         current[keys[i]] = {};
        //                     }
        //                 }

        //                 current = current[keys[i]];
        //             }
        //         }
        //     }

        //     return result;
        // }


        // const outputObject = convertObject(finalObject);

        console.log("sign In Obj::::::::::::::::", finalObject)

    }


    return (
        <>
    // note : this form customises output based on keys only in object structure

            <Form formFields={formFields} onSubmitSuccess={handleSubmit} />
        </>
    )
}

export default SignIn


