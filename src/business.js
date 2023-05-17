function Business(){
    const business1 = {
        imageSrc: '',
        name: '',
        address: '',
        city: 'Albany',
        state: 'NY',
        zipcode: '12123',
        category: 'Takeaway',
        rating: 4,
        reviewcount: 15,
    }
    
    return(
        <div>
            <p>{business1}</p>
        </div>
    );
}

export default Business;