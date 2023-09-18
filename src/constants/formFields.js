export default {

    name: {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true
    },
    age: {
        name: 'age',
        label: 'Age',
        type: 'number',
        required: true
    },

    area: {
        name: 'area',
        label: 'Area',
        type: 'text',
        required: true
    },
    city: {
        name: 'city',
        label: 'City',
        type: 'text',
        required: true
    },
    pincode: {
        name: 'pincode',
        label: 'Pin Code',
        type: 'text',
        required: true
    },
    cardNumber: {
        name: 'cardNumber',
        label: 'Card Number',
        type: 'text',
        required: true
    },

    // input type email 
    email: {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true
    },

    // input type date 
    date: {
        name: 'date',
        label: 'Date',
        type: 'date',
        required: true
    },
    // input type checkbox 

    footbal: {
        name: 'footbal',
        label: 'Footbal',
        type: 'checkbox',
    },
    kabbadi: {
        name: 'kabbadi',
        label: 'Kabbadi',
        type: 'checkbox',
    },
    kho_kho: {
        name: 'kho_kho',
        label: 'Kho Kho',
        type: 'checkbox',
    },
    facebook: { name: 'facebook', label: 'Facebook', type: 'text', required: true },
    twitter: { name: 'twitter', label: 'Twitter', type: 'text', required: true },
    insta: { name: 'insta', label: 'Insta', type: 'text', required: true },

    country: {
        name: 'country',
        label: 'Country',
        type: 'select',
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