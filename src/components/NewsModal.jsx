import react from 'react'

const NewsModal=({show,article,
    onClose})=>{
        if(!show)
        {
            return null;
        }
    return(
        <div className='modal-overlay'>
            <div className='modal-content'>
                <span className='close-button'>
                    <i className='fa-solid fa-xmark' onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg></i> 
                </span>
                {article && (
                    <>
                        <img src={article.image}
                        alt={article.title} className='modal-image'/>
                        <h2 className='modal-title'>{article.title}</h2>
                        <p className='modal-source'>Source:{article.source.name}</p>
                        <p className='modal-date'>{new Date(article.publishedAt).toLocaleString('en-US',{
                            month:'short',
                            day:'2-digit',
                            year:'numeric',
                            hour:'2-digit',
                            minute:'2-digit'
                        })}
                        </p>
                        <p className='modal-content-text'>{article.content}</p>
                        <a href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='read-more-link'
                        >
                        Read More
                        </a>
                    </>
                )}


            </div>
        </div>
    )
}

export default NewsModal;