import React, { Component } from 'react'

export class NewsItem extends Component {
  static propTypes = {}

  render() {
     let {title,description,imageUrl,NewsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
      <div className="card" >
      <h6><span className="position-absolute   translate-middle badge bg-danger" style={{zIndex:'1',left:'90%'}}>{source}</span></h6>
      <img src={!imageUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/24/6547ff94c98f4dd7535fef7798d7c0031669301536984177_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      
      <h5 className="card-title"><h6><span class="badge bg-success">New</span></h6>{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">by {author} on {new Date(date).toLocaleDateString()}</small></p>
    <a rel='noreferrer' href={NewsUrl} className="btn btn-sm btn-warning" target="_blank">Read more</a>
  </div>
</div>
      </div>
    )
  } 
}

export default NewsItem 