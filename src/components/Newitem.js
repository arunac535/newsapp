

const Newitem =(props)=> {



        return (
            
            <div>
                <div className="card my-2" >
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:'0'
                    }}>
                    <span className="badge rounded-pill bg-danger mx-8 btn-lg">{props.source}</span>
                    </div>
                    <img src={props.imageurl}className="card-img-top" alt="..."/>
                        <div className="card-body">


                            <p className="card-text">{props.description}...<a rel="noreferal" href={props.newsurl} className="btn btn-outline-info mx-2">Read More</a></p>
                            <small className="text-muted">By {props.author} Published on {new Date(props.date).toUTCString()}</small>
                            
                            
                        </div>
                </div>
            </div>
        )
}

export default Newitem