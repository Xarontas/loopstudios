import Container from 'react-bootstrap/Container';
export default function Gallery() {
    return (
        <>
            <Container>
                <div className='galleryWrapper'>
                    <div className='galleryDiv'>
                        <div className='galleryTitle'>our creations</div>
                        <div className='gallerybtn'>see all</div>
                    </div>
                    <div className='galleryPhotosDiv'>
                        <div className='galleryImage1'><span>deep earth</span></div>
                        <div className='galleryImage2'><span>night arcade</span></div>
                        <div className='galleryImage3'><span>soccer team vr</span></div>
                        <div className='galleryImage4'><span>the grid</span></div>
                        <div className='galleryImage5'><span>from up above vr</span></div>
                        <div className='galleryImage6'><span>pocket borealis</span></div>
                        <div className='galleryImage7'><span>the curiosity</span></div>
                        <div className='galleryImage8'><span>make it fisheye</span></div>
                    </div>
                    <div className='w-100 d-flex'>
                        <div className='gallerybtn2'>see all</div>
                    </div>
                </div>
            </Container>
        </>
    )
}