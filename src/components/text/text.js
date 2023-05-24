import './text.css'


function Text({text, position, isError, isLoading}) {
    const textBefore = text.substring(0, position)
    const letterNow = text[position]
    const textAfter = text.slice(position + 1)

    return (
        <div className='text'>
            {isLoading ?
                <div>
                    Loading...
                </div>
                :
                <>
                    <span>{textBefore}</span>
                    <span className={`select ${isError ? 'error' : null}`}>{letterNow}</span>
                    <span>{textAfter}</span>
                </>
            }
        </div>
    );
}

export default Text