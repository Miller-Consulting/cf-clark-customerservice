import React, {useEffect, useState} from 'react';
import axios from 'axios'


const EmployeeCard = ({post}) => {
    const {Name, Phone, email, Title} = post.acf
    const photoId = post.featured_media;

    const [photoUrl, setPhotoUrl] = useState("");

    useEffect(() => {
        axios.get(`https://asphosting.millerconsulting.com/wpdev/wp-json/wp/v2/media/${photoId}`)
        .then( res =>
            // cannot access source_url for certain photos, manually constructing url from file name instead
            // console.log(res.data.media_details.file)
            setPhotoUrl(`https://asphosting.millerconsulting.com/wpdev/wp-content/uploads/${res.data.media_details.file}`)
            
        )
        .catch(err=> 
            console.log(err)
        )
        
    }, []);
    return (
        <div className="card">
        <div className="img-and-contact">
           <div className="imgWrapper">
              <img className="headshot" src={photoUrl}  style={{height:"100%", borderRadius:"2000px"}}/>
            </div>
          <div className="contact-container">
            <h2>{Name}</h2>
            <h3>{Title}</h3>
            <a href={"tel:"+{Phone}}>{Phone}</a> <br />
            <a href={"mailto:"+{email}}>{email}</a> <br />
                 
          </div> 
        </div>
        </div>
    );
}

export default EmployeeCard;
