import './hello.css'
function Hello({arr}) {
    const list = arr.map((el)=>{
        console.log(el);
       return <p>Hello {el}</p>
    })
    return (
        <div className='hellodiv'>
        <p>{list}</p> 
        </div>
    );
}

export default Hello;