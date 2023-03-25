const MyModal =({closeModal})=>{
    return(
        <>
        <div className="modal-wrapper" onclick={closeModal}></div>
        <div className="modal-container">
        <h2>Stay tuned</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Similique cupiditate eum iure, sint cum earum
             minus error enim sequi aperiam!
        </p>
        <button className='model-btn' onclick={closeModal} >Accept it</button>
        </div>
        </>
    );
};

export default MyModal