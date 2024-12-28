import React from 'react'
import '../../assets/css/common.css'


export default function WebDesihn() {
  return (
    <>
    <div className='container-fluid '>

        <div className='container home-container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUNI9D6_PJ_4wYn0cdoIFN9fs5ON-9zApEg&s" alt="" className='w-75' />
                </div>
                <div className='col-md-6 '>
                    <div className='h1 pt-5'>
                    Web Design
                    </div>
                    <div className='text-secondary py-4 lh-lg' style={{ fontSize: '20px' }}>
                    Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.
                    </div>
                    {/* <div className='d-flex flex-row-reverse pe-5'>
                        <Button variant="primary" size="lg" className='my-3'>LEARN MORE ABOUT US</Button>
                    </div> */}
                </div>
            </div>
        </div>

    </div>
</>
  )
}
