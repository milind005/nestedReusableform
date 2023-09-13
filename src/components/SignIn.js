

import Form from "../reusable/Form"

const SignIn = () => {



    const formFields = {
        person: {
            name: 'person',
            label: 'Personal Details',
            fields: {
                name: { name: 'name', label: 'Name', type: 'text', required: true },
                age: { name: 'age', label: 'Age', type: 'number', required: true },
                email: { name: 'email', label: 'Email', type: 'email', required: true },

                address: {
                    name: 'address',
                    label: 'Address',
                    fields: {
                        area: { name: 'area', label: 'Area', type: 'text', required: true },
                        city: { name: 'city', label: 'City', type: 'text', required: true },
                        pincode: { name: 'pincode', label: 'Pin Code', type: 'text', required: true },
                    },
                },
            },
        },
        socialMedia: {
            name: 'socialMedia',
            label: 'social Media',
            fields: {
                facebook: { name: 'facebook', label: 'Facebook', type: 'text', required: true },
                twitter: { name: 'twitter', label: 'Twitter', type: 'text', required: true },
                insta: { name: 'insta', label: 'Insta', type: 'text', required: true },

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


