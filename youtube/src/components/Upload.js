import { useEffect, useState } from "react";
import styled from "styled-components";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { async } from "@firebase/util";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContainerUpload = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#000000a7;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    

`
const WapperUpload = styled.div`

    width: 600px;
    height: 600px;
    background-color: #999;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    justify-content: center;
    position: absolute;

    

`
const Close = styled.div`

    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover{
        color : #333
    }
 
`

const Title = styled.div`
    text-align: center;
    font-size: 18px;

`

const Inpput = styled.input`
    border: 1px solid ${({theme})=> theme.soft};
    color :  ${({theme})=> theme.text};
    border-radius: 3px;
    padding : 8px;
    background-color: transparent;
    
    

`
const InpputDecs = styled.textarea`
    border: 1px solid ${({theme})=> theme.soft};
    color :  ${({theme})=> theme.text};
    border-radius: 3px;
    padding-top : 10px;
    background-color: transparent;
    

`
const ButtonUpload = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor:pointer;
    font-weight:600;
    background-color: ${({theme})=> theme.text};
    color: ${({theme})=> theme.btnsignupcolor};
    &:hover{
        opacity: 0.8
}

`
const Label = styled.label`
    font-size:15px;
    font-weight:600;
    
`



function Upload({setOpen}) {

    const [img, setImg ] = useState(undefined)
    const [video, setVideo ] = useState(undefined)
    const [imgPer, setImgPer ] = useState(0)
    const [videoPer, setVideoPer ] = useState(0)
    const [inputs, setInputs] = useState({})


    const [tags, setTags ] = useState([])

    const navigate = useNavigate()


    const handleChange = (e)=>{
        setInputs ((pre)=>{
            return {...pre, [e.target.name]: e.target.value}
        })

    }

    const handleTags = (e) => {
        setTags(e.target.value.split(','));
        
    }


    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgURL" ? setImgPer(Math.round(progress)) : setVideoPer(Math.round(progress));
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
                }
            },  
            (error) => {},
            () => {
                
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs ((pre)=>{
                        return {...pre, [urlType]: downloadURL}
                    })
                });
              }
            )
        }


    useEffect(()=>{
       video && uploadFile(video, 'videoURL')

    },[video])
    useEffect(()=>{
       img && uploadFile(img, 'imgURL')
    },[img])

    const handleUpload = async(e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:3000/api/videos',{...inputs,tags},{
            withCredentials: true
        })
        setOpen(false)
        res.status === 200 && navigate(`api/video/${res.data._id}`)


    }
    return ( 
        <ContainerUpload>
            <WapperUpload>
                <Close onClick={()=>setOpen(false)}>X</Close>
                <Title>Upload a new video</Title>
                <Label>Video:</Label>
                {videoPer > 0 ? ("Uploading:"+ videoPer +'%') : (<Inpput type="file" accept="video/*" onChange={e=>setVideo(e.target.files[0])}/>)}
              
                <Inpput type="text" placeholder="Title" name='videoTitle' onChange={handleChange}/>
                
                <InpputDecs placeholder="Description" name='videoDecs' rows={8} onChange={handleChange}/>
                
                <Inpput type="text" placeholder="Tags" onChange={handleTags}/>
                <Label>Thumbnail image:</Label>
                {imgPer > 0 ? ("Uploading:"+ imgPer+'%') :(<Inpput type="file" accept="image/*" onChange={e=>setImg(e.target.files[0])}/>)}
                <ButtonUpload onClick={handleUpload}>Upload</ButtonUpload>


            </WapperUpload>
        </ContainerUpload>
     );
}

export default Upload