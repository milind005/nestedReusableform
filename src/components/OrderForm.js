import fields from "../constants/formFields"
import Form from "../reusable/Form"
const {
    name, email, age, area, city, pincode, cardNumber, date
} = fields

const initialState = {

}


const OrderForm = () => {


    const formStruct = {
        personalDetails: {
            name: 'personalDetails',
            label: 'Personal Details',
            fields: {
                name: { name: 'name', label: 'Name', type: 'text', required: true },
                age: { name: 'age', label: 'Age', type: 'number', required: true },
                email: { name: 'email', label: 'Email', type: 'email', required: true },
                currentAddress: {
                    name: 'currentAddress',
                    label: 'Current Address',
                    fields: {
                        area: { name: 'area', label: 'Area', type: 'text', required: true },
                        city: { name: 'city', label: 'City', type: 'text', required: true },
                        pincode: { name: 'pincode', label: 'Pin Code', type: 'text', required: true },
                    },
                },
                permanentAddress: {
                    name: 'permanentAddress',
                    label: 'Permanent Address',
                    fields: {
                        area: { name: 'area', label: 'Area', type: 'text', required: true },
                        city: { name: 'city', label: 'City', type: 'text', required: true },
                        pincode: { name: 'pincode', label: 'Pin Code', type: 'text', required: true },
                    },
                },
            },
        },
        cardDetails: {
            name: 'cardDetails',
            label: 'Card Details',
            fields: {
                cardNumber: { name: 'cardNumber', label: 'Card Number', type: 'text', required: true },
                date: { name: 'date', label: 'Date', type: 'date', required: true },
            },
        },
    };


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
        console.log("OrderFrom Obj|||||||||||||||||||||", finalObject);

    }


    // note : this form customises output based on keys only in object structure

    return (
        <div>
            <h1>Order</h1>
            <button onClick={handleSubmit}>handle</button>
            <Form formFields={formStruct} onSubmitSuccess={handleSubmit} />
        </div>
    )
}

export default OrderForm