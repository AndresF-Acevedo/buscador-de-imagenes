import { useState } from  "react"
import {Formik, Form, Field} from "formik";
import "./header.css"
import "./content.css"
import "./article.css"

const App = () => {
    const [photos, setPhotos] = useState([])
    const open= url => window.open(url)
    console.log({ photos })
  return (
      <div>
       <header>
         <Formik
           initialValues={{ search: `` }}
           onSubmit={async  values => {
               const response = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${values.search}`, {
                   headers: {
                       "Authorization": "Client-ID rGQ4tpAFm8O6hHZsMxfuSh4zsKMmcv7c3-Kt_v_0VoE"
                   }
               })
               const data= await response.json()
               setPhotos(data.results)
           }}
           >

             <Form>
                 <Field name="search" />
             </Form>
         </Formik>
       </header>
          <div>
              <h2>Search And Found Your Image</h2>
          </div>
          <div className={"container"}>
              <div className={"center"}>
                  {photos.map(photo =>
                  <article key={photo.id} onClick={() => open(photo.links.html)}>
                      <img src={photo.urls.regular} />
                  </article>)}
              </div>
          </div>
      </div>
  )
}

export default App
