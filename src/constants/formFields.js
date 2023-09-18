export default {

    name: {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: "Enter the name",
        required: true,
        value: ""
    },
    age: {
        name: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        placeholder: "Enter the age",
        value: ""
    },
    password: {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        value: ""

    },

    area: {
        name: 'area',
        label: 'Area',
        type: 'text',
        required: true,
        placeholder: "Enter the area",
        value: ""
    },
    city: {
        name: 'city',
        label: 'City',
        type: 'text',
        required: true,
        value: ""
    },
    pincode: {
        name: 'pincode',
        label: 'Pin Code',
        type: 'text',
        required: true,
        value: ""
    },
    cardNumber: {
        name: 'cardNumber',
        label: 'Card Number',
        type: 'text',
        required: true,
        value: ""
    },
    about: {
        name: 'cardNumber',
        label: 'Card Number',
        type: 'textArea',
        required: true,
        value: ""
    },

    // input type email 
    email: {
        name: 'email',
        label: 'Email',
        placeholder: "Enter the email",
        type: 'email',
        required: true,
        value: ""
    },

    // input type date 
    date: {
        name: 'date',
        label: 'Date',
        type: 'date',
        required: true,
        value: ""
    },
    // input type checkbox 

    footbal: {
        name: 'footbal',
        label: 'Footbal',
        type: 'checkbox',
        ischecked: false
    },
    kabbadi: {
        name: 'kabbadi',
        label: 'Kabbadi',
        type: 'checkbox',
        ischecked: false
    },
    kho_kho: {
        name: 'kho_kho',
        label: 'Kho Kho',
        type: 'checkbox',
        ischecked: false
    },
    facebook: { name: 'facebook', label: 'Facebook', type: 'text', required: true, value: "" },
    twitter: { name: 'twitter', label: 'Twitter', type: 'text', required: true, value: "" },
    insta: { name: 'insta', label: 'Insta', type: 'text', required: true, value: "" },

    country: {
        name: 'country',
        label: 'Country',
        type: 'select',
        value: "",
        options: [
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Australia', value: 'au' },
            // Add more options as needed
        ]
    },
    gender: {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        value: "",
        options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' }
            // Add more options as needed
        ]
    },
    category: {
        name: 'category',
        label: 'Category',
        type: 'select',
        required: true,
        value: "",
        options: [
            { label: 'Technology', value: 'tech' },
            { label: 'Sports', value: 'sports' },
            { label: 'Fashion', value: 'fashion' },
            // Add more options as needed
        ],
    },
    resume: {
        name: 'resume',
        label: 'Resume',
        type: 'file',
        // accept: '.pdf,.doc,.docx', // Specify accepted file extensions
        required: true,
    },
    profileImage: {
        name: 'profileImage',
        label: 'Profile Image',
        type: 'file',
        accept: 'image/*', // Accept only image files
        required: true,
    }


}




// profileImage: {
//     name: 'profileImage',
//     label: 'Profile Image',
//     type: 'file',
//     accept: 'image/*', // Accept only image files
//     required: true,
// },

// resume: {
//     name: 'resume',
//     label: 'Resume',
//     type: 'file',
//     accept: '.pdf,.doc,.docx', // Specify accepted file extensions
//     required: true,
// },