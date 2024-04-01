import"./Title.css"
export default function Title({title,subTitle})
{
    return(
        <div className="Title">
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    );
}