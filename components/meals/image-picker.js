'use client';

import classes from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from "next/image";
export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef();
    function handleImageClick(){
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPickedImage(fileReader.result)
        };
        fileReader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image picked yet.</p>}
                {pickedImage && (
                    <Image src={pickedImage} alt="The iamge slected by the user." fill />
                )}
            </div>
            <input
                className={classes.input}
                id={name}
                name={name}
                accept="image/png, image/jpeg"
                ref={imageInput}
                onChange={handleImageChange}
                required
                type="file"/>
            <button
                onClick={handleImageClick}
                className={classes.button}>
                Pick an Image
            </button>
        </div>
    </div>;
}