import {useState} from "react";

const MyPhotoInput =({
    field,
    formikRef
}) => {

    const [photo, setPhoto] = useState("https://bytes.ua/wp-content/uploads/2017/08/no-image.png");

    const selectImage = (event) => {
        const file = event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(file)); 
        formikRef.current.setFieldValue(field, file);
    }

    return (
        <div className="mb-3">
            <label htmlFor={field} className="form-label">
                <img src={photo}
                    width="150"
                    style={{cursor: "pointer"}} />
            </label>
            <input type="file" 
                id={field}
                name={field}
                style={{display: "none"}} 
                onChange = {selectImage}/>
        </div>
    );

}
export default MyPhotoInput;