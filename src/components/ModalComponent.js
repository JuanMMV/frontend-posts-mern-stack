import React from "react";

const ModalComponent = ({modalVisible, setModalVisible, fullImage, setFullImage}) => {
    if(!modalVisible) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20">
            <span 
                className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
                onClick={()=>{
                    setModalVisible(false)
                    setFullImage("")
                }} 
            >
                &times;
            </span>
            <img 
                src={fullImage} 
                alt="imagen full"
                className="max-w-[80%] max-h-[80%] object-cover"
                onClick={()=>{
                    setModalVisible(false)
                    setFullImage("")
                }} 
            />
        </div>
    );
};

export default ModalComponent;
