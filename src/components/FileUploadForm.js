import { useState } from 'react';
import Form from '../reusable/Form';
import formFields from '../constants/formFields';

const { resume, profileImage, name, email, about } = formFields

console.log({ resume, profileImage })
const formStruct = { name, email, resume, profileImage, about }


function FileUploadForm() {


    const handleSubmit = (fromData) => {
        console.log("::::::::::::::::::::::", fromData)
    };



    return (
        <div>
            <h1>File Upload Form</h1>

            <Form formFields={formStruct} onSubmitSuccess={handleSubmit} />
        </div>
    );
}

export default FileUploadForm;
