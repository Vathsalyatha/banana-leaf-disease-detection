import React, { useEffect, useState } from 'react'
import axios from "axios"

const PredictDisease = () => {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState();
    const handlePredictDisease = async (e) => {
        e.preventDefault();
        const data = new FormData();
        if (file) {
            data.append("file", file);
        }
        try {
            const response = await axios.post('http://localhost:8000/predict', data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setPrediction(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if (file) {
            if (file.type.startsWith("image/")) {

                const imageUrl = URL.createObjectURL(file);
                setImage(imageUrl);

            } else {
                alert("Please select an image file");
            }
        }
    }, [file]);

  return (
    <div className='w-full bg-amber-50/25 z-20 flex items-center justify-center mt-20 lg:mt-40'>
                <form onSubmit={handlePredictDisease} className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-[90%] lg:w-[50%] p-5 border border-dashed border-spacing-10 rounded-2xl h-60 flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-5 w-full'>
                            <h3 className='text-2xl font-bold'>Drop a Banana Leaf Image here</h3>
                            <h4>or</h4>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} className='border w-full p-2 rounded-xl file:bg-green-900 file:p-2 file:text-white file:rounded-lg file:text-xs file:cursor-pointer' />
                        </div>
                    </div>
                    <div className='mt-5 w-[90%] lg:w-[50%] flex flex-col items-center justify-center'>
                        {image && <img src={image} className='w-full h-96 rounded-2xl object-cover shadow cursor-pointer' />}
                        <button type='submit' className='px-10 py-3 rounded-lg text-xs bg-green-900 text-white mt-5 cursor-pointer'>Predict</button>
                    </div>
                    <div className='my-5'>
                        {prediction && 
                        <div>
                            <h3 className='text-lg font-semibold'>Prediction: {prediction?.class}</h3>
                            <h3 className='text-lg font-semibold'>Confidence: {parseFloat((prediction?.confidence *100 ).toFixed(2))}%</h3>

                        </div>}
                    </div>
                </form>
            </div>
  )
}

export default PredictDisease