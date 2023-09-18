import fields from "../constants/formFields"
import Form from "../reusable/Form"
const { name, email, country } = fields



const LoginForm = () => {


    const formStruct = {
        name, email, country
    }


    // note : this form customises output based on keys only in object structure

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
        console.log("Login Obj|||||||||||||||||||||", finalObject);

    }


    // note : this form customises output based on keys only in object structure

    return (
        <div>
            <h1>Login</h1>

            <Form formFields={formStruct} onSubmitSuccess={handleSubmit} />
        </div>
    )
}

export default LoginForm