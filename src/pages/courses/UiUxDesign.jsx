import React from 'react'
import '../../assets/css/common.css'


export default function UiUxDesign() {
  return (
    <>
    <div className='container-fluid '>

        <div className='container home-container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJzUFXEIdnPs-Oeg8ANLc2aPdwU98niHbFQ&s" alt="" className='w-75' />
                </div>
                <div className='col-md-6 '>
                    <div className='h1 pt-5'>
                        UI UX Design
                    </div>
                    <div className='text-secondary py-4 lh-lg' style={{ fontSize: '20px' }}>
                    UI UX is a popular course that focuses on the creation of user-friendly and visually appealing interfaces. The course also covers the design of websites and applications. Students pursuing UI/UX design courses will learn various topics such as research, prototyping, HTML, CSS, wireframing, and user testing.
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
