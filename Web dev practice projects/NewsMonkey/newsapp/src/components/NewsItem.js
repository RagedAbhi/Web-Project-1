import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        let d = new Date(date);
        date = d.toGMTString();
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://images.news18.com/ibnlive/uploads/2023/02/cheetah-167672546716x9.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-info">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
