import fields from "../constants/formFields"
import Form from "../reusable/Form"
const {
    name, email, age, area, city, pincode, cardNumber, date
} = fields



const OrderForm = () => {


    const formStruct = {
        personalDetails: {
            name: 'personalDetails',
            label: 'Personal Details',
            fields: {
                name: name,
                age: age,
                email: email,
                currentAddress: {
                    name: 'currentAddress',
                    label: 'Current Address',
                    fields: {
                        area: area,
                        city: city,
                        pincode: pincode,
                    },
                },
                permanentAddress: {
                    name: 'permanentAddress',
                    label: 'Permanent Address',
                    fields: {
                        area: area,
                        city: city,
                        pincode: pincode,
                    },
                },
            },
        },
        cardDetails: {
            name: 'cardDetails',
            label: 'Card Details',
            fields: {
                cardNumber: cardNumber,
                date: date,
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