// import { user } from "../../assets"
import { urlFor } from "../../lib/client"
// console.log(urlFor(user))

// const img=urlFor(user)
// const pic=(img.options.source).toString()
// console.log(pic)
// const myArray=pic.split('/')
// let image_address = myArray[3];



export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'city',
            title:'City',
            type:'string'
        },
        {
            name: 'imgurl',
            title: 'Imgurl',
            type: 'image',
            
            options: {
              hotspot: true,
            },
           
    
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        },
    
    ]
}