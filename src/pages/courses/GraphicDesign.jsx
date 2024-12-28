import React from 'react'
import '../../assets/css/common.css'

export default function GraphicDesign() {
    return (
        <>
            <div className='container-fluid '>

                <div className='container home-container'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            <img src="https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?s=612x612&w=0&k=20&c=2YJG1My6Lu1T1FnzIPbimRNORcSbSuz6A8zb7HKNpx4=" alt="" className='w-75' />
                        </div>
                        <div className='col-md-6 '>
                            <div className='h1 pt-5'>
                                Graphic Design
                            </div>
                            <div className='text-secondary py-4 lh-lg' style={{ fontSize: '20px' }}>
                                Graphic Designers focus on branding, typography, layout, and the overall principles of design composition. They work on a range of materials, including advertisements, flyers, logos, packaging, and animations. Graphic design is one component of UX design. However, UX design looks at the overall product.
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
