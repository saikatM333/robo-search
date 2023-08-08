        import React, {useEffect} from 'react'
        
        export default function Robot(props) {

            useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")

            .then((response) => response.json())
    
            .then((json) => {
    
            props.setData(json);
    
            });
    
        }, []);
            console.log (props.data.name)

       /*     useEffect(() => {
                fetch("https://robohash.org")
    
                .then((response) => response.json())
        
                .then((json) => {
        
                props.setImage(json);
        
                });
        
            }, []);
                console.log (props.image)
    
*/
            

        return (


           /* <div className='container'>
                <div className='card-container'>
            { props.data.map((item , i)=>{
                
                    <div className='card'>
                        <div key={i}>
                <img src={`https://robohash.org/${i}`}></img>
                </div>
                    </div>
               


                }) 
                }</div>
                </div>*/

                <>
                  <div className='container grid'>
                    
                   {  
                    props.data.map((item,i)=>{
                        if(props.search==null || props.search==""){
                    console.log ("sss"+props.search)
                   
                     
                    return(
                                        <div className='card-container ' >
                        <div className='card' key={i}>
                            <div className='image'>
                                <img className='robo-img' src={`https://robohash.org/${item.id}`}/>
                            </div>
                            <div className='person-name'>{`${item.name}`}</div>
                            <div className='person-email'>{`${item.email}`}</div>
                        </div>
                    </div>
                    ) }
                    else{
                        if (item.name.includes(props.search)){
                            return(
                                <div className='card-container ' >
                <div className='card' key={i}>
                    <div className='image'>
                        <img className='robo-img' src={`https://robohash.org/${item.id}`}/>
                    </div>
                    <div className='person-name'>{`${item.name}`}</div>
                    <div className='person-email'>{`${item.email}`}</div>
                </div>
            </div>
            )
                        }
                    }
                } )
                   
                    
                    } 
                
                  </div>

                </>
            )
        
        }
        